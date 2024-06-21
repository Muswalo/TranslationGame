import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import InputBox from "./InputBox";
import { auth, db } from "../firebase";
import {
  collection,
  query,
  where,
  getDoc,
  getDocs,
  doc,
  updateDoc,
  setDoc,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import gradeResponse from "../Grading/gradingModule";

const AppDashBoard = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [isStart, setIsStart] = useState(true);
  const [agscore, setAgscore] = useState(0);
  const [score, setScore] = useState(0);
  const [totalT, setTotalT] = useState(20);
  const [currentLevel, setCurrentLevel] = useState("Level");
  const [user, setUser] = useState(null);
  const [next, setNext] = useState(false);

  const checkLastMessageType = (messages) => {
    if (messages.length === 0) {
      return false;
    }
    const lastMessage = messages[messages.length - 1];
    return lastMessage.type === "Student" || lastMessage.type === "Answer";
  };

  const handleSnapshotError = (error) => {
    console.error("Snapshot error:", error);
  };

  const fetchAndSetMessages = async (userId, setMessages, level) => {
    const messagesCollection = collection(db, "messages");
    const q = query(
      messagesCollection,
      where("userId", "==", userId),
      where("level", "==", level),
      orderBy("timestamp", "asc")
    );

    try {
      const querySnapshot = await getDocs(q);
      const messagesList = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMessages(messagesList);
      setIsStart(messagesList.length === 0);
    } catch (error) {
      handleSnapshotError(error);
    }
  };

  const aggregateScoreListener = (userId, level) => {
    const messagesRef = collection(db, "messages");
    const q = query(
      messagesRef,
      where("userId", "==", userId),
      where("level", "==", level),
      where("type", "==", "Answer")
    );
  
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        let totalScore = 0;
        let docCount = 0;
        querySnapshot.forEach((doc) => {
          totalScore += doc.data().score;
          docCount++;
        });
        // Calculate the average score and round it to the nearest whole number
        const averageScore = docCount > 0 ? Math.round(totalScore / docCount) : 0;
        setAgscore(averageScore);
      },
      handleSnapshotError
    );
  
    return unsubscribe;
  };
  

  const documentCountListener = (collectionName) => {
    const collectionRef = collection(db, collectionName);

    const unsubscribe = onSnapshot(
      collectionRef,
      (querySnapshot) => {
        setTotalT(querySnapshot.size);
      },
      handleSnapshotError
    );

    return unsubscribe;
  };

  const questionsAnsweredCountListener = (userId, level) => {
    const messagesRef = collection(db, "messages");
    const q = query(
      messagesRef,
      where("userId", "==", userId),
      where("level", "==", level)
    );

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const questionIds = new Set();
        querySnapshot.forEach((doc) => {
          questionIds.add(doc.data().questionId);
        });
        setScore(questionIds.size);
      },
      handleSnapshotError
    );

    return unsubscribe;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        fetchCurrentLevel(user.uid).then((result) => {
          setCurrentLevel(result);
          const currentUserId = user.uid;
          fetchAndSetMessages(currentUserId, setMessages, result).then(() => {
            // Call the listeners and store the unsubscribe functions
            const unsubscribeAggregate = aggregateScoreListener(
              user.uid,
              currentLevel
            );
            const unsubscribeDocumentCount =
              documentCountListener(currentLevel);
            const unsubscribeQuestionsAnswered = questionsAnsweredCountListener(
              user.uid,
              currentLevel
            );

            // Cleanup function
            return () => {
              unsubscribeAggregate();
              unsubscribeDocumentCount();
              unsubscribeQuestionsAnswered();
            };
          });
        });
      }
    });
    return () => unsubscribe();
  }, [currentLevel]);

  useEffect(() => {
    // Call checkLastMessageType and update the next state based on the result
    if (messages) {
      const isNextEnabled = checkLastMessageType(messages);
      setNext(isNextEnabled);
    }
  }, [messages]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const getCorrectValue = async (collectionName, documentId) => {
    try {
      const docRef = doc(db, collectionName, documentId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data().english;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };

  const handleInput = async () => {
    const lastQuestionId = getLastQuestionId(messages);
    console.log (lastQuestionId)
    // await handleMessageSubmit("Student", inputValue, 0, lastQuestionId);

    // getCorrectValue(currentLevel, lastQuestionId).then((correctValue) => {
    //   const score = gradeResponse(correctValue, inputValue);
    //   handleMessageSubmit("Answer", correctValue, score, lastQuestionId);
    // });
  };

  const getLastQuestionId = (messages) => {
    // Find the last message with type "Translate"
    const lastTranslateMessage = messages
      .slice()
      .reverse()
      .find((msg) => msg.type === "Translate");

    // Return the questionId of the last "Translate" message, or null if not found
    return lastTranslateMessage ? lastTranslateMessage.questionId : null;
  };

  // types Answer, Translate, Student
  const handleMessageSubmit = async (type, message, score, questionId) => {
    const newMessage = {
      type: type,
      message: message,
      score: score,
    };
    await addMessage(user.uid, currentLevel, type, message, score, questionId);
    setMessages((currentMessages) => [...currentMessages, newMessage]);
    setInputValue("");
  };

  const start = async () => {
    const questionId = Math.floor(Math.random() * 20) + 1;
    const questionIdStr = questionId.toString();
    await startRound(questionIdStr);
  };

  const startRound = async (questionIdStr) => {
    const questionRef = doc(db, currentLevel, questionIdStr);
    try {
      const questionSnap = await getDoc(questionRef);
      if (questionSnap.exists()) {
        const questionData = questionSnap.data();
        console.log(questionData);
        handleMessageSubmit("Translate", questionData.nyanja, 0, questionIdStr);
        setIsStart(false);
      } else {
        console.log(`No such question in ${currentLevel}!`);
      }
    } catch (error) {
      console.error("Error fetching question: ", error);
    }
  };

  const handleNext = async () => {
    const usedIds = await checkUsedIds();
    console.log (usedIds);
    const id = generateId (usedIds);
    startRound (id.toString());
  };

  const generateId = (usedIds) => {
    if (totalT !== 0) {
      let questionId;
      do {
        questionId = Math.floor(Math.random() * totalT) + 1;
      } while (usedIds.includes(questionId.toString()));
      return questionId;
    }
    // Return null if totalT is 0 to indicate no ID can be generated
    return null; 
  };
  

  const checkUsedIds = async () => {
    const messagesRef = collection(db, "messages");
    const q = query(
      messagesRef,
      where("userId", "==", user.uid),
      where("level", "==", currentLevel)
    );

    try {
      const querySnapshot = await getDocs(q);
      const usedIds = new Set();
      querySnapshot.forEach((doc) => {
        usedIds.add(doc.data().questionId);
      });

      return Array.from(usedIds);
    } catch (error) {
      console.error("Error fetching used question IDs:", error);
    }
  };

  const fetchCurrentLevel = async (userId) => {
    const userDocRef = doc(db, "users", userId);

    try {
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();

        if (!userData.Level1) {
          return "Level1";
        } else if (!userData.Level2) {
          return "Level2";
        } else if (!userData.Level3) {
          return "Level3";
        } else {
          return "Level3";
        }
      } else {
        console.log("No such user document!");
        return "No user data found";
      }
    } catch (error) {
      console.log("Error fetching user data: ", error);
      return "Error fetching user data";
    }
  };

  const setLevel = async (userId, level) => {
    const userDocRef = doc(db, "users", userId);
    try {
      await updateDoc(
        userDocRef,
        {
          [level]: true,
        },
        { merge: true }
      );
    } catch (error) {
      console.log("Error setting level: ", error);
    }
  };

  const addMessage = async (
    userId,
    level,
    type,
    message,
    score,
    questionId
  ) => {
    // Create a new message object with the question ID included
    const newMessage = {
      userId,
      level,
      type,
      message,
      score,
      questionId,
      timestamp: new Date(),
    };

    try {
      // Create a new document with an auto-generated ID
      const docRef = doc(collection(db, "messages"));
      await setDoc(docRef, newMessage);
      console.log(
        "Message added with ID:",
        docRef.id,
        "and question ID:",
        questionId
      );
    } catch (error) {
      console.error("Error adding message:", error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="chat-container">
        <Sidebar />
        <MainContent
          messages={messages}
          agscore={agscore}
          score={score}
          totalT={totalT}
          currentLevel={currentLevel}
        />
      </div>
      <InputBox
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onMessageSubmit={handleInput}
        isStart={isStart}
        start={start}
        showNext={next}
        onNext={handleNext}
      />
    </div>
  );
};

export default AppDashBoard;

const insertSentences = async () => {
  console.log ('insert')
  const sentences = [
      {
        nyanja: "Muli bwanji?",
        english: "How are you?",
      },
      {
        nyanja: "Ndili bwino, zikomo.",
        english: "I am fine, thank you.",      },
      {
        nyanja: "Dzina lanu ndani?",
        english: "What is your name?",      },
      {
        nyanja: "Dzina langa ndi...",
        english: "My name is...",      },
      {
        nyanja: "Mukuchita chiyani?",
        english: "What are you doing?",      },
      {
        nyanja: "Ndikuphika chakudya.",
        english: "I am cooking food.",      },
      {
        nyanja: "Mukupita kuti?",
        english: "Where are you going?",      },
      {
        nyanja: "Ndikupita kusukulu.",
        english: "I am going to school.",      },
      {
        nyanja: "Chakudya chabwino!",
        english: "Good food!",      },
      {
        nyanja: "Muli ndi ana angati?",
        english: "How many children do you have?",      },
      {
        nyanja: "Ndili ndi ana awiri.",
        english: "I have two children.",      },
      {
        nyanja: "Mukufuna chiyani?",
        english: "What do you want?",      },
      {
        nyanja: "Ndikufuna madzi.",
        english: "I want water.",      },
      {
        nyanja: "Chimbudzi chili kuti?",
        english: "Where is the bathroom?",      },
      {
        nyanja: "Pitani kumanzere.",
        english: "Go to the left.",      },
      {
        nyanja: "Ndi nthawi yanji?",
        english: "What time is it?",      },
      {
        nyanja: "Ndi nthawi ya chakudya.",
        english: "It's mealtime.",      },
      {
        nyanja: "Mwasangalala lero?",
        english: "Did you have fun today?",      },
      {
        nyanja: "Inde, ndasangalala.",
        english: "Yes, I had fun.",      },
      {
        nyanja: "Tiwonana mawa.",
        english: "See you tomorrow.",      }
        ];

        sentences.forEach(async (sentence, index) => {
          const docId = (index + 1).toString();             
          const sentenceRef = doc(collection(db, 'Level1'), docId);
          await setDoc(sentenceRef, sentence);
        });  
      };




      const subscribeToMessages = (userId, setMessages, level) => {
        const messagesCollection = collection(db, "messages");
        const q = query(
          messagesCollection,
          where("userId", "==", userId),
          where("level", "==", level)
        );
    
        const unsubscribe = onSnapshot(
          q,
          (snapshot) => {
            const messagesList = snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
            setMessages(messagesList);
            setIsStart(messagesList.length === 0);
          },
          handleSnapshotError
        );
    
        return unsubscribe;
      };
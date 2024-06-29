import React, { useEffect, useState } from "react";
import { where, query, onSnapshot, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Grades = () => {
  const [grades, setGrades] = useState([]);
  const handleSnapshotError = (error) => {};
  const aggregateScoreListener = (userId, level) => {
    const messagesRef = collection(db, "messages");
    const q = query(
      messagesRef,
      where("userId", "==", userId),
      where("level", "==", `Level${level}`),
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
        const averageScore =
          docCount > 0 ? Math.round(totalScore / docCount) : 0;
        setGrades((prevGrades) => {
          const newGrades = [...prevGrades];
          newGrades[level - 1] = averageScore;
          return newGrades;
        });
      },
      handleSnapshotError
    );

    return unsubscribe;
  };

  useEffect(() => {
    let unsubscribeAggregate;
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        for (let level = 1; level <= 3; level++) {
          unsubscribeAggregate = aggregateScoreListener(user.uid, level);
        }
      }
    });
    return () => {
      unsubscribe();
      if (unsubscribeAggregate) {
        unsubscribeAggregate();
      }
    };
  }, []);

  // Function to generate comment based on grade
  const generateComment = (grade) => {
    if (grade >= 90) {
      return "Excellent work!";
    } else if (grade >= 80) {
      return "Good job!";
    } else if (grade >= 70) {
      return "Keep trying!";
    } else if (grade == 0) {
      return "-";
    } else {
      return "Needs improvement.";
    }
  };

  return (
    <div className="container">
      <h1 className="title">Grades</h1>
      <table className="table is-fullwidth is-striped">
        <thead>
          <tr>
            <th>Level</th>
            <th>
              <i className="fa fa-star"></i> Grade
            </th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{grade}</td>
              <td>{generateComment(grade)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grades;

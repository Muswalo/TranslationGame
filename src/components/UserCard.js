import React, { useState } from "react";
import { where, query, getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import userImage from "../assets/images/user.png";
import "../css/admin.css";

const UserCard = ({ name, email, userId, id, onDelete }) => {
  const [showLevels, setShowLevels] = useState(false);
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCardClick = () => {
    setShowLevels(!showLevels);
    if (!showLevels) {
      // Fetch grades only when the card is expanded
      setLoading(true);
      fetchGrades(userId);
    }
  };

  const fetchGrades = async (userId) => {
    const gradesPromises = Array.from({ length: 3 }, (_, i) => {
      const level = i + 1;
      const messagesRef = collection(db, "messages");
      const q = query(
        messagesRef,
        where("userId", "==", userId),
        where("level", "==", `Level${level}`),
        where("type", "==", "Answer")
      );

      return getDocs(q).then((querySnapshot) => {
        let totalScore = 0;
        let docCount = 0;
        querySnapshot.forEach((doc) => {
          totalScore += doc.data().score;
          docCount++;
        });
        return docCount > 0 ? Math.round(totalScore / docCount) : 0;
      });
    });

    const grades = await Promise.all(gradesPromises);
    setGrades(grades);
    setLoading(false);
  };

  const handleDelete = (userId) => {
    onDelete(userId);
  };

  return (
    <div className="userCard">
      <div className="cont">
        <div onClick={handleCardClick}>
          <div className="userImage">
            <img src={userImage} id="PlaceholderImage" />
          </div>

          <div className="details">
            <strong className="name">{name}</strong>
            <span className="email">{email}</span>
          </div>
        </div>
        <span id="deleteButton" onClick={() => handleDelete(userId)}>
          <i className="fa fa-trash"></i>
        </span>
      </div>

      <div>
        {showLevels && (
          <div className="levels">
            {loading ? (
              <div>
                <i className="fa fa-spinner" aria-hidden="true"></i>
              </div>
            ) : (
              grades.map((grade, index) => (
                <span key={index} className="level">
                  <strong>Level{index + 1}:</strong> {grade}%
                </span>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;

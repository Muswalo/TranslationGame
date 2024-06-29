import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import {
  doc,
  writeBatch,
  collection,
  query,
  getDocs,
  where,
  getDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebase";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const fetchIsAdmin = async (userId) => {
    try {
      const userDoc = await getDoc(doc(db, "users", userId));
      if (userDoc.exists()) {
        return userDoc.data().isAdmin;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const usersQuery = query(collection(db, "users"));
      const usersSnapshot = await getDocs(usersQuery);
      setUsers(
        usersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };

    const checkIsadmin = async (user) => {
      try {
        setUser(user ? user : null);
        if (user) {
          const isAdmin = await fetchIsAdmin(user.uid);
          if (!isAdmin) {
            navigate("/");
          }
        }
      } catch (error) {
        console.log("error auth");
      }
    };

    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      checkIsadmin(user).then(() => {
        fetchUsers();
      });
    });
    return () => {
      unsubscribeAuth();
    };
  }, []);

  const handleDelete = async (userId) => {
    alert("This function has not been implemented for security reasons.");
    // this function is supposed to use cloud functions together with the
    // firebase admin SDK. but this project is currently
    // running on the spark plan and cant deploy cloud function
    // if you wish to make it work please check contact me i give you the script to run on functions or a walk through
  };

  return (
    <div>
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={`${user.firstName} ${user.lastName}`}
          email={user.email}
          userId={user.id}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default AdminDashboard;

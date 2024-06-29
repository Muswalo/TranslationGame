import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { auth } from "./firebase";
import { SidebarProvider } from "./contexts/SidebarContext";
import { useAdmin } from "./contexts/AdminContext";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpform";
import Loader from "./components/Loader";
import AppDashBoard from "./components/AppDashBoard";
import AdminDashboard from "./components/AdminDashboard ";
import Settings from "./components/Settings";
import Grades from "./components/Grades";

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const { setAdmin, removeAdmin } = useAdmin();

  const fetchIsAdmin = async (userId) => {
    try {
      const userDoc = await getDoc(doc(db, "users", userId));
      if (userDoc.exists()) {
        return userDoc.data().isAdmin;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error fetching document: ", error);
      return false;
    }
  };

  const handleAuthStateChanged = async (user) => {
    try {
      setUser(user ? user : null);
      if (user) {
        const isAdmin = await fetchIsAdmin(user.uid);
        if (isAdmin) {
          setAdmin();
        } else {
          removeAdmin();
        }
      }
      setInitializing(false);
    } catch (error) {
      console.log("Error in setting auth");
    }
  };

  useEffect(() => {
    if (auth) {
      const unSubscribe = onAuthStateChanged(auth, handleAuthStateChanged);
      return () => unSubscribe();
    }
  }, [initializing]);

  if (initializing) {
    return <Loader />;
  }

  return (
    <SidebarProvider>
      <Router>
        <Routes>
          {user ? (
            <React.Fragment>
              <Route path="/grades" element={<Grades />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/admin" element={<AdminDashboard />} />

              <Route path="/*" element={<AppDashBoard />} />
            </React.Fragment>
          ) : (
            <>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/*" element={<LoginForm />} />
            </>
          )}
        </Routes>
      </Router>
    </SidebarProvider>
  );
};

export default App;

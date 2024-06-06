import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { SidebarProvider } from "./contexts/SidebarContext";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpform";
import Loader from "./components/Loader";
import AppDashBoard from "./components/AppDashBoard";

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  const handleAuthStateChanged = async (user) => {
    try {
      setUser(user ? user : null);
      setInitializing(false);
    } catch (error) {
      console.log("Error in handleAuthStateChanged: ", error);
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
            <Route path="/*" element={<AppDashBoard />} />
          ) : (
            <React.Fragment>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/*" element={<LoginForm />} />
            </React.Fragment>
          )}
        </Routes>
      </Router>
    </SidebarProvider>
  );
};

export default App;
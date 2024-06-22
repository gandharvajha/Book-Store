import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Home/Home';
import CoursesDetail from './courses/CoursesDetail';
import Signup from './components/Signup';
import Contact from "./components/Contact";
import { useAuth } from './Context/AuthProvider';
import About from './components/About';
// import Login from "./components/Login";

const App = () => {
  const [authUser, setAuthUser] = useAuth();

  useEffect(() => {
    // Fetch and set authentication user
    const user = JSON.parse(localStorage.getItem("User"));
    if (user) {
      setAuthUser(user);
    }
  }, [setAuthUser]);

  return (
    <div className={`app ${authUser ? 'authenticated' : ''}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser ? <CoursesDetail /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/Home'
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Verify from './pages/auth/Verify';
import Courses from './pages/courses/Courses';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Account from './pages/account/Account';
import { UserData } from './context/UserContext';


const App = () => {
  // receive value from user data from user context 
  const { isAuth, user } = UserData();
  // console.log(user)
  return (
    <>
      <BrowserRouter>
        <Header isAuth={isAuth} user={user} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={isAuth ? <Home /> : <Login />} />
          <Route path='/register' element={isAuth ? <Home /> : <Register />} />
          <Route path='/verify' element={isAuth ? <Home /> : <Verify />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/about' element={<About />} />
          <Route path='/account' element={isAuth ? <Account user={user} /> : <Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
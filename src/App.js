import './css/App.css';
import React from 'react'
import Header from "./components/Header" 
import Aboutme from "./components/Aboutme" 
import Spacer from "./components/Spacer"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
import Accomplishments from "./components/Accomplishments"
import Footer from "./components/Footer"
import {Route, Routes, Navigate} from "react-router-dom"
import EmailForm from "./components/EmailForm"

function App() {
  return (
    <Routes>
      <Route exact path="/portfolio" element={
        <div className="main">
          <Header/>
          <Aboutme/>
          <Spacer/>
          <Projects/>
          <Spacer/>
          <Technologies/>
          <Spacer/>
          <Accomplishments/>
          <Footer/>
        </div>
      }/>
      <Route exact path="/" element={ <Navigate to="/portfolio" /> }/>
      <Route exact path="/emailform" element={<EmailForm/>}/>
      <Route exact path="*" element={<h1>Page not found</h1>}/>
    </Routes>
  );
}

export default App;

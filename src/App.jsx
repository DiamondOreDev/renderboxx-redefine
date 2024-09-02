import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeMain from "./Pages/Home/HomeMain"
import React from "react"
import AboutUsPage from "./Pages/Home/AboutUsPage"
import ContactUsPage from "./Pages/Home/ContactUsPage"
import Project1HomeMain from "./Pages/Project1Haridwarparadisepage/Project1HomeMain"
import Project2HomeMain from "./Pages/Project2Devprayagparadisepage/Project2HomeMain"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={  <HomeMain/>}/>
          <Route path="/aboutus" element={<AboutUsPage/>}/>
          <Route path="/contactus" element={<ContactUsPage/>}/>
          <Route path="/haridwarparadise" element={<Project1HomeMain/>}/>
          <Route path="/devprayagparadise" element={<Project2HomeMain/>}/>
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App

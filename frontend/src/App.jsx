import { Routes, Route, HashRouter } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import HomeView from "./views/HomeView"
import ProjectsView from "./views/ProjectsView"
import AboutView from "./views/AboutView"
import ContactView from "./views/ContactView"


function App() {

  return (
    <div>
      <HashRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomeView />}/>
          <Route path="/projects" element={<ProjectsView />}/>
          <Route path="/about" element={<AboutView />}/>
          <Route path="/contact" element={<ContactView />}/>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App

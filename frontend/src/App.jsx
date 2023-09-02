import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomeView from "./views/HomeView"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {

  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomeView />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

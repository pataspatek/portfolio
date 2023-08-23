import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomeView from "./views/HomeView"
import Header from "./components/Header"


function App() {

  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomeView />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

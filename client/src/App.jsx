import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn.jsx"
import Home from "./pages/Home.jsx"
import AdminPage from "./pages/AdminPage.jsx"


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/AdminPage' element={<AdminPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
      
  )
}

export default App

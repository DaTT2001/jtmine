import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
// import Blog from "./pages/Blog/Blog"
import NoPage from "./pages/NoPage/NoPage"
import Login from "./pages/Login/Login"
import Admin from "./pages/Admin/Admin"
import Layout from "./pages/Layout"
import Tutorial from "./pages/Tutorial/Tutorial"
import BanList from "./pages/BanList/BanList"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* Nguoi dung */}
          <Route index path="/" element={<Home />} />
          <Route path='about-us' element={<About />} />
          <Route path='tutorial' element={<Tutorial />} />
          <Route path='ban-list' element={<BanList />} />
          <Route path='*' element={<NoPage />} />
          <Route path='login' element={<Login />} />

          {/* Admin (QTV) */}
          <Route path="admin" element={<Admin />} />

        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App

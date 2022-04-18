import { BrowserRouter, Routes, Route } from "react-router-dom"
import apiClient from "./services/apiClient";
import { useEffect, useState } from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/PageComp/About";
import Description from "./Components/PageComp/Description";
import Checklist from "./Components/PageComp/Checklist";
import Portfolio from "./Components/Portfolio/portfolio";
import Register from "./Components/RegisterLogin/Register";
import Login from "./Components/RegisterLogin/Login";
import Footer from "./Components/Footer/footer";

function App() {
  const[user, setUser] = useState({})
  const[projects, setProjects] = useState([])
  const[error, setError] = useState(null)
  const[isFetching, setIsFetching] = useState(false)
  
  useEffect(() => {

    const fetchProjects = async () => {
      setIsFetching(true)
      const { data, error } = await apiClient.listProjects()
      if(data) setProjects(data.projects)
      if(error) setError(error)
      setIsFetching(false)
    }
    fetchProjects()
  }, [])

  useEffect(() => {

    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken()
      if(data) setUser(data.user)
      if(error) setError(error)
    }
      const token = localStorage.getItem("portfolio_token")
      if(token){
        apiClient.setToken(token)
        fetchUser()
      }
  }, [])

  const handleLogout = async () => {
    await apiClient.logoutUser()
    setUser({})
    setError(null)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} handleLogout={handleLogout}/>
        <Routes>
          <Route path="/" element={ <Home  /> } />
          <Route path="/about" element={ <About  /> } />
          <Route path="/description" element={ <Description  /> } />
          <Route path="/checklist" element={ <Checklist  /> } />
          <Route path="/portfolio" element={ <Portfolio user={user} projects={projects}  error={error} isFetching={isFetching} /> } />
          <Route path="/login" element={ <Login user={user} setUser={setUser} /> } />
          <Route path="/register" element={ <Register user={user} setUser={setUser} /> } />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;

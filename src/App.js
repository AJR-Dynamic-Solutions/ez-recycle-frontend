import './App.css';
import {Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'
import mockUsers from './mockUsers'
import mockRecycle from './mockRecycle'
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import RecycleIndex from "./pages/RecycleIndex"
import RecycleProtectedIndex from "./pages/RecycleProtectedIndex"
import RecycleShow from "./pages/RecycleShow"
import RecycleEdit from "./pages/RecycleEdit"
import NotFound from "./pages/NotFound"
import RecycleNew from "./pages/RecycleNew"

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [recycles, setRecycles] = useState(mockRecycle)

  const createRecycle = (recycle) => {
  console.log(recycle)
  } 
  
  return (
  <>
  <Header currentUser={currentUser}/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/recycleindex" element={<RecycleIndex recycles={recycles}/>} />
    <Route path="/myrecycles" element={<RecycleProtectedIndex />} />
    <Route path="/recycleshow/:id" element={<RecycleShow recycles={recycles}/>} />
    <Route path="/recyclenew" element={<RecycleNew currentUser={currentUser} />} />
    <Route path="/recycleedit/:id" element={<RecycleEdit currentUser={currentUser} recycles={recycles} />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  <Footer />
</>
);
}
export default App;

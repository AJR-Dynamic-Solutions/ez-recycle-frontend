import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import mockUsers from "./mockUsers";
import mockRecycle from "./mockRecycle";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import RecycleIndex from "./pages/RecycleIndex";
import RecycleProtectedIndex from "./pages/RecycleProtectedIndex";
import RecycleShow from "./pages/RecycleShow";
import RecycleEdit from "./pages/RecycleEdit";
import NotFound from "./pages/NotFound";
import RecycleNew from "./pages/RecycleNew";

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0]);
  const [recycles] = useState(mockRecycle);
  console.log(currentUser)

  const createRecycle = (recycle) => {
    console.log(recycle);
  };

useEffect(() => {
  const loggedInUser = localStorage.getItem("user");
  if (loggedInUser) {
    setCurrentUser(JSON.parse(loggedInUser));
  }
}, []);

const signUp = (userInfo) => {
  fetch("http://localhost:3000/signup", {
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "POST",
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      localStorage.setItem("token", response.headers.get("Authorization"));
      return response.json();
    })
    .then((payload) => {
      localStorage.setItem("user", JSON.stringify(payload));
      setCurrentUser(payload);
    })
    .catch((error) => console.log("Sign up errors: ", error));
};

const signIn = (userInfo) => {
  fetch("http://localhost:3000/login", {
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "POST",
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      localStorage.setItem("token", response.headers.get("Authorization"));
      return response.json();
    })
    .then((payload) => {
      localStorage.setItem("user", JSON.stringify(payload));
      setCurrentUser(payload);
    })
    .catch((error) => console.log("Sign in errors: ", error));
};

const logout = () => {
  fetch(`http://localhost:3000/logout`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"), //retrieve the token
    },
    method: "DELETE",
  })
    .then((payload) => {
      localStorage.removeItem("token"); // remove the token
      localStorage.removeItem("user");
      setCurrentUser(null);
    })
    .catch((error) => console.log("log out errors: ", error));
};

  return (
    <>
      <Header currentUser={currentUser} logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn signIn={signIn} />} />
        <Route path="/signup" element={<SignUp signUp={signUp} />} />
        <Route
          path="/recycleindex"
          element={<RecycleIndex recycles={recycles} />}
        />
        {currentUser && (
          <Route
            path="/myrecycles"
            element={
              <RecycleProtectedIndex
                recycles={recycles}
                currentUser={currentUser}
              />
            }
          />
        )}
        <Route
          path="/recycleshow/:id"
          element={<RecycleShow recycles={recycles} />}
        />
        <Route
          path="/recyclenew"
          element={
            <RecycleNew
              currentUser={currentUser}
              createRecycle={createRecycle}
            />
          }
        />
        <Route
          path="/recycleedit/:id"
          element={
            <RecycleEdit currentUser={currentUser} recycles={recycles} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;

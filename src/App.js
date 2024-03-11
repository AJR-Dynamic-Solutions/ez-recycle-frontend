import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import RecycleIndex from "./pages/RecycleIndex";
import RecycleProtectedIndex from "./pages/RecycleProtectedIndex";
import RecycleShow from "./pages/RecycleShow";
import RecycleEdit from "./pages/RecycleEdit";
import NotFound from "./pages/NotFound";
import RecycleNew from "./pages/RecycleNew";
import AboutUs from "./pages/AboutUs";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [recycles, setRecycles] = useState([]);
  console.log(recycles);

  useEffect(() => {
    readRecycle();
  }, []);

  const readRecycle = () => {
    fetch("http://localhost:3000/recycles")
      .then((response) => response.json())
      .then((data) => setRecycles(data))
      .catch((errors) => console.log("Recycle read errors:", errors));
  };

  const createRecycle = (recycleInfo) => {
    fetch("http://localhost:3000/recycles", {
      body: JSON.stringify(recycleInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("token"), // Include authorization token
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((newRecycleData) => {
        // Update state to include the newly created listing
        setRecycles([...recycles, newRecycleData]);
      })
      .catch((error) => console.log("Create new listing errors: ", error));
  };

  const updateRecycle = (recycle, id) => {};

  const deleteRecycle = (id) => {};

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
        <Route path="/aboutus" element={<AboutUs />} />
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
                deleteRecycle={deleteRecycle}
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
            <RecycleEdit
              currentUser={currentUser}
              recycles={recycles}
              updateRecycle={updateRecycle}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;

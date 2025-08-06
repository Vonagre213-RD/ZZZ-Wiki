import "./App.css";
import { useEffect } from "react";
import Header from "@/components/organisms/Header";
import CharactersSection from "@/components/pages/CharactersSection";
import FavoritesSection from "./components/pages/FavoritesSection";
import MoreInfoSection from "@/components/pages/MoreInfoSection";
import { Route, Routes } from "react-router-dom";
import { useUserDataContext } from "./utils/hooks/useUserDataContext";

function App() {

  const { dispatch } = useUserDataContext();



  const token = localStorage.getItem("zzzApiLoginCredentials");
  useEffect(() => {
    async function initialLogin() {

      try {
        if (!token) {
          console.error("no token avaible"); return;
        }
        const response = await fetch('https://zenlesszonezeroapi.onrender.com/api/auth/profile', {
          headers: {
            authorization: `Bearer ${token}`
          },

        });

        if (response.status === 400) {
          console.error("server error"); return;
        }

        const data = await response.json();
        console.log(data);
        dispatch({
          type: "SET_USER", payload: {
            isloggedIn: data.successful,
            token: token,
            user: {
              user_id: data.user.user_id,
              username: data.user.username
            }
          }
        });
      }
      catch (error) {
        console.error(error);
      }
    }

    if (token === "" || token === null) {
      return;
    }
    else {
      initialLogin();
    }
  }, []);



  return (
    <div className="bg-diagonal-lines h-auto ">
      <Header />

      <Routes>
        <Route
          path="/"
          element={<CharactersSection />}
        />
        <Route
          path="/Favorites"
          element={<FavoritesSection />}
        />
        <Route path="/Mas/:id" element={<MoreInfoSection />} />
      </Routes>
    </div>
  );
}

export default App;

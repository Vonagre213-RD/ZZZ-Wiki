import "./App.css";
import { useEffect } from "react";
import Header from "@/components/organisms/Header";
import CharactersSection from "@/components/pages/CharactersSection";
import FavoritesSection from "./components/pages/FavoritesSection";
import MoreInfoSection from "@/components/pages/MoreInfoSection";
import { Route, Routes } from "react-router-dom";
import { useUserDataContext } from "./utils/hooks/useUserDataContext";
import { isOk } from "@/Types/result";
import { BASE_URL } from "@/Types/globals";

function App() {

  const { dispatch } = useUserDataContext();

  const token = localStorage.getItem("zzzApiLoginCredentials");
  useEffect(() => {
    async function initialLogin() {

      if (!token) {
        console.error("no token avaible"); return;
      }

      try {
        const response = await fetch(`${BASE_URL}/api/auth/profile`, {
          headers: {
            authorization: `Bearer ${token}`
          },
        });

        const data = await response.json();

        if (!isOk(data)) {
          console.error(data.error.message);
          return;
        }

        dispatch({
          type: "SET_USER", payload: {
            isloggedIn: data.value.successful,
            token: token,
            user: {
              user_id: data.value.user.user_id,
              username: data.value.user.username
            }
          }
        });
      } catch (e) {
        console.error("fetch error:", e);
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

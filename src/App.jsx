import React, { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import Dummy from "./components/Dummy";
import Navbar from "./components/Navbar";
import GlobalContext, { reducer, initialState } from "./GlobalContext";

export default function App() {
  // const initialState = { navbarOpen: false };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state: state, dispatch: dispatch }}>
      <BrowserRouter>
        <div className="bg-green-600">
          <div className="grid grid-cols-10">
            <Navbar />
            <div className="col-span-8 h-screen">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              vitae eveniet fugit, ex voluptate saepe cupiditate sed aspernatur
              commodi voluptatem! Eos nobis delectus reprehenderit temporibus
              facilis cum fuga saepe unde amet fugit fugiat ex natus dolores
              quas, neque, voluptatem mollitia sunt qui voluptas consectetur non
              recusandae, at aliquid quaerat? Eum.
              <Dummy />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Subscribe from "./pages/Subscribe";
import TicTacToe from "./components/TicTacToeGame/TicTacToe";
import Match from "./components/MatchGame/Match";
import LogIn from "./pages/LogInpage";
import SignUp from "./pages/SignUp";
import Boom from './components/boom/Board'
import Hangman from './components/HangManGame/FXHangman'
import Chess from '../src/components/chess'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Subscribe" element={<Subscribe />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/TicTacToe" element={<TicTacToe />} />
        <Route path="/Match" element={<Match />} />
        <Route path="/Boom" element={<Boom />} />
        <Route path="/Hangman" element={<Hangman />} />
        <Route path="/Chess" element={<Chess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

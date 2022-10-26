//routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Board1 from "./components/Board1";
import Board2 from "./components/Board2";
import Chat from "./components/Chat";
import Home from "./components/home/Home";
import SignIn from "./components/signin/SignIn";
import Login from './components/signin/Login';
import SignUp from './components/signin/SignUp';

//css 
import "./App.css";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/board1" element={<Board1 />}></Route>
          <Route path="/board2" element={<Board2 />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

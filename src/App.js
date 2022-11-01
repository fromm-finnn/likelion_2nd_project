//routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Board1 from "./components/FreeBoard";
import Board2 from "./components/InfoBoard";
import Board3 from "./components/SuggBoard";
import Board4 from "./components/GroupBoard";
import Board5 from "./components/ShareBoard";
import Board6 from "./components/RoommateFind";
import Chat from "./components/Chat";
import Home from "./components/home/Home";
import SignIn from "./components/signin/SignIn";
import Login from "./components/signin/Login";
import SignUp from "./components/signin/SignUp";
import MyPage from "./components/mypage/MyPage";
import MyPageEdit from "./components/mypage/MyPageEdit";
import Header from './components/Header';

//css
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route pathe="/mypageedit" element={<MyPageEdit />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/freeboard" element={<Board1 />}></Route>
          <Route path="/infoboard" element={<Board2 />}></Route>
          <Route path="/suggboard" element={<Board3 />}></Route>
          <Route path="/groupboard" element={<Board4 />}></Route>
          <Route path="/shareboard" element={<Board5 />}></Route>
          <Route path="/roommatefind" element={<Board6 />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

"use client";
import './globals.css';
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import LogonPage from "./components/LogonPage";
import ChatPage from './components/ChatPage';
import FilePage from './components/FilePage';
import LoginPage from './components/Loginpage';
import ProfilePage from './components/ProfilePage';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
//import Link from "next/link";


function App() {
  return (
    <Router>
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} /> {/* ホーム画面 */}
        <Route path="/logon" element={<LogonPage />} /> {/* ホーム画面 */}
        <Route path="/chat" element={<ChatPage />} /> {/* ブログページ */}
        <Route path="/file" element={<FilePage />} /> {/* 資料ページ */}
        <Route path="/login" element={<LoginPage />} /> {/* ログインページ */}
        <Route path="/profile" element={<ProfilePage />} /> {/* プロフィールページ */}

        
      </Routes>
    </div>
    </Router>
  );
}

export default App;

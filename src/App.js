import './App.css';
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ChatPage from './components/ChatPage';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";



function App() {
  return (
    <Router>
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} /> {/* ホーム画面 */}
        <Route path="/chat" element={<ChatPage />} /> {/* ブログページ */}

        
      </Routes>
    </div>
    </Router>
  );
}

export default App;

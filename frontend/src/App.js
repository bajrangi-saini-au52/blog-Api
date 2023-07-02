import './App.css';
import{BrowserRouter as Router , Route, Routes} from "react-router-dom"
import join from "./component/join/join";
import chat from "./component/chat/chat"

function App() {
  return (
    <div>
      <Router>

          <Routes>
           <Route exact path="/" Component={join} />
           <Route path="/chat" Component={chat}/>
          </Routes>
    
        </Router>
    </div>
  );
}

export default App;

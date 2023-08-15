import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import Action from "./components/actionPage";
import Drama from "./components/dramaPage";
import Comedy from "./components/comedyPage";
import Horror from "./components/horrorPage";

function App() {


  return (
    <div className="App">
      <Router>
        

        <div className="display">
          <Routes>
          
            <Route  path="/" element={<Home/>} />
            <Route path="actionPage" element={<Action/>} />
            <Route path="dramaPage" component={Drama} />
            <Route path="comedyPage" component={Comedy} />
            <Route path="horrorPage" component={Horror} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;


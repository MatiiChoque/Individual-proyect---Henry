import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import ActivityCreate from "./components/ActivityCreate";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" Component={LandingPage} />
          <Route path="/home" Component={Home} />
          <Route path="/activities" Component={ActivityCreate} />
          <Route path="/home/:id" Component={Detail} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

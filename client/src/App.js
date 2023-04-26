import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import ActivityCreate from "./components/ActivityCreate/ActivityCreate";
import Detail from "./components/Detail/Detail";
import ActivityList from "./components/ActivityList/ActivityList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" Component={LandingPage} />
          <Route path="/home" Component={Home} />
          <Route path="/activities" Component={ActivityCreate} />
          <Route path="/home/:id" Component={Detail} />
          <Route path="/activities/list" Component={ActivityList} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

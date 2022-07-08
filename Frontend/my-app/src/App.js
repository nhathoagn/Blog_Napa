import logo from './logo.svg';
import './App.css';
import Signup from "./components/signup/signup"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home/home";
function App() {

  return (
    <div className="App">
        {/*<Signup/>*/}
      {/*<header className="App-header">*/}

      {/*</header>*/}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signup/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

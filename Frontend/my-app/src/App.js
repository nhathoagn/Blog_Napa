import logo from './logo.svg';
import './App.css';
import Signup from "./components/signup/signup"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home/home";
import {Layout} from "antd";
import {Footer, Header} from "antd/lib/layout/layout";
import {Content} from "antd/es/layout/layout";
import Head from "./components/common/head/Head";
import AppHeader from "./components/common/head/Head";
import AppHome from "./components/home/home";
import AppFooter from "./components/common/footer/Footer";
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
                <Route path="/home" element={
                    <Layout className="mainLayout">
                        <Header>
                            {/*<AppHeader/>*/}
                        </Header>
                        <Content>
                            <AppHome/>
                        </Content>
                        {/*<Footer>*/}
                        {/*    <AppFooter/>*/}
                        {/*</Footer>*/}
                    </Layout>
                }/>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;

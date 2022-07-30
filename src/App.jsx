// This project was made by watching several YouTube videos and aritles
// https://ant.design/components/anchor/#header
// https://ant.design/docs/react/introduce\
// https://www.youtube.com/watch?v=7mZ4yguae9Q
// https://www.youtube.com/watch?v=hQjlM-8C4Ps&feature=youtu.be
// https://bennettfeely.com/clippy/
// chrome-extension://fdpohaocaechififmbbbbbknoalclacl/welcome.html
// https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl/related


import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import { ThemeContext } from "./context";

//THE FOLLOWING IS FOR THE NAVIGATION BAR
// import Navbar from "./components/navbar/Navbar";
import Navbar from "./Navbar"
import Home from "./components/Home"
import "./styles.css"
import ReactDOM from 'react-dom';
import { useRoutes } from "react-router-dom"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';



const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Router>
      <div
        style={{
          backgroundColor: darkMode ? "#222" : "white",
          color: darkMode && "white",
        }}
      > 
        <Navbar />
          {/* <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Route>
         */}
        <Intro />
        <ProductList />
        <About />
        <Contact />

      </div>
    </Router>
  );
};

export default App;

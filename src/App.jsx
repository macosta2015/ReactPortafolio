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

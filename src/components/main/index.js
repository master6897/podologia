
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import {useState} from 'react';

import './App.css';
import Navigation from "../navigation";
import MainContainer from "../mainContainer";
import PricePage from "../pages/pricePage";
import Footer from "../footer";
import ContactPage from "../pages/contactPage";
import About from "../pages/about";
import Disease from "../pages/disease";
import ScrollToTop from "../helpers/scrollToTop";
import Portfolio from "../pages/portfolio";


function App() {
  let [isScrolled, setScroll] = useState(false);
    window.onscroll = () =>{
    if(window.scrollY > 500){
      setScroll(true);
    }else if(window.scrollY <=500){
      setScroll(false);
    }
  }
  return (
    <Router>
      <ScrollToTop/>
    <div className="App">
      <Navigation scrolled={isScrolled}/>
      <Switch>
        <Redirect exact from='/' to='/dashboard'></Redirect>
        <Route path='/dashboard' exact component={MainContainer}></Route>
        <Route path='/prices' component={PricePage}></Route>
        <Route path='/contact' component={ContactPage}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/disease' component={Disease}></Route>
        <Route path='/portfolio' component={Portfolio}></Route>
        <Route render={() => <Redirect to={{pathname: "/"}} />} />
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;

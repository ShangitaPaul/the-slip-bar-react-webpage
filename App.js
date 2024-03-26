import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/about/About";
import RedondoBeach from "./components/RedondoBeach";
import Lomita from "./components/Lomita";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import JobsPage from "./components/JobsPage";




function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/redondo-beach' component={RedondoBeach} />
        <Route path='/lomita' component={Lomita} /> 
        <Route path='/jobs' component={JobsPage} />
        <Route path='/contact' component={Contact} />
        <Footer />  
      </div>
    </Router>
  );
}

export default App;
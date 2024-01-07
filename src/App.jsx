import React from "react";
import "./App.css"
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepages from "./components/home/Homepages";
import Footer from "./components/common/footer/Footer";
import Culture from "./components/culture/Culture";
import Single from './components/single/Single'

const App = () => {
  return (
    <>
      <Router>

        <Header />
        
        <Switch>
            <Route exact path='/' component={Homepages} />
            <Route exact path='/single/:id' component={Single} />
            <Route exact path='/culture' component={Culture} />
        </Switch>

        <Footer />
        
    </Router>
    </>
  )
}

export default App;
import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer"
import Landing from "./components/layout/Landing";
import Alert from "./components/layout/Alert"
import Profiles from "./components/profile/Profiles";
import Profile from "./components/profile/Profile";
import Transfer from "./components/profile/Transfer"
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Alert/>
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/profile" component={Profiles} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/transfer" component={Transfer} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
    </Provider>
  );
}

export default App;

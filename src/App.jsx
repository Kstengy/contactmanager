// React stuff
import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Contacts from "./Components/contacts/Contacts";
import AddContact from "./Components/contacts/AddContact";
import EditContact from "./Components/contacts/EditContact";
import Header from "./Components/layout/header/Header";
import About from "./Components/pages/About";
import NotFound from "./Components/pages/NotFound";
import Test from "./Components/test/Test";

// State manager
import { Provider } from "./context";

// Design stuff
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            {/* The header should be on every page so start building routes below it */}
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

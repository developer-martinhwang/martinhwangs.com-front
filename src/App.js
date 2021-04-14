import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Css
import './App.scss';

// Material-UI
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

// Pages Component
import home from './components/pages/home/home';
import techVenue from './components/pages/techVenue/techVenue';
import projectVenue from './components/pages/ projectVenue/projectVenue'
import developerVenue from './components/pages/developerVenue';
import nomatchpage from './components/pages/nomatchpage';
// Layout Component
import SlideHeader from './components/layout/slideHeader/SlideHeader'

// Util Component
import AuthRoute from "./components/util/AuthRoute";

// Redux
// import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        {/* <Provider> */}
          <Router>
            <SlideHeader/> 
            <div className="App-container">
              <div>
                <Switch>
                  <Route exact path="/" component={home}/>
                  <AuthRoute exact path="/techvenue" component={techVenue}/>
                  <Route exact path="/projectvenue" component={projectVenue}/>
                  <Route exact path="/developervenue" component={developerVenue}/>
                  <Route component={nomatchpage}/>
                </Switch>
              </div>
            </div>
          </Router>
        {/* </Provider> */}
      </MuiThemeProvider>
    )
  }
}

export default App;

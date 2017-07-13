const React = require('react');

const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

const HelloWorld = require('./HelloWorld');
const Popular = require('./Popular');
const Battle = require('./Battle');
const Results = require('./Results');
const Nav = require('./Nav');


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    )
  }
}


/*** Router ***/

/*
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route path='/' exact component={HelloWorld} />
            <Route path='/battle' exact component={Battle} />
            <Route path='/battle/results'  component={Results} />
            <Route path='/popular' component={Popular} />
            <Route render={function () {
              return (
                <p>Not Found</p>
              )
            }}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
/**/

module.exports = App;

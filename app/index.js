const React = require('react');
const ReactDom = require('react-dom');
const PropTypes = require('prop-types');
require('./index.css');

/*
class HelloWorld extends React.Component {
  render () {
    return (
      <div> Hello World ! </div>
    )
  }
}

ReactDom.render(
  <HelloWorld />,
  document.getElementById('app')
);


/*** PROPS ***/

/*
class HelloUser extends React.Component {
  render() {
    return (
      <div> Hello {this.props.name}</div>
    )
  }
}

// stateless function

// function HelloUser (props) {
//   return (
//     <div>Hi {props.name}</div>
//   )
// }

ReactDom.render(
  <HelloUser name="Quentin"/>,
  document.getElementById('app')
);


/*** Composition and loop ***/

/*
class FriendsContainer extends React.Component {
  render() {
    return (
      <div>
        <h3> Name: {this.props.name} </h3>
        <ShowList names={this.props.friends} />
      </div>
    )
  }
}

class ShowList extends React.Component {
  render() {
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {this.props.names.map(function(friend){
            return <li> {friend} </li>;
          })}
        </ul>
      </div>
    )
  }
}

ReactDom.render(
  <FriendsContainer name="Quentin" friends={['Pierre', 'Paul', 'Jacques']}/>,
  document.getElementById('app')
);

/*** PROPTYPES ***/

/*
class Badge extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.img}
          alt="Avatar"
          style={{width:100, height:100}}
        />
        <h1>Name : {this.props.name}</h1>
        <h3>Username : {this.props.username}</h3>
      </div>
    )
  }
}
Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

ReactDom.render(
  <Badge
    name="Quentin"
    username="gayout"
    img="https://avatars3.githubusercontent.com/u/14995817?v=3&s=400"
  />,
  document.getElementById('app')
);
/**/



const App = require('./components/App');

ReactDom.render(
  <App />,
  document.getElementById('app')
);
/**/

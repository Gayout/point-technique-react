const React = require('react');
const Link = require('react-router-dom').Link; //no styling
const NavLink = require('react-router-dom').NavLink; //styling

function Nav (props) {
  return (
    <ul className='nav'>
      <li>
        <NavLink
          activeClassName='active'
          to='/'
          exact
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName='active'
          to='/battle'
        >
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName='active'
          to='/popular'
        >
          Popular
        </NavLink>
      </li>
    </ul>
  );
}

module.exports = Nav;

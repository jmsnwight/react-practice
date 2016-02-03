var React = require('react');
import { Link } from 'react-router'

var Whoops404 = React.createClass({
  render() {
    return (
      <div id="not-found">
          <h1>Whoopsy!</h1>
          <p>404 page is not found or we broke it.
          Were you looking for one of these: </p>

        <Link to="/">Join as Audience</Link>
        <Link to="speaker">Start the Presentation</Link>
        <Link to="board">View the Board</Link>
      </div>
    );
  }
});

module.exports = Whoops404;

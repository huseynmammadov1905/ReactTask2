import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';


function My({name,description,price}) {
  return (
    <div className="My">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{name}</p>
        <p>{description}</p>
        <p>{price}</p>
      </header>
    </div>
  );
}

export default My;

My.propTypes = {
    name:PropTypes.string,
    description:PropTypes.string,
    price:PropTypes.string
}

import React from 'react';
import './App.css';
import { auth } from './firebase/init';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import Logo from './assets/Frontend Simplified Logo.853fbda.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user)
      }
    })
  }, []);

  function register() {
    console.log('register');
    createUserWithEmailAndPassword(auth, 'email@email.com', 'test123')
      .then((user) => {
        console.log(user)
      }) 
      .catch((error) => {
        console.log(error)
      })
  }

  function login() {
    signInWithEmailAndPassword(auth, 'email@email.com', 'test123')
      .then(({ user }) => {
        console.log(user)
        setUser(user);
      }) 
      .catch((error) => {
        console.log(error)
      })
  }

function logout() {
  signOut(auth)
  setUser({});
}

  return (
    <div className="App">
      <nav>
        <div className="menu__btn">
            <FontAwesomeIcon icon={faBars} />
        </div>
        <figure>
            <img src={Logo} className="nav__logo" />
        </figure>
        <div className="nav__btns">
            <button className="login__btn" onClick={login}>Login</button>
            <button className="register__btn" onClick={register}>Register</button>
            <button className="signed-in__btn" onclick={logout}>{user.email[0].toUpperCase()}</button>
        </div>
      </nav>
    </div>
  );
}

export default App;

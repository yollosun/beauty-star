
import './style/App.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './AppRouter';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react'
import { Context } from '.';
import Loader from './components/Loader';
import Header from './components/Header';

function App() {
  const { auth } = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <Loader />
  }
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Header />
        {/* <Main /> */}
        <AppRouter />
      </div>
    </Router >
  );
}

export default App;

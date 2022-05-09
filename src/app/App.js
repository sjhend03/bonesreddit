/**
 * App file with all routes and components
 */
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../features/NavBar/NavBar';
import Posts from '../features/Posts/Posts';
import Subreddits from '../features/Subreddits/Subreddits';

function App() {
  return (
    <Router className='router'>
      <NavBar />
      <div className='main-container'>
        <Posts />
        <Subreddits />
      </div>
    </Router>
  );
}

export default App;

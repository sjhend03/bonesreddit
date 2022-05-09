/**
 * App file with all routes and components
 */
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../features/NavBar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;

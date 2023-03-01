import './App.css';
import {Routes,Route} from "react-router-dom"
import NavBar from './NavBar';
import Home from './Home';
import ListUsers from './ListUsers';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<ListUsers/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
      </Routes>
  
    </div>
  );
}

export default App;

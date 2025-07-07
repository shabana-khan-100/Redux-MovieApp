
import './App.css';
import Header from "./components/Header"
import Home from './page/Home';
import {Routes, Route, } from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}>
         
      </Route>
     </Routes>
    </div>
  );
}

export default App;

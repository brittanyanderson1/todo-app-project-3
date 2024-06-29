import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './Components/TodoList/TodoList';
import ContactForm from './Components/ContactForm/ContactForm';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
              <header className="App-header">
                  <h1>Task Blast</h1>
              </header>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/TodoList" element={<TodoList/>} />
                <Route path="/contact" element={<ContactForm />} />
              </Routes>
          </BrowserRouter>
      <main>
      
      </main> 
    </div>
  );
}

export default App;

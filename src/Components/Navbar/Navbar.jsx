import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todolist">Todo List</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
  );
}
export default Navbar;
import React, { useState } from 'react'
import { list } from '../constants';
import './Header.css'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../store/userSlice';

export default function Header() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [openPanel, setOpenPanel] = useState(false);
  const loggesInUser = useSelector(state => state.user.loggesInUser);

  function handleToggle() {
    setOpenPanel((prev) => !prev)
  }

  function onLogOut() {
    setTimeout(() => {
      dispatch(logOutUser())
      navigate('/login')
      alert('Successfull logout')
    }, 500)
  }

  return (
    <header id='header'>
      <Link to='/'><div className='logo'>Property<span className='red'>Broker</span>.com</div></Link>
      <div className='right-side'>
        {loggesInUser?.role === 'admin' ? <Link to='/add-property'><button className='filled-button'>Add Property</button></Link> : null}
        {loggesInUser
          ? (<>
              <div className='button'>Hi {loggesInUser.fullName}</div>
              <div className='button' onClick={onLogOut}><div>Logout</div></div>
            </>)
          : (<>
              <div className='button'><Link to='/sign-up'><div>Sign Up</div></Link></div>
              <div className='button'><Link to='/login'><div>Login</div></Link></div>
            </>)
        }
        <div className='button' onClick={handleToggle}>
          <div><span className="material-symbols-outlined">menu</span>Menu</div>
        </div>
      </div>
      {openPanel ? <div className='sidepanel'>
        {list.map(item => (
          <Link key={item.title} to={item.path} className='item'>{item.title}</Link>
        ))}
      </div> : null}
    </header>
  )
}

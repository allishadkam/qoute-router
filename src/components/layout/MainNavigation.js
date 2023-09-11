import React from 'react'
import classes from './MainNavigation.module.css'
import {NavLink}from 'react-router-dom'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>Grate Qoutes</div>
        <nav className={classes.nav}>
            <ul>
                <li><NavLink to="/qoutes" activeClassName={classes.active} >All Qoutes</NavLink></li>
                <li><NavLink to="/new-qoute" activeClassName={classes.active} >Create Qoute</NavLink></li>
            </ul>
        </nav>
      
    </header>
  )
}

export default MainNavigation

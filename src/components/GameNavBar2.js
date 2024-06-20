import React from 'react'
import { Outlet, Link } from "react-router-dom";

function GameNavBar2() {
  return (
    <>
    <div className="topnav">
        <a href="#"><Link className="active" to="/">Home</Link></a>
        <a href='#'><Link to="/gameTrack">GameTrack</Link></a>
        <a href='#'><Link to="/topTenGames">Top 10 Games All Time</Link></a>
        {/* <a href="" className='shoplink'>Game News</a> */}
        <a href='#'><Link to="/donate">Donate</Link></a>
    </div>
    <Outlet />
  </>
   
  )
}

export default GameNavBar2
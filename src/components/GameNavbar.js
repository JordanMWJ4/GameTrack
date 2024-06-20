import { Outlet, Link } from "react-router-dom";
// import TrailersPage from "./trailersPage";

const Layout = () => {
  return (
    <>
      <div className="topnav">
          <a href="#"><Link className="active" to="/">GameTrack</Link></a>
          {/* <a href='#'><Link to="/trailers">Trailers</Link></a> */}
          <a href='#'><Link to="/gameTrack">GameTrack2</Link></a>
          {/* <a href="#"><Link to="/><}
          {/* <a href="#"><Link to="/testMap2">coINFO</Link></a>  */}
          <a href="https://crypto.news/" className='shoplink'>coINFO</a>
          <a href="https://buy.stripe.com/test_4gw14J0MgeVV85W5km"> <Link to="/donate">Donate</Link></a> 
      </div>
      <Outlet />
    </>
  )
};

export default Layout;
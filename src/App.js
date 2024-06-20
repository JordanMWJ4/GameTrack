import logo from './logo.svg';
import './App.css';
import GameTrack from './components/gameTrack';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import GameNavbar from './components/GameNavbar';
import GameNavBar2 from './components/GameNavBar2';
import Home from './components/Home';
import TopTenGames from './components/topTenGames';
import Donate from './components/Donate';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<GameNavBar2 />}>
        <Route index element={<Home />} />
        <Route path="gameTrack" element={<GameTrack />} />
        <Route path="topTenGames" element={<TopTenGames />} />
        <Route path="donate" element={<Donate />} />
        {/* <Route path="*" element={<NoPage />} /> */}
        {/* <Route path="allCrypto" element={<Searchbar />} /> */}
      </Route>
    </Routes>
</BrowserRouter> 

   
  );
}

export default App;

    //   <BrowserRouter>
    //     </Routes>          
    //           <Route path="/" element={<GameNavbar />}>
    //           <Route index element={<GameTrack  />} />
    //           <Route path="gameTrack" element={<GameTrack />} />
    //           <Route path="donate" element={<Donate />} />
    //           <Route path="*" element={<NoPage />} />
    //           <Route path="allCrypto" element={<Searchbar />} />
    //         </Route>
    //       </Routes>
    // </BrowserRouter>  
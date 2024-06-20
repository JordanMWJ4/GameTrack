import Carousel from 'react-bootstrap/Carousel';
import '../../src/carousel.css'


function Home() {
  return (

    <Carousel>
    <Carousel.Item>
     <img src='https://image.api.playstation.com/vulcan/ap/rnd/202312/0117/315718bce7eed62e3cf3fb02d61b81ff1782d6b6cf850fa4.png' className='Img'></img>
      <Carousel.Caption>
        <h3>GameTrack</h3>
        <p>Game Searching App</p>
      </Carousel.Caption>
    </Carousel.Item>
  <Carousel.Item>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYvlOmehZdy7GNL8c1pvJf9AHQb_c3iIzxDw&s.png' className='Img'></img>
        <Carousel.Caption>
          <h3>GameTrackl</h3>
          <p>Games List.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src='https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/311210/header.jpg?t=1646763462.png ' className='img'></img>
        <Carousel.Caption>
          <h3>GameTrack</h3>
          <p>
            Highest Rated Games
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    
  )
}

export default Home
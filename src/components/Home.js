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
        <img src='https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/07/Super-Mario-Bros-L.jpg' className='Img'></img> 
        <Carousel.Caption>
          <h3 color='black'>GameTrackl</h3>
          <p>Games List.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i63vXXwMFIoc/v2/-1x-1.jpg ' className='img'></img>
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
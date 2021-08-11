import './App.css';
import '@fontsource/roboto';
import imgLogo from './assets/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import MyCarouselWithDots from './components/Carousel'
import meninaAzul from './assets/meninaAzul.png'
import carroAlto from './assets/carroAlto.png'
import mecanico from './assets/mecanico.png'


function App() {
  return (
    <>
      <div className="App">

        <div className="header">
          <div className="logo"><img src={imgLogo} alt="Logo" /></div>
          <div className='menu'>
            <nav>
              <ul>
                <a href=""><li>Primeiro Menu</li></a>
                <a href=""><li>Primeiro Menu</li></a>
                <a href=""><li>Primeiro Menu</li></a>
                <a href=""><li>Primeiro Menu</li></a>
              </ul>
            </nav>
          </div>
          <div className='search'><SearchIcon fontSize="large" /></div>

        </div>
        <div className="slider">
          <MyCarouselWithDots />

        </div>

        <div className="content">
          <div className='boxCards'>
            <div className='carta'>
              <img className='foto' src={meninaAzul} alt="" />
              <div className='card'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, esse consequatur blanditiis sapiente officia corrupti cupiditate ullam repellendus beatae ab in aperiam exercitationem doloribus rerum, quisquam fugiat accusamus? Quo, numquam.
              </div><div className='card'>
                <div><h4>Douglas Santos</h4></div>
                <div><h5>18 de Fevereiro de 2021</h5></div>
              </div>
            </div>
            <div className='carta'>
              <img className='foto' src={carroAlto} alt="" />
              <div className='card'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, esse consequatur blanditiis sapiente officia corrupti cupiditate ullam repellendus beatae ab in aperiam exercitationem doloribus rerum, quisquam fugiat accusamus? Quo, numquam.
              </div><div className='card'>
                <div><h4>Douglas Santos</h4></div>
                <div><h5>18 de Fevereiro de 2021</h5></div>
              </div>
            </div>
            <div className='carta'>
              <img className='foto' src={mecanico} alt="" />
              <div className='card'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, esse consequatur blanditiis sapiente officia corrupti cupiditate ullam repellendus beatae ab in aperiam exercitationem doloribus rerum, quisquam fugiat accusamus? Quo, numquam.
              </div><div className='card'>
                <div><h4>Douglas Santos</h4></div>
                <div><h5>18 de Fevereiro de 2021</h5></div>
              </div>
            </div>




          </div>
          <div className='boxCards'>
            <div className='carta'>
              <img className='foto' src={meninaAzul} alt="" />
              <div className='card'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, esse consequatur blanditiis sapiente officia corrupti cupiditate ullam repellendus beatae ab in aperiam exercitationem doloribus rerum, quisquam fugiat accusamus? Quo, numquam.
              </div><div className='card'>
                <div><h4>Douglas Santos</h4></div>
                <div><h5>18 de Fevereiro de 2021</h5></div>
              </div>
            </div>
            <div className='carta'>
              <img className='foto' src={carroAlto} alt="" />
              <div className='card'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, esse consequatur blanditiis sapiente officia corrupti cupiditate ullam repellendus beatae ab in aperiam exercitationem doloribus rerum, quisquam fugiat accusamus? Quo, numquam.
              </div><div className='card'>
                <div><h4>Douglas Santos</h4></div>
                <div><h5>18 de Fevereiro de 2021</h5></div>
              </div>
            </div>
            <div className='carta'>
              <img className='foto' src={mecanico} alt="" />
              <div className='card'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, esse consequatur blanditiis sapiente officia corrupti cupiditate ullam repellendus beatae ab in aperiam exercitationem doloribus rerum, quisquam fugiat accusamus? Quo, numquam.
              </div><div className='card'>
                <div><h4>Douglas Santos</h4></div>
                <div><h5>18 de Fevereiro de 2021</h5></div>
              </div>
            </div>




          </div>
        </div>
      </div>
      <div>

      </div>
    </>
  );
}

export default App;






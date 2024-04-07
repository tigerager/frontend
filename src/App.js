import './App.css';
import { Route, Routes, Link, useNavigate} from "react-router-dom"; //Don't FORGET TO PUT BROWSER ROUTER IN THE "index.js" FILE TO MAKE THESE FUNCTION WORK
import Dashboard from './pages/Dashboard';
import Penjualan from './pages/Penjualan';
import Afiflogo from './pages/images/Afiflogo.png';
import Phone from './pages/images/phone.png';
import Mail from './pages/images/mail.png';
import Menu from './pages/images/menu.png';
import Jasa from './pages/Jasa';
import Produk from './pages/Produk';
import CreateProduk from './pages/CreateProduk';

function App() {
  function unCheck(){
		let input = document.getElementById("check");
		input.click();
	}
  let navigate = useNavigate();
  return (
    <div className="App">
      <header id="home">
	   <div className='NavbartoAnotherPage' ></div>
	   <div onClick={()=>{navigate('/')}} className='HomeButton'></div>
     <div className='removeOver'></div>
        <nav>
          <div style={{ zIndex:'3' }} className="name">
			    <img onClick={()=>{navigate('/')}} src={Afiflogo} alt=''/>
		  </div>
            <input type="checkbox" id="check" />
            <label for="check">
              <img alt='' className="menuBtn" src={Menu} />
            </label> {/*letakkan div setelah label supaya (~) berfungsi sebagai if state*/}
			<div className="contact">
				<div className="email">
					<img alt='' src={Mail} />
					<span>afifnusada@gmail.com</span><br/>
					</div>
					<img alt='' src={Phone} />
					<span>+6281276452711</span>
				</div>
        <div className="navbar">
            <span className='menu'>Home</span>
                    <a to="/frontend#about" onClick={unCheck}>About Me</a>
                    <a href="/frontend#skills" onClick={unCheck}>Skills</a>
                    <a href="/frontend#projects" onClick={unCheck}>Projects</a>
                    <a href="/frontend#recommendations" onClick={unCheck}>Recommendations</a>
            <span className='menu'>Main Navbar</span>
            <nav className='mainNavbarPhone'>
                  <Link onClick={unCheck} className='aLink' to='/frontend'> {/*Untuk membuat filenya langsung terbuka maka gunakan nama repositori disini 'frontend' sebagai ganti dari '/'*/}
                    Home
                  </Link>
                  <Link onClick={unCheck} className='aLink' to='/produk'>
                    Produk
                  </Link>
                  <Link onClick={unCheck} className='aLink' to='/jasa'>
                    Jasa
                  </Link>
                  <Link onClick={unCheck} className='aLink' to='/penjualan'>
                    Penghasilan
                  </Link>
            </nav>
            <span className='headercontact'>Contact</span>
            <div className="contact">
            <div className="email">
              <img alt='' src={Mail} />
              <span>afifnusada@gmail.com</span><br/>
              </div>
              <img alt='' src={Phone} />
              <span>+6281276452711</span>
            </div>
          </div>
          </nav>
        </header>
      <nav className='mainNavbar'>
        <Link className='aLink' to='/frontend'>
          Home
        </Link>
        <Link className='aLink' to='/produk'>
          Produk
        </Link>
        <Link className='aLink' to='/jasa'>
          Jasa
        </Link>
        <Link className='aLink' to='/penjualan'>
          Penghasilan
        </Link>
      </nav>
        <Routes>
            <Route path='/frontend' element={<Dashboard />}/>
            <Route path='/penjualan' element={<Penjualan />}/>
            <Route path='/jasa' element={<Jasa />}/>
            <Route path='/produk' element={<Produk />}/>
            <Route path='/createProduk' element={<CreateProduk />}/>
        </Routes>
    </div>
  );
}

export default App;

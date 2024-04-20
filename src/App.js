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
import UserCreate from './pages/UserCreate';
import UserContext from './pages/context/UserContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Login from './pages/Login';


function App() {
  const [cek, setCek] = useState('');
  const Logout = () => {
    axios.get('http://localhost:3001/users/logout', {withCredentials: true}) //catatan kalau untuk menghapus cookie harus pakai get
    .then((response)=>{  
      toast.success(response.data, {onClose: ()=>{window.location.reload()}});
    });
  }
  const konfirmasi = () => {
    let text = "Yakin Ingin Logout?";
    if (window.confirm(text) === true) {
      Logout();
    } else {
      
    }
  }
  useEffect(()=>{
    axios.get('http://localhost:3001/users/cek', {withCredentials: true})
        .then((response)=>{  
        setCek(response.data)});
  }, []);
  function unCheck(){
		let input = document.getElementById("check");
		input.click();
	}
  let navigate = useNavigate();
  return (
    <UserContext>
    <div className="App">
      <header id="home">
      <ToastContainer className='toast' />
	   <div className='NavbartoAnotherPage' ></div>
	   <div onClick={()=>{navigate('/frontend')}} className='HomeButton'></div>
     <div className='removeOver'></div>
        <nav>
          <div style={{ zIndex:'3' }} className="name">
			    <img onClick={()=>{navigate('/frontend')}} src={Afiflogo} alt=''/>
		  </div>
            <input type="checkbox" id="check" />
            <label htmlFor="check">
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
                    <a href="/frontend#about" onClick={unCheck}>About Me</a>
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
        {cek !== 'tidak ada' ? 
        <Link className='aLink' to='/produk'>
          Produk
        </Link> :
        <></>
        }
        {cek !== 'tidak ada' ?
        <Link className='aLink' to='/jasa'>
          Jasa
        </Link> :
        <></>
        }
        <Link className='aLink' to='/penjualan'>
          Penghasilan
        </Link>
        {cek === "tidak ada" ?
        <Link className='aLink' to='/register'>
          Daftar
        </Link>
        :
        <></>
        }
        {cek === 'tidak ada' ? 
        <Link className='aLink' to='/login'>
          Login
        </Link> 
        :
        <Link className='aLink' onClick={konfirmasi}>
          Logout
        </Link>
        }
      </nav>
        <Routes>
            <Route path='/register' element={<UserCreate />}/>
            <Route path='/login' element={cek!=='tidak ada' ? <Produk /> : <Login />}/>
            <Route path='/frontend' element={<Dashboard />}/>
            <Route path='/penjualan' element={<Penjualan />}/>
            <Route path='/jasa' element={cek!=='tidak ada' ? <Jasa /> : <Login />}/>
            <Route path='/produk' element={cek!=='tidak ada' ? <Produk /> : <Login />}/>
            <Route path='/createProduk' element={cek!=='tidak ada' ? <CreateProduk /> : <Login />}/>
        </Routes>
    </div>
    </UserContext>
  );
}

export default App;

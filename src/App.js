import ME from './me.jpg';
import './App.css';
import {Link} from 'react-router';

function App() {
  return (
    <div className="App">
        <div className="myImage">
        <img src={ME} className="myImage" id='profile__img' alt="ME" />
        </div>

        <h1 className='name'> Aboaba Akorede</h1>

        <div className='twitterBox'>
        <h2 id='twitter' className="twitter"> @Tame_nation</h2>
        </div>

        <div>
        <h2 id='slack' className="slack">AK</h2>
        </div>

        <div className='zuriTeamBox'>
          <a href='https://training.zuri.team/' id='btn__zuri' className='zuriTeam' > Zuri Team</a>
        </div>

        <div className='zuriBooksBox'>
          <a href='http://books.zuri.team' id='btn__zuri' className='zuriBooks' > Zuri Books</a>
        </div>

        <div className='pythonBooksBox'>
          <a href='https://books.zuri.team/python-for-beginners?ref_id=AK' id='items' className='pythonBooks' > Python Books</a>
        </div>

        <div className='bcoBox'>
          <a href='https://background.zuri.team' id='pitch' className='bco'> Background check for orders</a>
        </div>

        <div className='dbBox'>
          <a href='https://books.zuri.team/design-rules' id='book__design' className='dB'> Design books</a>
        </div>

        <div className='contactBox'>
          <Link href='/contact' id='contact' className='contact'> Contact</Link>
        </div> 
      </div>
  );
}

export default App;

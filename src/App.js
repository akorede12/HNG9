import ME from './me.jpg';
import './App.css';

function App() {
  return (
    <div className="profile">
        <div className="grid-container2">
        <div className="grid-item2">
        <img src={ME} className="mypicture" id='profile__img' alt="ME" />
        <h1> Aboaba Akorede</h1>
        </div>
        <div>
        <h2 id='twitter' className="grid-item2"> @Tame_nation</h2>
        <h2 id='slack' className="slack">AK</h2>
        </div>
        </div>
        <div className='grid-container'>
          <a href='https://training.zuri.team/' id='btn__zuri' className='grid-item' > Zuri Team</a>
          <a href='http://books.zuri.team' id='btn__zuri' className='grid-item' > Zuri Books</a>
          <a href='https://books.zuri.team/python-for-beginners?ref_id=AK' id='book__python' className='grid-item' > Python Books</a>
          <a href='https://background.zuri.team' id='pitch' className='grid-item'> Background check for orders</a>
          <a href='https://books.zuri.team/design-rules' id='book__design' className='grid-item'> Design books</a>
        </div> 
      </div>
  );
}

export default App;

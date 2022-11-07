import ME from '../me.jpg';
import './tester.css';
import {Link} from 'react-router-dom';
import React from 'react';

function Home() {
  return (
    <div>
    <div className="stage1task">
     <div className="main-section">
      <div className="content">
       <div className="profile-section">
        <div className="profileimg">
        <img src={ME} className="myImage" id='profile__img' alt="ME" />
        </div>
        <span className='text'>
        <span className='name'> Aboaba Akorede</span>
        </span>
    </div>
    <div className='link-section'>
    <div className='links'>
    <div className='frame5'>
    <span className='text02'>
    <span> @Tame_nation</span>
    </span>
    </div>
    </div>

        <div>
        <h2 id='slack' style={{display: "none"}}>AK</h2>
        </div>
        <div className='btnzuri'>
        <div className='frame51'>
          <a href='https://training.zuri.team/' id='btn__zuri' className='text04' > Zuri Team</a>
        </div>
        </div>

        <div className='books'>
        <div className='frame52'>
          <a href='http://books.zuri.team' id='btn__zuri' className='text06' > Zuri Books</a>
        </div>
        </div>

        <div className='bookpython'>
        <div className='frame53'>
          <a href='https://books.zuri.team/python-for-beginners?ref_id=AK' id='items' className='text08' > Python Books</a>
        </div>
        </div>

        <div className='pitch'>
        <div className='frame54'>
          <a href='https://background.zuri.team' id='pitch' className='text10'> Background check for orders</a>
        </div>
        </div>

        <div className='bookdesign'>
        <div className='frame55'>
          <a href='https://books.zuri.team/design-rules' id='book__design' className='text12'> Design books</a>
        </div>
        </div>

        <div className='contact'>
        <div className='frame56'>
          <span className='text14' >
          <Link to='/Contact' id='contact' className='textlg-medium'><span> Contact Me</span></Link>
          </span>
        </div>
        </div>

      </div> 
      </div>
      </div>
      </div>
      </div>
  );
}

export default Home;

import React, { useState } from 'react' 
import logo from './sh-logo-trans.png'
import { FaSearch, FaMicrophone, FaEnvira} from 'react-icons/fa'

function App() {
  const [text, setText] = useState(null);

  const update = (e) => {
    setText(e.target.value)
  }

  return (
    <div className='container'>
      <header>
        <nav>
          <p>Gmail</p>
          <p>Images</p>
          <div className="cir-grid">
            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
          </div>
          <div className="avatar"></div>
        </nav>
      </header>
      <main>
        <div className="wrapper">
          {text ? <h1>{text}</h1> : <img src={logo} alt="" /> }
        </div>
        <div className="input">
          <FaSearch className='icon' />
          <input type="text" onChange={update}/>
          <FaMicrophone className='icon mic' />
        </div>
      </main>
      <section>
        <div className="btn-wrapper">
          <button>Google Search</button>
          <button>I'm Feeling Lucky</button>
        </div>
        <div className="lang">
          <p>Google offered in:</p>
          <span>Hausa</span> <span>Igbo</span>
          <span>Èdè Yorùbá</span> <span>Nigerian Pidgin</span>
        </div>
      </section>
      <footer>
        <div className='country'>
          <p>Nigeria</p>
        </div>
        <div className='foot-note'>
          <p><FaEnvira className='icon' /> Carbon neutral since 2007</p>
          <div className='details'>
            <div>
              <p>About</p>
              <p>Advertising</p>
              <p>Business</p>
              <p>How Search Works</p>
            </div>
            <div>
              <p>Privacy</p>
              <p>Terms</p>
              <p>Settings</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

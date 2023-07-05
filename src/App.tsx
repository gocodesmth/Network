import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
}

export default App;

const Technologies = () => {
  return (
    <div>
        <ul>
          <li>html</li>
          <li>css</li>
          <li>js</li>
          <li>react</li>
        </ul>
      </div>
  )
}

const Header = () => {
  return (
    <div>
      <a href='#s'> Home</a>
      <a href='#s'>News Feed</a>
      <a href='#s'>Messages</a>
    </div>
  )
}
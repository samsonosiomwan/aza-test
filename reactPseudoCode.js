//Create a react component that has a <div/> with a border.Inside this <div/> should be a <span/> that displays the ‘live’ width of the browser window at all times.  Keep in mind that the size of the window could easily be changed by the user and you should reflect this.
//  ans:
//  import React, { Component } from 'react';
//  import './App.css';

//  const App = () => {
//    const [width, setWidth] = useState(window.innerWidth);
//    const handleResize = () => setWidth(window.innerWidth);

//    handleSetwidth = (e) => {
//      setWidth(e.target.innerWidth);
//    };
//    useEffect(() => {
//      window.addEventListener('resize', handleResize);
//      return () => {
//        window.removeEventListener('resize', handleResize);
//      };
//    });
//    return (
//      <div className="App">
//        <div className="box">
//          <span>{width}</span>
//          <input type="text" onChange={handleSetwidth}/>

//        </div>
//      </div>
//    );
//  };

// 



import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import './App.css';

import { NewsCards, Modal } from '../Component'

const alanKey = process.env.REACT_APP_ALAN_KEY;


const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if(command === 'newHeadlines') {
          console.log(articles);
        }
      }
    })
  }, [])

  return (
    <div className="App">
      <Modal />
      <NewsCards />
    </div>
  );
}

export default App;

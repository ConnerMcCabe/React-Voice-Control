import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import './App.css';
import { NewsCards, Modal } from '../Component'


const App = () => {
  useEffect(() => {
    alanBtn({

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

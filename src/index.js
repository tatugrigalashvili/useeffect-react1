import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function App(){
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(function() {
    const now = new Date().toString();
    
    setCurrentDateTime(now);
  }, [currentDateTime]);

  return (
    <div>
      <p>{currentDateTime}</p>
    </div>
  );
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>)
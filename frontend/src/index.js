import React from 'react';
import ReactDOM from 'react-dom/client';
// import cors from 'cors';
import App from './App';

// const corsOptions ={
//   origin:'http://localhost:3000', 
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200
// }
// App.use(cors(corsOptions));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



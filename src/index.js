import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import 'index.css';

// Icons
import { GiPenguin } from 'react-icons/gi';
import { BiErrorCircle } from 'react-icons/bi';

// Routes
import Login from 'pages/Login';
import Home from 'pages/Home';
import Tareas from 'pages/Tareas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/home' element={<Home />}>
          <Route
            index
            element={
              <div className="index-path">
                <p>Accede a las funcionalidades<br/>para comenzar a interactuar</p>
                <GiPenguin />
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div className="index-path">
                <BiErrorCircle />
                <p>La ruta a la que intentas acceder<br/>no se ha encontrado</p>
              </div>
            }
          />
          <Route path="tareas" element={<Tareas />}/>
        </Route>
        <Route path="/login" element={<Login isLogged={true} />} />
        <Route path="/signup" element={<Login isLogged={false} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

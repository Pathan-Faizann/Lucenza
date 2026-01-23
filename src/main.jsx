import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {ToastContainer} from "react-toastify"



createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
        
    <HashRouter>
        <App />
        <ToastContainer 
 position="top-right"
  autoClose={3000}
  theme="colored"
  newestOnTop={true}
  pauseOnHover/>
 
    </HashRouter>
    </Provider>

)

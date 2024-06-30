import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {store} from "./store/store"
import { Provider } from "react-redux";
import './index.css'
import { SocketProvider } from './context/SocketContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SocketProvider>
        <App />
      </SocketProvider>
    </Provider>
  </React.StrictMode>,
)

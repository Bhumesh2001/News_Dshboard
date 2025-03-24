import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import { NhostReactProvider } from "@nhost/react";
import nhost from "./nhost";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById('root')).render(
  <NhostReactProvider nhost={nhost}>
    <StrictMode>
      <App />
    </StrictMode>,
  </NhostReactProvider>,
);

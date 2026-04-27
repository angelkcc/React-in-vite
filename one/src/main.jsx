import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import A from './A.jsx'
import B from './B.jsx'
import C from './C.jsx'
import D from './D.jsx'
import Scroll from './Scroll.jsx'
import E from './E.jsx'
import G from './G.jsx'
import I from './I.jsx'
import K from './K.jsx'
import L from './L.jsx'
import M from './M.jsx'
import N from './N.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <N/>
    </BrowserRouter> 
  </StrictMode>,
)

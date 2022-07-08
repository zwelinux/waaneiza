import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Ays from './pages/scc/Ays';
import Bge from './pages/scc/Bge';
import Bgw from './pages/scc/Bgw';
import Mdc from './pages/scc/Mdc';
import Mdn from './pages/scc/Mdn';
import Mds from './pages/scc/Mds';
import Mgn from './pages/scc/Mgn';
import Mgs from './pages/scc/Mgs';
import Mhf from './pages/scc/Mhf';
import Mns from './pages/scc/Mns';
import Msm from './pages/scc/Msm';
import Npt from './pages/scc/Npt';
import Nwa from './pages/scc/Nwa';
import Sge from './pages/scc/Sge';
import Sgs from './pages/scc/Sgs';
import Shs from './pages/scc/Shs';
import Tny from './pages/scc/Tny';
import Wec from './pages/scc/Wec';
import Whh from './pages/scc/Whh';
import Wwa from './pages/scc/Wwa';
import Wwh from './pages/scc/Wwh';
import Wwm from './pages/scc/Wwm';
import Wws from './pages/scc/Wws';
import Wwt from './pages/scc/Wwt';
import Yge from './pages/scc/Yge';
import Ygn from './pages/scc/Ygn';
import Ygs from './pages/scc/Ygs';
import Ygw from './pages/scc/Ygw';
import Home from './Home';

import Recent from './pages/Recent/Recent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
      <Route path='/file' element={<App />}>
        <Route path='recent' element={<Recent />} />
        <Route path='ays' element={<Ays />} />
        <Route path='bge' element={<Bge /> } />
        <Route path='bgw' element={<Bgw />} />
        <Route path='mdc' element={<Mdc />} />
        <Route path='mdn' element={<Mdn />} />
        <Route path='mds' element={<Mds />} />
        <Route path='mgn' element={<Mgn />} />
        <Route path='mgs' element={<Mgs />} />
        <Route path='mhf' element={<Mhf />} />
        <Route path='mns' element={<Mns />} />
        <Route path='msm' element={<Msm />} />
        <Route path='npt' element={<Npt />} />
        <Route path='nwa' element={<Nwa />} />
        <Route path='sge' element={<Sge />} />
        <Route path='sgs' element={<Sgs />} />
        <Route path='shs' element={<Shs />} />
        <Route path='tny' element={<Tny />} />
        <Route path='wec' element={<Wec />} />
        <Route path='whh' element={<Whh />} />
        <Route path='wwa' element={<Wwa />} />
        <Route path='wwh' element={<Wwh />} />
        <Route path='wwm' element={<Wwm />} />
        <Route path='wws' element={<Wws />} />
        <Route path='wwt' element={<Wwt />} />
        <Route path='yge' element={<Yge />} />
        <Route path='ygn' element={<Ygn />} />
        <Route path='ygs' element={<Ygs />} />
        <Route path='ygw' element={<Ygw />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

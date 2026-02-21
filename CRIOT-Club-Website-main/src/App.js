import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Indx from './components/Indx';
import About from './components/about';
import Members from './components/members';
import Activities from './components/activities';
import Join from './components/join';
import Thank from './components/thank'
import './App.css';
import './components/Indx.css';
import  './components/About.css';
import './components/Members.css';
import './components/Activities.css';
import './components/Join.css';
import './components/Thank.css';
import Alert from './components/alert';
import Moyenne from './components/moyenne';


function App(){
return(
<div className='app'>
<BrowserRouter>
<Routes>
  <Route  path='/' element={<Indx/>}> </Route>
<Route  path='/Indx' element={<Indx/>}> </Route>
  <Route  path='/about' element={<About/>}> </Route>
  <Route  path='/members' element={<Members/>}> </Route>
  <Route  path='/activities' element={<Activities/>}> </Route>
  <Route  path='/join' element={<Join/>}></Route>
  <Route path='/thank' element={<Thank/>}></Route>
  <Route path="/moyenne" element={<Moyenne/>}></Route>
</Routes>

</BrowserRouter>



</div>
);

}


export default App;
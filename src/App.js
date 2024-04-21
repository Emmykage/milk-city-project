import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import Investment from './pages/Investment';
import Resouces from './pages/Resouces';
import Contact from './pages/Contact';
import ABOUT_US from './pages/AboutUs';
import ComplianceRegulation from './pages/ComplianceRegulation';
import AccessInvestment from './pages/AccessInvestment';

function App() {
  return (
    <div className='App relative min-h-screen font-poppins'>
      <Routes>      
        {/* <Route path='/' element={ <MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='investment' element={<Investment/>}/>
          
        </Route> */}

      <Route path='/' element={ <MainLayout><Home/> </MainLayout>}/>
      <Route path='/investment' element={ <MainLayout><Investment/> </MainLayout>}/>
      <Route path='/resources' element={ <MainLayout><Resouces/> </MainLayout>}/>
      <Route path='/contact' element={ <MainLayout><Contact/> </MainLayout>}/>
      <Route path='/about_us' element={ <MainLayout><ABOUT_US/> </MainLayout>}/>
      <Route path='/compliance_regulation' element={ <MainLayout><ComplianceRegulation/> </MainLayout>}/>
      <Route path='/access_investment' element={ <MainLayout><AccessInvestment/> </MainLayout>}/>


    </Routes>
    </div>
     );
}

export default App;

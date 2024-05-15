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
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import PasswordRecover from './pages/auth/PasswordRecover';
import UserLayout from './layout/UserLayout';
import Portfolio from './pages/dashboard/Portfolio';
import Account from './pages/dashboard/Account';
import Document from './pages/dashboard/Document';
import Offering from './pages/dashboard/Offering';
import AccountInvestment from './components/user/Investment';
import History from './components/user/History';
import Pending from './components/user/Pending';
import Identity from './components/user/Identity';
import Profile from './components/user/Profile';
import PaymentMethods from './components/user/PaymentMethods';
import Loader from './components/loader/Loader';
import TransitionsModal from './components/Modal';
import { useSelector } from 'react-redux';

function App() {
  const {loader} = useSelector(state => state.app)
  return (
    <div className='App relative h-screen font-poppins overflow-y-auto'>
      <Routes>      
      <Route path='/' element={ <MainLayout><Home/> </MainLayout>}/>
      <Route path='/investment' element={ <MainLayout><Investment/> </MainLayout>}/>
      <Route path='/resources' element={ <MainLayout><Resouces/> </MainLayout>}/>
      <Route path='/contact' element={ <MainLayout><Contact/> </MainLayout>}/>
      <Route path='/about_us' element={ <MainLayout><ABOUT_US/> </MainLayout>}/>
      <Route path='/compliance_regulation' element={ <MainLayout><ComplianceRegulation/> </MainLayout>}/>
      <Route path='/access_investment' element={ <MainLayout><AccessInvestment/> </MainLayout>}/>    
      <Route path='/dashboard/portfolio' element={<UserLayout><Portfolio/> </UserLayout>}>
        <Route path='investments' element={<AccountInvestment/>}/>
        <Route path='history' element={<History/>}/>
        <Route path='pending' element={<Pending/>}/>
        
      </Route>
      <Route path='/dashboard/account' element={<UserLayout><Account/> </UserLayout>}> 
      <Route path='identity' element={<Identity/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='payment-method' element={<PaymentMethods/>}/>
      </Route>
      <Route path='/dashboard/document' element={<UserLayout><Document/> </UserLayout>}> </Route>
      <Route path='/dashboard/offering' element={<UserLayout><Offering/> </UserLayout>}> </Route>
      <Route path='/auth'>
      <Route path='login' element={ <Login/> }/>
      <Route path='register' element={ <Register/> }/>
      <Route path='password_reset' element={ <PasswordRecover/> }/>

      </Route>


    </Routes>
    {loader &&  <Loader/> }
      <TransitionsModal/>
    
    </div>
     );
}

export default App;

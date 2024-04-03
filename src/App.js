import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import Investment from './pages/Investment';

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


    </Routes>
    </div>
     );
}

export default App;

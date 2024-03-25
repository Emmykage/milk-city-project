import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <div className='App relative min-h-screen font-poppins'>
      <Routes>
        <Route path='/' element={ <MainLayout>
        <Home/>
      </MainLayout>}/>
      </Routes>
     
    
    
    </div>
     );
}

export default App;

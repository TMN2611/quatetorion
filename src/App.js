import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './page/Home';
import PeronalPage from './page/Personal';
import CompanyPage from './page/Company';
import NewsPage from './page/News';
import Header from './component/Header';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/personal-customer' element={<PeronalPage />}></Route>
        <Route path='/company-customer' element={<CompanyPage />}></Route>
        <Route path='/news' element={<NewsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import HotelPage from './pages/HotelPage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage';
import SearchResultsPage from './pages/SearchResultsPage';
import NotFoundPage from './pages/NotFoundPage';
import GetStartedPage from './pages/GetStartedPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<GetStartedPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/hotel' element={<HotelPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/confirmation' element={<ConfirmationPage />} />
          <Route path='/search-results' element={<SearchResultsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

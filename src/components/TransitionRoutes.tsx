import { Routes, Route, useLocation, Outlet, Navigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  HomePage,
  LoginPage,
  AdminPage,
  HotelPage,
  HotelsPage,
  CheckoutPage,
  ConfirmationPage,
  SearchResultsPage,
  NotFoundPage,
  GetStartedPage,
} from '../pages/index';

const TransitionRoutes = () => {
  const location = useLocation();
  const [userIn, setUserIn] = useState<string | boolean>(localStorage.getItem("token") || false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserIn(true);
    }
  }, [])

  const ProtectedRoutes = () => {
    return userIn ? <Outlet /> : <Navigate to="/login" />
  }

  return (
    <>
      <ToastContainer position="top-center" />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={600}>
          <Routes location={location}>
            <Route index element={<GetStartedPage />} />
            <Route path='/login' element={<LoginPage userIn={userIn} setUserIn={setUserIn} />} />
            <Route element={<ProtectedRoutes />}>
              <Route path='/home' element={<HomePage />} />
              <Route path='/admin' element={<AdminPage />} />
              <Route path='/hotels' element={<HotelsPage />} />
              <Route path='/hotels/:id' element={<HotelPage />} />
              <Route path='/checkout' element={<CheckoutPage />} />
              <Route path='/confirmation' element={<ConfirmationPage />} />
              <Route path='/search-results' element={<SearchResultsPage />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

export default TransitionRoutes;
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  HomePage,
  LoginPage,
  AdminPage,
  HotelPage,
  CheckoutPage,
  ConfirmationPage,
  SearchResultsPage,
  NotFoundPage,
  GetStartedPage
} from '../pages/index';

const TransitionRoutes = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={600}>
        <Routes location={location}>
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
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransitionRoutes;
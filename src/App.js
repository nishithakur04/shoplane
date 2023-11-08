import { Route, Routes } from 'react-router-dom';
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { useSelector } from 'react-redux';
import OrderSummary from './pages/OrderSummaryPage/OrderSummary';
import Favourite from './pages/Favourite';
import OrderConfirmation from './pages/OrderConfirmation/OrderConfirmation';

function App() {
  const authStatus = useSelector(state => state.auth.isLogin);
  return (
    <>
      { authStatus }
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path="/register" element={ <RegistrationPage /> } />
        <Route path="/favourite" element={ authStatus ? <Favourite /> : <LoginPage /> } />
        <Route path="/home" element={ authStatus ? <HomePage /> : <LoginPage /> } />
        <Route path="/productdetail/:id" element={ authStatus ? <ProductDetailPage /> : <LoginPage /> } />
        <Route path="/ordersummary" element={ authStatus ? <OrderSummary /> : <LoginPage /> } />
        <Route path="/orderConfirmation" element={ authStatus ? <OrderConfirmation /> : <LoginPage /> } />
      </Routes>
    </>
  );
}

export default App;

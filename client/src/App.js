import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  ProductPage,
  ProductQueryPage,
  ProductDetailsPage,
  AboutPage,
  NotFoundPage,
  ContactPage,
  LocationPage,
  RegisterPage,
  SignInPage,
  ForgotPasswordPage,
  DashboardPage,
  ResetPasswordPage,
  CheckoutSuccessPage,
} from './views';
import { Layout } from './components';
import { ProductsListContainer } from './containers';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/' element={<ProductPage />}>
            <Route path='shop' element={<ProductsListContainer />} />
            <Route path=':id' element={<ProductDetailsPage />} />
            <Route path='category:id' element={<ProductDetailsPage />} />
          </Route>
          <Route path='about' element={<AboutPage />} />
          <Route path='contactus' element={<ContactPage />} />
          <Route path='signup' element={<RegisterPage />} />
          <Route path='location' element={<LocationPage />} />
          <Route path='signin' element={<SignInPage />} />
          <Route path='forgotpassword' element={<ForgotPasswordPage />} />
          <Route path='resetpassword' element={<ResetPasswordPage />} />
          <Route path='dashboard' element={<DashboardPage />} />

          <Route path='query' element={<ProductQueryPage />} />

          <Route path='checkout-success' element={<CheckoutSuccessPage />} />
          {/* 404 route */}
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

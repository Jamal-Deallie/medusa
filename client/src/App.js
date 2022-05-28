import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
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
  CategoriesPage,
  AccountPage,
} from './views';
import { Layout } from './components';

function App() {
  return (
    <ErrorBoundary fallback={<div>Oh no</div>}>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='shop' element={<ProductPage />} />
            <Route path='category/:category' element={<CategoriesPage />} />
            <Route path='shop/:id' element={<ProductDetailsPage />} />
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
            <Route path='account' element={<AccountPage />} />
            {/* 404 route */}
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;

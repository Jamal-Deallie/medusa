import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ProductContainer } from '../../containers';

export default function ProductSearchPage() {
  const location = useLocation();

  const { search } = location;
  const navigate = useNavigate();

  useEffect(() => {
    if (search === '?term=') {
      navigate('*');
    }
  });

  return <ProductContainer />;
}

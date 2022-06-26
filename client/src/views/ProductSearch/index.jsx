import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function ProductSearchPage() {
  const location = useLocation();

  const { search } = location;
  const navigate = useNavigate();
  console.log(!search);

  useEffect(() => {
    if (!search) {
      navigate('*');
    }
  });

  return (
    <div>
      <h1>Product Query search</h1>
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function Links({ children, link }) {
  return (
    <Link to={link} variant='text'>
      {children}
    </Link>
  );
}

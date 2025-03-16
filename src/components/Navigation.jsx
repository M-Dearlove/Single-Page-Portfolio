import { Link, useLocation } from 'react-router-dom';
import '../styles/navigation.css';

export default function Navigation() {
  const location = useLocation();
  
  const linkStyle = {  
    padding: '5px',
    textDecoration: 'underline',
    color: 'white',
    fontSize: '16pt',
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: 'deeppink'
  };

  // Navigation items array
  const navItems = [
    { path: '/about-me', label: 'About Me' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
    { path: '/resume', label: 'Resume' }
  ];

  return (
    <nav className="main-header-menu">
        {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              style={location.pathname === path ? activeLinkStyle : linkStyle}
            >
              {label}
            </Link>
        ))}
    </nav>
  );
}
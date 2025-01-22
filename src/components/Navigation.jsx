import { Link, useLocation } from 'react-router-dom';

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
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}
      >
        {navItems.map(({ path, label }) => (
          <div key={path}>
            <Link
              to={path}
              style={location.pathname === path ? activeLinkStyle : linkStyle}
            >
              {label}
            </Link>
          </div>
        ))}
      </section>
    </nav>
  );
}
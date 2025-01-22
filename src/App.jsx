import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Header>
          <Navigation />
        </Header>
        <main style={{
          flex: '1',
          padding: '2rem',
          maxWidth: '100%',
          margin: '0 auto',
          width: '100%'
        }}>
          <Routes>
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element={<AboutMe />} /> {/* Default route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

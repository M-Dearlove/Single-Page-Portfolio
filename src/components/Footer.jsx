export default function Footer() {
    return (
      <footer style={{
        padding: '2rem',
        backgroundColor: 'lightblue',
        textAlign: 'center',
        marginTop: 'auto'  // This helps push the footer to the bottom
      }}>
        <div>
          <a href="https://github.com/M-Dearlove" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/mdearlove/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            LinkedIn
          </a>
        </div>
        <p>© 2025 Matthew Dearlove. All rights reserved.</p>
      </footer>
    );
  }
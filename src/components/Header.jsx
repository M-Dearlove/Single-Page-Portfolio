export default function Header({ children }) {
    return (
        <section className="main-header" style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            backgroundColor: 'lightblue',
            padding: '20px',
            gap: '50px',
        }}>
            <h1 style={{ margin: 0, padding: 0 }}>Matthew Dearlove</h1>
            {children}  {/* This will render the Navigation component */}
        </section>
    );
}
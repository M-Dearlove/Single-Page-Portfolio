import '../styles/header.css';

export default function Header({ children }) {
    return (
        <section className="main-header">
            <h1>Matthew Dearlove</h1>
            {children}  {/* This will render the Navigation component */}
        </section>
    );
}
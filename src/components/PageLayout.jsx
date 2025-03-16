export default function PageLayout({ title, children, width }) {
    return (
        <div className={`page-container ${width || ''}`}>
            <h2 className="page-title">{title}</h2>
            <div className="page-content">
                {children}
            </div>
        </div>
    );
}
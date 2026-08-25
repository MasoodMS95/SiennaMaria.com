import './NotFound.css'

export default function NotFound() {
    return (
        <main className="not-found standard-font">
            <p className="not-found-code">404</p>
            <h1 className="not-found-title">Page not found</h1>
            <p className="not-found-message">
                Sorry, the page you were looking for does not exist.
            </p>
        </main>
    )
}

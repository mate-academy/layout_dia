const NotFound = () => (
  <main className="not-found">
    <div className="not-found__content">
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">Page not found</h1>
      <p className="not-found__description">
        The page you requested does not exist or has been moved.
      </p>
      <a href="/" className="button button--primary not-found__link">
        Return home
      </a>
    </div>
  </main>
);

export default NotFound;

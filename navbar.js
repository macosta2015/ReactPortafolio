export default function Navbar() {
    return (
      <nav className="nav">
        <Link to="/" className="site-title">
          Site Name
        </Link>
        <ul>
          <CustomLink to="/pricing">Pricing</CustomLink>
          <CustomLink to="/about">About</CustomLink>
        </ul>
      </nav>
    )
  }
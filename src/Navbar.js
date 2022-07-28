export default function Navbar() {
    return (
    <nav className="nav">
      <a href="/" className="site-titke">
        MARIO ACOSTA'S PORTAFOLIO
        </a>
      <ul>
        <li className="active">
          <a href="/pricing">Projects:</a>
          </li>
          <li>
          <a href="/about">Resume</a>
          </li>
          <li>
          <a href="/about">Contact</a>
          </li>
      </ul>
    </nav>
    )
  }
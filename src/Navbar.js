import { Anchor } from 'antd';
const { Link } = Anchor;

export default function Navbar() {
    return (
    <nav className="nav">
      <a href="/" className="site-titke">
        MARIO ACOSTA'S PORTAFOLIO
        </a>
      <ul>
        <li className="active">
          <a href="#Projects">Projects:</a>
        </li>
        <li>
          <a href="#Resume">Resume</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>

      <ul>
      <li className="active">
      <Anchor>
      <Link href="#Projects" title="Projects" />
      <Link href="#Resume" title="Resume" />
      <Link href="#Contact" title="Contact" />
      </Anchor>
      </li>
      </ul>

    </nav>

    
    )
  }
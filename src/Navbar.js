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
          <a href="/projects">Projects:</a>
          </li>
          <li>
          <a href="/about">Resume</a>
          </li>
          <li>
          <a href="/contact">Contact</a>
          </li>
      </ul>

    <Anchor>
    
    
    <Link href="#Projects" title="Projects" />

    <Link href="#Contact" title="Contact" />
    
    <Link href="#Resume" title="Resume" />

    </Anchor>
    </nav>

    
    )
  }
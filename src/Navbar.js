import { Anchor } from 'antd';
const { Link } = Anchor;

export default function Navbar() {
    return (
    <nav className="nav">
      <a href="/" className="site-titke">
        MARIO ACOSTA'S PORTAFOLIO
        </a>
      <Anchor>
      <ul>
        <li className="active">
          {/* <a href="#Projects">Projects:</a> */}
          <Link href="#Projects" title="Projects" />
        </li>
        <li>
          {/* <a href="#Resume">Resume</a> */}
          <Link href="#Resume" title="Resume" />
        </li>
        <li>
          {/* <a href="#Contact">Contact</a> */}
          <Link href="#Contact" title="Contact" />
        </li>
      </ul>
      </Anchor>

    </nav>

    
    )
  }
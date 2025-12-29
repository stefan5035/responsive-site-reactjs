export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="logo"><img src="src/assets/48f24bba-9da7-4783-a2b1-7c56e2f296e0.png" width={206} height={32}/></div>
        <nav className="nav-links">
          <a>Home</a><a>Features</a><a>Community</a><a>Blog</a><a>Pricing</a>
        </nav>
        <div className="nav-actions">
          <button className="btn primary">Register Now</button>
        </div>
      </div>
    </header>
  )
}
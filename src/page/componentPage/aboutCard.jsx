function About() {
  return (
    <main id="aboutMain">
      <Nav />
    </main>
  );
}

export default About;

function Nav() {
  return (
    <header className="headerAbout">
      <nav>
        <ul className="flex-row navbar">
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Pendidikan</button>
          </li>
          <li>
            <button>Skills</button>
          </li>
          <li>
            <button>Portofolio</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Profil() {
  return (
    <aside className="flex-col">
      <Header />
      <Body />
      <Footer />
    </aside>
  );
}
export default Profil;

function Header() {
  return (
    <div className="imagePP">
      <img src="/syahdan.webp" alt="Syahdan Firmansyah" />
    </div>
  );
}

function Body() {
  return (
    <div>
      <div className="profil flex-col">
        <h1 className="nama">Syahdan Firmansyah</h1>
        <i className="job">Front-End Web Development</i>
      </div>
      <div>
        <p className="profilText">
          Saya mempunyai pengalaman dibidang Front-end web developer, Desain
          Grafis, Data Analyst, Financing, UI/UX dan Digital Marketing.
        </p>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <ul>
          <li>
            <i className="fa-solid fa-envelope"></i>
            <a className="contactMe" href="syahdan22001@mail.unpad.ac.id">
              syahdan22001@mail.unpad.ac.id
            </a>
          </li>
          <li>
            <i className="fa-solid fa-phone"></i>
            <a className="contactMe" href="wa.me/6285155157856">
              085155157856
            </a>
          </li>
          <li>
            <i className="fa-solid fa-location-dot"></i>
            <p className="contactMe">Sumedang, Jawa barat</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <ul className="sosmed flex-row">
        <li>
          <i className="fa-brands fa-instagram fa-xl"></i>
        </li>
        <li>
          <i className="fa-brands fa-linkedin fa-xl"></i>
        </li>
        <li>
          <i className="fa-brands fa-github fa-xl"></i>
        </li>
      </ul>
    </footer>
  );
}

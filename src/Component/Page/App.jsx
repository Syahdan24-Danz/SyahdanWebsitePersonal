import Footer from "../Header/Footer";
import Header from "../Header/Header";
import About from "../Home/About";
import Profil from "../Home/Profil";
import Skills from "../Home/Skills";

export default function App() {
  return (
    <>
      <Header />
      <section className="h-screen flex flex-col items-center justify-center">
        <Profil />
      </section>
      <section className="flex flex-col items-center justify-center">
        <About />
      </section>
      <section className="flex flex-col items-center justify-center">
        <Skills />
      </section>
      <Footer />
    </>
  );
}

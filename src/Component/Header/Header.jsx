import WithArrow from "../Molekul/WithArrow";

export default function Header() {
  return (
    <header className="p-8 flex w-full h-[48px] items-center justify-between">
      <WithArrow sizeText="2rem">SYDN</WithArrow>
      <Nav />
      <Github />
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ul className="flex text-[1.2rem] gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Portofolio</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
}

function Github() {
  return <img className="w-8" src="./github-mark-white.png" alt="" />;
}

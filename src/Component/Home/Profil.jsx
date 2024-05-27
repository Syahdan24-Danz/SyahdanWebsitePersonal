import Button from "../Atom/Button";
import WithArrow from "../Molekul/WithArrow";

export default function Profil() {
  function onDownload() {
    window.open(
      "https://drive.google.com/file/d/1gwNSJ6BBE6iDQpy9osMCVjp8f3m5aZ4n/view?usp=sharing"
    );
  }
  return (
    <div className="w-[40%] flex flex-col items-center gap-4">
      <Image />
      <WithArrow sizeText="1.8rem" className={"myName"}>
        Syahdan Firmansyah
      </WithArrow>
      <Text />
      <Button onClick={onDownload}>Download CV</Button>
    </div>
  );
}

function Image() {
  return (
    <div className="w-[200px] h-[200px]">
      <img
        className="w-full h-full object-cover rounded-full"
        src="./syahdan.webp"
        alt="foto syahdan"
      />
    </div>
  );
}

function Text() {
  return (
    <div className="text-justify">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sunt
        suscipit! Voluptate quae veritatis soluta excepturi velit ratione dolore
        laboriosam suscipit eveniet vel, dolorum eos molestias voluptatum nulla.
        Dolore, hic!
      </p>
    </div>
  );
}

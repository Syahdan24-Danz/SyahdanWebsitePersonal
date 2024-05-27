import WithArrow from "../Molekul/WithArrow";

export default function About() {
  return (
    <>
      <WithArrow sizeText="2rem" className={"mb-4"}>
        About
      </WithArrow>
      <div className="about flex flex-col gap-8">
        <Schools>
          <ImgSchool imgSchool="./logo-unpad.png" />
          <DeskSchool
            nameSchool="PADJADJARAN UNIVERSITY"
            majorSchool="Digital Business"
            gpaValue="3.62"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quod beatae, omnis sequi, totam nulla assumenda, autem dolores illum
            esse ipsum aliquam numquam deserunt molestias enim quas non
            distinctio magnam?
          </DeskSchool>
        </Schools>
        <Schools>
          <ImgSchool imgSchool="./logo-unpad.png" />
          <DeskSchool
            nameSchool="SMKS PERKASA 2"
            majorSchool="mechanical Engineering"
            gpaValue="82"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quod beatae, omnis sequi, totam nulla assumenda, autem dolores illum
            esse ipsum aliquam numquam deserunt molestias enim quas non
            distinctio magnam?
          </DeskSchool>
        </Schools>
      </div>
    </>
  );
}

function Schools({ children }) {
  return <div className="flex justify-center">{children}</div>;
}

function ImgSchool({ imgSchool }) {
  return (
    <div className="w-[250px]">
      <img src={imgSchool} alt="School Logo" />
    </div>
  );
}

function DeskSchool({ children, nameSchool, majorSchool, gpaValue }) {
  return (
    <div className="w-2/3">
      <NameSchool>{nameSchool}</NameSchool>
      <AboutSchool majorSchool={majorSchool} gpaValue={gpaValue} />
      <TextSchool>{children}</TextSchool>
    </div>
  );
}

function NameSchool({ children }) {
  return <h1 className="font-bold text-[1.5rem]">{children}</h1>;
}

function AboutSchool({ majorSchool, gpaValue }) {
  return (
    <div className="flex gap-4">
      <span className="text-[0.8rem] font-light italic">
        Major: {majorSchool}
      </span>
      <span className="text-[0.8rem] font-light italic">GPA: {gpaValue}</span>
    </div>
  );
}

function TextSchool({ children }) {
  return <p>{children}</p>;
}

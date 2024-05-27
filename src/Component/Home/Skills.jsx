import WithArrow from "../Molekul/WithArrow";

export default function Skills() {
  return (
    <>
      <WithArrow sizeText="2rem" className={"mb-4"}>
        Skills
      </WithArrow>
      <div className="grid grid-rows-2 grid-cols-4 gap-4">
        <ImageLogoSkills gambar="html" />
        <ImageLogoSkills gambar="css" />
        <ImageLogoSkills gambar="js" />
        <ImageLogoSkills gambar="python" />
        <ImageLogoSkills gambar="react" />
        <ImageLogoSkills gambar="node" />
        <ImageLogoSkills gambar="php" />
        <ImageLogoSkills gambar="sql" />
      </div>
    </>
  );
}

function ImageLogoSkills({ gambar }) {
  return (
    <div className="w-[200px] p-8">
      <img className="hover:animate-bounce" src={`./${gambar}.svg`} alt="" />
    </div>
  );
}

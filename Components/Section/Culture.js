import PoliticsCulture from "./PoliticsCulture";

const Culture = async() => {
  const title = "ثقافه وفن"
  const req = await fetch("http://localhost:5000/section/culture", {
    next: { revalidate: 60 },
  });
  const res = await req.json();
  return <PoliticsCulture title={title} news={res}/>
};

export default Culture;

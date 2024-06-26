import PoliticsCulture from "./PoliticsCulture";

const base_url =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://transporter-backend.onrender.com";

const Culture = async() => {
  const title = "ثقافه وفن"
  const req = await fetch(`${base_url}/section/culture`, {
    next: { revalidate: 60 },
  });
  const res = await req.json();
  return <PoliticsCulture title={title} news={res}/>
};

export default Culture;

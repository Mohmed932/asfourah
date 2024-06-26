import PoliticsCulture from './PoliticsCulture';

const base_url =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://transporter-backend.onrender.com";

const Politics = async() => {
  const title = "سياسه"
  const req = await fetch(`${base_url}/section/politics`, {
    next: { revalidate: 60 },
  });
  const res = await req.json();
  return <PoliticsCulture title={title} news={res}/>
}

export default Politics
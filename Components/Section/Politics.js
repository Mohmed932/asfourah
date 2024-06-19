import PoliticsCulture from './PoliticsCulture';

const Politics = async() => {
  const title = "سياسه"
  const req = await fetch("http://localhost:5000/section/politics", {
    next: { revalidate: 60 },
  });
  const res = await req.json();
  return <PoliticsCulture title={title} news={res}/>
}

export default Politics
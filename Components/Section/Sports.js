import BussinessSports from "./BussinessSports";

const Sports = async() => {
  const title = "رياضه";
  const req = await fetch("http://localhost:5000/section/sport", {
    next: { revalidate: 60 },
  });
  const res = await req.json();
  return (
    <div>
      <BussinessSports title={title} news={res}/>
    </div>
  );
};

export default Sports;

import Singlenews from "@/Components/Singlenews/Singlenews";
const base_url =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://transporter-backend.onrender.com";
const fetchNewsData = async (id) => {
  try {
    const req = await fetch(`${base_url}/news/${id}`, { cache: "force-cache" });
    const res = await req.json();
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const generateMetadata = async ({ params }) => {
  const id = params.id;
  const res = await fetchNewsData(id);
  return {
    metadataBase: new URL("https://www.asfourah.online"),
    title: res?.title,
    description: res?.desc[0] || res?.title,
    canonical: `https://www.asfourah.online/news/${id}`,
    icons: {
      icon: "./icon.png",
      shortcut: "./icon.png",
      apple: "./icon.png",
    },
    openGraph: {
      card: "summary_large_image",
      title: res?.title,
      description: res?.desc[0] || res?.title,
      siteName: "اول بأول",
      images: res?.more_details?.largeImage,
      type: "article",
      url: `https://www.asfourah.online/news/${id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: res?.title,
      description: res?.desc[0] || res?.title,
      siteName: "اول بأول",
      images: res?.more_details?.largeImage,
      type: "article",
      url: `https://www.asfourah.online/news/${id}`,
    },
  };
};

const page = async ({ params }) => {
  const id = params.id;
  const res = await fetchNewsData(id);
  return <Singlenews news={res} id={id} />;
};

export default page;

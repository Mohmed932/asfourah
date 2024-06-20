import { Fragment } from "react";
import Breakingnews from "@/Components/Breakingnews";
import Technology from "@/Components/PageSections/Technology";

const base_url =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://transporter-backend.onrender.com";
export const metadata = {
  title: "أخبار التكنولوجيا - تحديثات حصرية عن التكنولوجيا في الشرق الأوسط",
  description:
    "عصفوره موقع أخباري متخصص في أخبار التكنولوجيا في الشرق الأوسط. نقدم آخر الأخبار والمقالات والتحليلات حول التكنولوجيا في المنطقة.",
  metadataBase: new URL("https://www.asfourah.online"),
  category: "تكنولوجيا",
  icons: {
    icon: "./icon.png",
    shortcut: "./icon.png",
    apple: "./icon.png",
  },
  canonical: "https://www.asfourah.online/Technology",
  openGraph: {
    title: "أخبار التكنولوجيا - تحديثات حصرية عن التكنولوجيا في الشرق الأوسط",
    description:
      "عصفوره موقع أخباري متخصص في أخبار التكنولوجيا في الشرق الأوسط. نقدم آخر الأخبار والمقالات والتحليلات حول التكنولوجيا في المنطقة.",
    siteName: "عصفوره",
    type: "website",
  },
};



const page = async () => {
  const req = await fetch(`${base_url}/category/technology?page=1&limit=9`, {
    next: { revalidate: 60 },
  });
  const res = await req.json();
  return (
    <Fragment>
      <Breakingnews />
      <Technology news={res} />
    </Fragment>
  );
};

export default page;

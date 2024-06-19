import { Fragment } from "react";
import Breakingnews from "@/Components/Breakingnews";
import Politics from "@/Components/PageSections/Politics";


export const metadata = {
  title: "أخبار السياسة - تحديثات حصرية عن السياسة في الشرق الأوسط",
  description:
    "عصفوره موقع أخباري متخصص في أخبار السياسة في الشرق الأوسط. نقدم آخر الأخبار والمقالات والتحليلات حول السياسة في المنطقة.",
  metadataBase: new URL("https://www.asfourah.online"),
  category: "سياسة",
  icons: {
    icon: "./icon.png",
    shortcut: "./icon.png",
    apple: "./icon.png",
  },
  canonical: "https://www.asfourah.online/Politics",
  openGraph: {
    title: "أخبار السياسة - تحديثات حصرية عن السياسة في الشرق الأوسط",
    description:
      "عصفوره موقع أخباري متخصص في أخبار السياسة في الشرق الأوسط. نقدم آخر الأخبار والمقالات والتحليلات حول السياسة في المنطقة.",
    siteName: "عصفوره",
    type: "website",
  },
};



const page = async () => {
  const req = await fetch("http://localhost:5000/category/politics?page=1&limit=9", {
    next: { revalidate: 60 },
  });
  const res = await req.json();
  return (
    <Fragment>
      <Breakingnews />
      <Politics news={res} />
    </Fragment>
  );
};

export default page;

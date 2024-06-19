import { Fragment } from "react";
import Breakingnews from "@/Components/Breakingnews";
import Sports from "@/Components/PageSections/Sports";

export const metadata = {
  title: "أخبار الرياضة - تحديثات حصرية عن الرياضة في الشرق الأوسط",
  description:
    "عصفوره موقع أخباري متخصص في أخبار الرياضة في الشرق الأوسط. نقدم آخر الأخبار والمقالات والتحليلات حول الرياضة في المنطقة.",
  metadataBase: new URL("https://www.asfourah.online"),
  category: "رياضة",
  icons: {
    icon: "./icon.png",
    shortcut: "./icon.png",
    apple: "./icon.png",
  },
  canonical: "https://www.asfourah.online/Sports",
  openGraph: {
    title: "أخبار الرياضة - تحديثات حصرية عن الرياضة في الشرق الأوسط",
    description:
      "عصفوره موقع أخباري متخصص في أخبار الرياضة في الشرق الأوسط. نقدم آخر الأخبار والمقالات والتحليلات حول الرياضة في المنطقة.",
    siteName: "عصفوره",
    type: "website",
  },
};



const page = async () => {
  const req = await fetch("http://localhost:5000/category/sport?page=1&limit=9", {
    next: { revalidate: 60 },
  });
  const res = await req.json();
  return (
    <Fragment>
      <Breakingnews />
      <Sports news={res} />
    </Fragment>
  );
};

export default page;

import { Fragment } from "react";
import Breakingnews from "@/Components/Breakingnews";
import Culture from "@/Components/PageSections/Culture";

export const metadata = {
  title: "أخبار الفن والثقافة - تحديثات حصرية عن الفن والثقافة في الشرق الأوسط",
  description:
    "عصفوره موقع أخباري متخصص في أخبار الفن والثقافة في الشرق الأوسط. نقدم آخر الأخبار والمقالات والتحليلات حول الفن والثقافة في المنطقة.",
  metadataBase: new URL("https://www.asfourah.online"),
  category: "فن وثقافة",
  icons: {
    icon: "./icon.png",
    shortcut: "./icon.png",
    apple: "./icon.png",
  },
  canonical: "https://www.asfourah.online/Culture",
  openGraph: {
    title: "أخبار الفن والثقافة - تحديثات حصرية عن الفن والثقافة في الشرق الأوسط",
    description:
      "عصفوره موقع أخباري متخصص في أخبار الفن والثقافة في الشرق الأوسط. نقدم آخر الأخبار والمقالات والتحليلات حول الفن والثقافة في المنطقة.",
    siteName: "عصفوره",
    type: "website",
  },
};



const page = async () => {
  const req = await fetch("http://localhost:5000/category/culture?page=1&limit=9", {
    next: { revalidate: 60 },
  });
  const res = await req.json();
  return (
    <Fragment>
      <Breakingnews />
      <Culture news={res} />
    </Fragment>
  );
};

export default page;

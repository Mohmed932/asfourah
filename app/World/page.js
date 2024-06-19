import Breakingnews from "@/Components/Breakingnews";
import World from "@/Components/PageSections/World";
import React, { Fragment } from "react";

export const metadata = {
  title: "أخبار العالم - تحديثات حصرية عن الأحداث العالمية",
  description:
    "عصفوره موقع أخباري متخصص في أخبار العالم. نقدم آخر الأخبار والمقالات والتحليلات حول الأحداث العالمية.",
  metadataBase: new URL("https://www.asfourah.online"),
  category: "عالم",
  icons: {
    icon: "./icon.png",
    shortcut: "./icon.png",
    apple: "./icon.png",
  },
  canonical: "https://www.asfourah.online/World",
  openGraph: {
    title: "أخبار العالم - تحديثات حصرية عن الأحداث العالمية",
    description:
      "عصفوره موقع أخباري متخصص في أخبار العالم. نقدم آخر الأخبار والمقالات والتحليلات حول الأحداث العالمية.",
    siteName: "عصفوره",
    type: "website",
  },
};



const page = async () => {
  const req = await fetch("http://localhost:5000/category/world?page=1&limit=9", {
    next: { revalidate: 60 },
  });
  const res = await req.json();
  return (
    <Fragment>
      <Breakingnews />
      <World news={res} />
    </Fragment>
  );
};

export default page;

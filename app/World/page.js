import Breakingnews from "@/Components/Breakingnews";
import World from "@/Components/PageSections/World";
import React, { Fragment } from "react";
const base_url =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://transporter-backend.onrender.com";
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
  const req = await fetch(`${base_url}/category/world?page=1&limit=9`, {
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

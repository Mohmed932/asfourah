import Breakingnews from "@/Components/Breakingnews";
import Palestine from "@/Components/PageSections/Palestine";
import React, { Fragment } from "react";
const base_url =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://transporter-backend.onrender.com";
export const metadata = {
  title: "أخبار فلسطين - تحديثات حصرية عن أحداث فلسطين",
  description:
    "عصفوره موقع أخباري متخصص في أخبار فلسطين. نقدم آخر الأخبار والمقالات والتحليلات حول الأحداث في فلسطين.",
  metadataBase: new URL("https://www.asfourah.online"),
  category: "فلسطين",
  icons: {
    icon: "./icon.png",
    shortcut: "./icon.png",
    apple: "./icon.png",
  },
  canonical: "https://www.asfourah.online/Palestine",
  openGraph: {
    title: "أخبار فلسطين - تحديثات حصرية عن أحداث فلسطين",
    description:
      "عصفوره موقع أخباري متخصص في أخبار فلسطين. نقدم آخر الأخبار والمقالات والتحليلات حول الأحداث في فلسطين.",
    siteName: "عصفوره",
    type: "website",
  },
};



const page = async () => {
  const req = await fetch(`${base_url}/category/palestine?page=1&limit=9`, {
    next: { revalidate: 60 },
  });
  const res = await req.json();
  return (
    <Fragment>
      <Breakingnews />
      <Palestine news={res} />
    </Fragment>
  );
};

export default page;

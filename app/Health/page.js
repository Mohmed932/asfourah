import { Fragment } from "react";
import Breakingnews from "@/Components/Breakingnews";
import Health from "@/Components/PageSections/Health";
const base_url =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://transporter-backend.onrender.com";
export const metadata = {
  title: "أخبار الصحة - تحديثات حصرية عن الصحة في الشرق الأوسط",
  description:
    "عصفوره موقع أخباري متخصص في أخبار الصحة في الشرق الأوسط. نقدم آخر الأخبار والمقالات والتحليلات حول الصحة في المنطقة.",
  metadataBase: new URL("https://www.asfourah.online"),
  category: "صحة",
  icons: {
    icon: "./icon.png",
    shortcut: "./icon.png",
    apple: "./icon.png",
  },
  canonical: "https://www.asfourah.online/Health",
  openGraph: {
    title: "أخبار الصحة - تحديثات حصرية عن الصحة في الشرق الأوسط",
    description:
      "عصفوره موقع أخباري متخصص في أخبار الصحة في الشرق الأوسط. نقدم آخر الأخبار والمقالات والتحليلات حول الصحة في المنطقة.",
    siteName: "عصفوره",
    type: "website",
  },
};



const page = async () => {
  const req = await fetch(`${base_url}/category/health?page=1&limit=9`, {
    next: { revalidate: 60 },
  });
  const res = await req.json();
  return (
    <Fragment>
      <Breakingnews />
      <Health news={res} />
    </Fragment>
  );
};

export default page;

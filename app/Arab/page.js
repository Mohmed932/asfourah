import Breakingnews from "@/Components/Breakingnews";
import The_Arab_world from "@/Components/PageSections/The_Arab_world";
import { Fragment } from "react";
const base_url =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://transporter-backend.onrender.com";
export const metadata = {
  title: "أخبار الشرق الأوسط - تحديثات حصرية عن أحداث الشرق الأوسط",
  description:
    "عصفوره موقع أخباري متخصص في أخبار الشرق الأوسط. نقدم آخر الأخبار والمقالات والتحليلات حول الأحداث في المنطقة.",
  metadataBase: new URL("https://www.asfourah.online"),
  category: "الشرق الأوسط",
  icons: {
    icon: "./icon.png",
    shortcut: "./icon.png",
    apple: "./icon.png",
  },
  canonical: "https://www.asfourah.online/Arab",
  openGraph: {
    title: "أخبار الشرق الأوسط - تحديثات حصرية عن أحداث الشرق الأوسط",
    description:
      "عصفوره موقع أخباري متخصص في أخبار الشرق الأوسط. نقدم آخر الأخبار والمقالات والتحليلات حول الأحداث في المنطقة.",
    siteName: "عصفوره",
    type: "website",
  },
};

const page = async () => {
  const req = await fetch(
    `${base_url}/category/arab?page=1&limit=9`,
    {
      next: { revalidate: 60 },
    }
  );
  const res = await req.json();
  return (
    <Fragment>
      <Breakingnews />
      <The_Arab_world news={res} />
    </Fragment>
  );
};

export default page;

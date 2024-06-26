import { Fragment, Suspense } from "react";
import Breakingnews from "@/Components/Breakingnews";
import Politics from "@/Components/PageSections/Politics";

const base_url =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://transporter-backend.onrender.com";
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
  const req = await fetch(`${base_url}/category/politics?page=1&limit=9`, {
    next: { revalidate: 60 },
  });
  const res = await req.json();
  return (
    <Fragment>
      <Suspense>
        <Breakingnews />
      </Suspense>
      <Politics news={res} />
    </Fragment>
  );
};

export default page;

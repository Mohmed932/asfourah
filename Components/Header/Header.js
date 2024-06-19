"use client";
import { Suspense, lazy, useState } from "react";
const Navbar = lazy(() => import("./Navbar"));
const Menubar = lazy(() => import("./Menubar"));
const Mobilebar = lazy(() => import("./Mobilebar"));

const Header = () => {
  const [active, setActive] = useState(0);
  const [show, setShow] = useState(false);
  const items = [
    { name: "الصفحه الرئيسه", path: "/" },
    { name: "عالم", path: "world" },
    { name: "سياسه", path: "politics" },
    { name: "اقتصاد", path: "business" },
    { name: "رياضه", path: "sports" },
    { name: "تكنولوجيا", path: "technology" },
    { name: "الشرق الاوسط", path: "arab" },
    { name: "صحه", path: "health" },
    { name: "فلسطين", path: "palestine" },
    { name: "ثقافه وفن", path: "culture" },
  ];
  const handleActive = (idx) => {
    setActive(idx);
  };
  return (
    <header>
      <Suspense>
        <Navbar setShow={setShow} />
        <Menubar active={active} handleActive={handleActive} items={items} />
        <Mobilebar
          active={active}
          handleActive={handleActive}
          setShow={setShow}
          show={show}
          items={items}
        />
      </Suspense>
    </header>
  );
};

export default Header;

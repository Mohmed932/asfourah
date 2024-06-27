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
    { name: "عالم", path: "World" },
    { name: "سياسه", path: "Politics" },
    { name: "اقتصاد", path: "Business" },
    { name: "رياضه", path: "Sports" },
    { name: "تكنولوجيا", path: "Technology" },
    { name: "الشرق الاوسط", path: "Arab" },
    { name: "صحه", path: "Health" },
    { name: "فلسطين", path: "Palestine" },
    { name: "ثقافه وفن", path: "Culture" },
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

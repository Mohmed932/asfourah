import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArticleIcon from "@mui/icons-material/Article";
import Link from "next/link";

const FooterSocial = () => {
  const social = [
    {
      name: "فيسبوك",
      icon: <FacebookIcon />,
      href: "https://www.facebook.com/profile.php?id=61561180892347",
    },
    {
      name: "تويتر",
      icon: <XIcon />,
      href: "https://www.threads.net/@asfourahh",
    },
    {
      name: "انستجرام",
      icon: <InstagramIcon />,
      href: "https://www.instagram.com/asfourahh/",
    },
    {
      name: "اخبار جوجل",
      icon: <ArticleIcon />,
      href: "https://www.facebook.com/profile.php?id=61561180892347",
    },
  ];
  return (
    <div className="w-[20%] max-md:w-full max-md:border-b-2 max-md:border-neutral-800 max-md:mb-5 max-md:flex flex-wrap">
      {social.map(({ name, icon ,href}, idx) => (
        <div
          key={idx}
          className="my-3 w-fit mr-5 flex items-center justify-start"
        >
          <span className="ml-3">{icon}</span>
          <Link href={href} className="hover:text-red-700 duration-500 ">
            {name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FooterSocial;

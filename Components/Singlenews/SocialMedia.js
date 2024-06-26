"use client";
import {
  Facebook,
  LinkedIn,
  Pinterest,
  Share,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import React, { Suspense } from "react";

const SocialMedia = ({ news, id }) => {
  const url = `http://asfourah.online/news/${id}`;
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const twitter = `https://twitter.com/intent/tweet?url=${url}&text=${news?.title}`;
  const linkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
  const pinterest = `https://www.pinterest.com/pin/create/button/?url=${url}&description=${news?.title}`;
  const whatsapp = `https://api.whatsapp.com/send?text=${url}`;
  const handelShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: news.title,
          text: news.desc[0],
          url,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      console.log("Web Share API is not supported in your browser.");
    }
  };
  return (
    <Suspense>
      <div>
        <a
          href={facebook}
          target="_blank"
          rel="noreferrer"
          aria-label="Share on Facebook"
        >
          <Facebook className="bg-[#1a6dd4] mx-1 p-1 text-3xl cursor-pointer" />
        </a>
        <a
          href={twitter}
          target="_blank"
          rel="noreferrer"
          aria-label="Share on Twitter"
        >
          <Twitter className="bg-[#55acef] mx-1 p-1 text-3xl cursor-pointer" />
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="Share on LinkedIn"
        >
          <LinkedIn className="bg-[#02669a] mx-1 p-1 text-3xl cursor-pointer" />
        </a>
        <a
          href={pinterest}
          target="_blank"
          rel="noreferrer"
          aria-label="Share on Pinterest"
        >
          <Pinterest className="bg-[#e4223e] mx-1 p-1 text-3xl cursor-pointer" />
        </a>
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Share on WhatsApp"
        >
          <WhatsApp className="bg-[#23c761] mx-1 p-1 text-3xl cursor-pointer" />
        </a>
        <button onClick={handelShare} aria-label="Share via Web Share API">
          <Share className="bg-[#b8383871] mx-1 p-1 text-3xl cursor-pointer" />
        </button>
      </div>
    </Suspense>
  );
};

export default SocialMedia;

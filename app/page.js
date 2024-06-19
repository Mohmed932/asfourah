import Breakingnews from "@/Components/Breakingnews";
import LatestNews from "@/Components/LatestNews";
import Bussiness from "@/Components/Section/Bussiness";
import PoliticsCultureContainer from "@/Components/Section/PoliticsCultureContainer";
import Sports from "@/Components/Section/Sports";
import Continents from "@/Components/Sections/Continents";
import Subscribe from "@/Components/Subscribe";
import TopNews from "@/Components/TopNews/TopNews";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense>
        <TopNews />
        <Breakingnews />
        <Continents />
        <Bussiness />
        <PoliticsCultureContainer />
        <Subscribe />
        <LatestNews />
        <Sports />
    </Suspense>
  );
};

export default page;

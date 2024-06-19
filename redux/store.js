import { configureStore } from "@reduxjs/toolkit";
import subscribeSlice from "./subscribeSlice";
import SectionWorldNewsData from "./World";
import SectionTechnologyNewsData from "./Technology";
import SectionSportsNewsData from "./Sports";
import SectionPoliticsNewsData from "./Politics";
import SectionPalestineNewsData from "./Palestine";
import SectionHealthNewsData from "./Health";
import SectionCultureNewsData from "./Culture";
import SectionBusinessNewsData from "./Business";
import SectionArabNewsData from "./Arab";
import searchNewsData from "./Search";

export const store = configureStore({
  reducer: {
    subscribeSlice,
    SectionWorldNewsData,
    SectionTechnologyNewsData,
    SectionSportsNewsData,
    SectionPoliticsNewsData,
    SectionPalestineNewsData,
    SectionHealthNewsData,
    SectionCultureNewsData,
    SectionBusinessNewsData,
    SectionArabNewsData,
    searchNewsData,
  },
});

"use client"
import { configureStore } from "@reduxjs/toolkit";
import CategoriesSlice from "./Categories";
import AdvertSlice from "./AdvertisementSlice";
import JobSlice from "./JobsSlice";
import AuthSlice from "./auth";
import FriendsSlice from "./FriendsSlice";

export default configureStore({
  reducer: {
    categoriesMenu: CategoriesSlice,
    Ads: AdvertSlice,
    JobSlice,
    AuthSlice, 
    FriendsSlice,
  },
});

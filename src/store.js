import { configureStore } from "@reduxjs/toolkit";
import listingSlice from "./components/Listings/ListingSlice";

export default configureStore({
    reducer: {
        listings: listingSlice,
    },
});
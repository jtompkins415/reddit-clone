// Slice for Listings in SubbReddits

import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


//Inital state configuration

const initialState = {
    listings: {},
    status: 'idle',
    error: null
};


//Async thunk to fetch new listings

export const fetchListings = createAsyncThunk(
    'listings/fetchListings',
    async () => {
        try {
            let response = await axios.get('https://www.reddit.com/new.json')
            const {children} = response.data.data;
            console.log(children);
            const listingData = children.reduce((acc, listing) => {
                const previewData = listing.data.preview;
                const previewImage = previewData?.images?.[0]?.source?.url || '';
                acc[listing.data.id] = {
                    id: listing.data.id,
                    title: listing.data.title,
                    text: listing.data.selftext,
                    author: listing.data.author,
                    ups: listing.data.ups,
                    downs: listing.data.downs,
                    subreddit: listing.data.subreddit,
                    url: listing.data.url,
                    preview: {
                        enabled: !!previewImage,
                        images: [
                            {
                                source: {
                                    url: previewImage
                                }
                            }
                        ]
                    }
                };
                return acc
            }, {});
            return listingData;
        }catch (err){
            throw err;
            console.log(err.message);
        }
    }
)

//Listing Slice w/ extraReducer to handle async data fetching

const listingsSlice = createSlice({
    name: 'listings',
    initialState: initialState,
    reducers: {
        addListing: (state, action) => {
            const newListing = {
                id: action.payload.id,
                title: action.payload.title,
                text: action.payload.text,
                author: action.payload.author,
                ups: action.payload.ups,
                downs: action.payload.downs,
                subreddit: action.payload.subreddit,
                url: action.payload.url
            }
            state[newListing.id] = newListing;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchListings.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchListings.fulfilled, (state, action) => {
                state.status = 'success';
                state.listings = action.payload;
            })
            .addCase(fetchListings.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message
            })
    }
});


//Listings Selector

export const selectListings = (state) => state.listings.listings;

export const {addListing} = listingsSlice.actions;
export default listingsSlice.reducer;



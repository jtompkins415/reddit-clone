import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings, selectListings } from "../components/Listings/ListingSlice";
import SearchBar from "../features/SearchBar/SearchBar";
import Listings from '../components/Listings/Listings';
import './LandingPage.css';

function LandingPage() {

    const dispatch = useDispatch();
    const listings = useSelector(selectListings);
    
    useEffect(() => {
        dispatch(fetchListings());
    }, [dispatch]);
    

    return (
        <>
            <div className="landing-searchBar-container">
                <SearchBar />
            </div>
            <div className="landing-listings-container">
                <Listings listings={listings}/>
            </div>
        </>
        
    );
};

export default LandingPage;
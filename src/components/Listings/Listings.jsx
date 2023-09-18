// Component to render all listings
import { useSelector } from "react-redux";
import { selectListings } from "./ListingSlice";
import Listing from './Listing';

function Listings({listings}){
    

    return (
        <>
            <div className="listings-container-title">
                <h2>Newest Listings</h2>
            </div>
            <div className="listings-container-main">
                {
                    Object.values(listings).map((listing) => (
                        <div key={listing.id} className="listing-container">
                            <Listing  listing={listing}/>
                        </div> 
                    ))  
                }
            </div>
        </>
    ) 
};

export default Listings;
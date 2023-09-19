import {Card, CardBody, CardTitle,CardSubtitle, CardText, Button} from 'reactstrap';
import {useState} from 'react';
import './Listing.css';

function Listing({listing}){

    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    }

    return (

            <Card >
                <CardBody className='listing-content'>
                    <CardTitle tag='h2' className='listing-title'>
                        <a href={listing.url}>{listing.title}</a>
                    </CardTitle>
                    <CardSubtitle tag='h4' className='listing-subtitle'>
                        {listing.subreddit}
                    </CardSubtitle>
                    {listing.preview?.images?.length > 0 && ( // Check if there are images
                    <img
                        src={listing.preview.images[0].source.url} // Use the URL of the first image
                        alt="Listing Preview"
                        className="listing-image"
                    />
                    )}
                    {listing.text && ( // Only render if listing.text is not empty
                    <>
                    <CardText className={`listing-text${expanded ? ' expanded' : ''}`}>
                        {listing.text}
                        
                    </CardText>
                       {!expanded && (
                        <div className='read-more-link' onClick={toggleExpansion}>
                            ...
                        </div>
                        )}
                    </>
                    
                    )}
                    <CardText className='listing-author'>
                        {listing.author}
                    </CardText>
                </CardBody>
                <div className='rating-button-container'>
                    <Button>Like</Button>
                    <Button>Dislike</Button>
                </div>
            </Card>
    )
};

export default Listing;
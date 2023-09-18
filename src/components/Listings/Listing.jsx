import {Card, CardBody, CardTitle,CardSubtitle, CardText, Button} from 'reactstrap';

function Listing({listing}){

    return (

            <Card >
                <CardBody className='listing-content'>
                    <CardTitle tag='h3'><a href={listing.url}>{listing.title}</a></CardTitle>
                    <CardSubtitle tag='h4'>{listing.subreddit}</CardSubtitle>
                    <CardText>{listing.text}</CardText>
                </CardBody>
                <div className='rating-button-container'>
                    <Button>Like</Button>
                    <Button>Dislike</Button>
                </div>
            </Card>
    )
};

export default Listing;
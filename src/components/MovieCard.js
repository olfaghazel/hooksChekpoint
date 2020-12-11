import { Card } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import Rating from './Rating';

const MovieCard = ({ title, description, posterUrl, rate, }) => {
    return (
        <Card className="card" style={{ border: 'solid white 1px' }}>
            <Card.Img variant="top" src={posterUrl} />
            <Card.Header style={{ background: "black" }}>
                <Rating rate={rate} />
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>

    );
}
MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired
}

export default MovieCard;
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeCards.css';

const HomeCards = (props) => {
    const { title, price, img, description } = props.service;



    return (
        <div>
            <Card border="primary" >
                <Card.Img className="img" variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-danger">{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Title>Price: {price} Taka</Card.Title>

                </Card.Body>
                <Link to="/contact"><Button className="mb-2" variant="outline-primary">Enroll Now</Button></Link>

            </Card>

        </div>
    );
};

export default HomeCards;
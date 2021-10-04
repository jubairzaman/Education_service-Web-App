import React, { useEffect, useState } from 'react';
import { Col, Row, Button, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppPromo from '../AppPromo/AppPromo';
import HomeCards from '../HomeCards/HomeCards';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container">

            {/* Header Section  */}
            <section>
                <Row xs={1} md={2} className="header d-flex align-items-center mt-4">
                    <Col className="">
                        <h1 className="fw-bolder">Welcome to <span className="red">JUBAIRS</span> Academy</h1>
                        <p>Its Born For Quality Education</p>
                        <p>Hope For A Bright Future </p>
                        <Link to='/service'> <Button variant="outline-danger">Check Our Services</Button></Link>
                    </Col>
                    <Col >
                        <img className="img-fluid" src={'https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?size=626&ext=jpg'} alt="" />

                    </Col>
                </Row>
            </section>

            {/* services section */}

            <section className="mt-4 mb-4">
                <h1 className="fw-bolder">Our Services</h1>

                <div className="container cards ">

                    {
                        <div className="container mt-4">
                            <Row xs={1} md={2} className="g-4">
                                {services.map((service, idx) => (
                                    <Col>
                                        <HomeCards
                                            key={service.id}
                                            service={service}></HomeCards>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    }

                </div>

            </section>
            <div className="container mt-4 mb-4">
                <AppPromo></AppPromo>

            </div>



        </div>
    );
};

export default Home;
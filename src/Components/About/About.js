import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLocationArrow, faInbox, faPhone } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <h1 className="mt-4 mb-4">About Us</h1>
            <div className="container ">
                <Row>
                    <Col><p>Looking for a reliable eLearning production company? We are a full-service learning design and development vendor based in New York and serving customers nationwide throughout the USA. We stand out from other eLearning development companies as a leader that offers cutting-edge learning solutions to businesses, government agencies, educational institutions, and non-profits. We are consistently rated as one of the top eLearning Companies in the USA. We perform a complete life-cycle of instructional design services, online learning, eLearning solutions development, blended learning, mobile learning, curriculum development, and facilitation. The digital learning products offered by our team can be hosted online, on your corporate LMS or our cloud-based learning management system. We are active in the learning and development community and maintain close partnerships with other leading eLearning providers.</p></Col>
                    <Col><img className="img-fluid" src={'https://www.blogtyrant.com/wp-content/uploads/2011/02/best-about-us-pages.png'} alt="" /></Col>
                </Row>
            </div>
            <h1 className="mt-4">Our Location</h1>
            <p><FontAwesomeIcon icon={faLocationArrow} /> Level-4, 34, Awal Centre, Banani, Dhaka</p>
            <p > <FontAwesomeIcon icon={faInbox} /> Official : Info@JubairsAcademy.edu</p>
            <p > <FontAwesomeIcon icon={faPhone} /> Office HotLine : 16247 Office : 01977430976</p>

        </div>
    );
};

export default About;
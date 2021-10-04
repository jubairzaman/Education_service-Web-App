import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <div className="container mt-4">

            <img className="w-50 " src={'https://wallpaperaccess.com/full/3124512.jpg'} alt="" />
            <h1>Fill Up This Form</h1>
            <p>Our Team Will Contact You As Soon As Possible </p>
            <InputGroup className="mb-3 w-50 mx-auto">
                <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <InputGroup className="mb-3 w-50 mx-auto">
                <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <InputGroup className="mb-3 w-50 mx-auto">
                <InputGroup.Text id="inputGroup-sizing-default">Phone</InputGroup.Text>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <InputGroup className="mb-3 w-50 mx-auto">
                <InputGroup.Text id="inputGroup-sizing-default">Whice Course You Want To Enroll</InputGroup.Text>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <Button className="mb-4" variant="outline-success">Submit</Button>

        </div>
    );
};

export default ContactUs;
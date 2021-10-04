import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import HomeCards from '../HomeCards/HomeCards';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <section className="mt-4 mb-4">
                <h1>Our Services</h1>

                <div className="container cards ">
                    {
                        services.map(service =>
                            <CardGroup >
                                <HomeCards
                                    key={service.id}
                                    service={service}></HomeCards>


                            </CardGroup>
                        )
                    }

                </div>

            </section>

        </div>
    );
};

export default Service;
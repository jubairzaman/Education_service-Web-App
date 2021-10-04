import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';

const AppPromo = () => {
    return (
        <div className="mt-4">

            <img src={'https://10minuteschool.com/assets/landing-page/studying.svg'} alt="" />
            <h1 className="fw-bolder">Learn <span className="text-danger fw-bolder">With Happiness</span></h1>
            <p className="w-50 mx-auto ">Academic library full of videos, quizzes, interactive books, get professional and skill development courses always, completely free!</p>
            <Button className="bg-danger"><FontAwesomeIcon icon={faDownload} /> Download Now </Button>


        </div>
    );
};

export default AppPromo;
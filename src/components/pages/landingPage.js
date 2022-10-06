import React from 'react';
import {Button} from "react-bootstrap";
import PropTypes from 'prop-types';

const LandingPage = ({name, mainImg, connect}) => {
    return (
        <div className="d-flex justify-content-center flex-column text-center min-vh-100" style={{backgroundColor: "#263238"}}>
            <div className="mt-auto text-light mb-5">
                <div
                    className="ratio ratio-1x1 mx-auto mb-2"
                    style={{maxWidth: "26vw"}}
                >
                    <img src={mainImg} alt=""/>
                </div>
                <h1 className='font-title'>{name}</h1>
                <h4 style={{fontSize: "16px"}}>Are you the type of crazy investor funding cool projects no one else considers? CrazyCrowd is the place for you!</h4>
                <p className='pt-3 mb-2' style={{fontSize: "14px"}}>Please connect your wallet to continue.</p>
                <Button
                    onClick={() => connect()}
                    variant="outline-light"
                    className="rounded-pill px-3 mt-1"
                >
                    Connect Wallet
                </Button>
            </div>
            <p className="mt-auto text-danger"><small>Powered by Algorand</small></p>
        </div>
    );
};

LandingPage.propTypes = {
    name: PropTypes.string,
    mainImg: PropTypes.string,
    connect: PropTypes.func
};

export default LandingPage;
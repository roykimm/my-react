import React, { Component } from 'react';
import { InfoConsumer } from '../context'

export class Details extends Component {
    render() {
        return (
            <InfoConsumer>
                {data => {
                    const { 
                        id,
                        headerTitle,
                        headerSubTitle,
                        headerText,
                        img,
                        title,
                        maps,
                        description
                    } = data.detailInfo;

                    return (
                        <React.Fragment>
                            <div className="container-fluid align-items-center">
                                <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                                <h4 className="display-5">{headerSubTitle}</h4>
                                <p>{headerText}</p>
                                {/* Social Icons */}
                                <div className="container mt-5">
                                    <div className="row justify-content-center">
                                        <div className="col-2">
                                            <i className="fab fa-facebook-f"></i>
                                        </div>
                                        <div className="col-2">
                                            <i className="fab fa-twitter"></i>
                                        </div>
                                        <div className="col-2">
                                            <i className="fab fa-google-plus"></i>
                                        </div>
                                        <div className="col-2">
                                            <i className="fab fa-reddit"></i>
                                        </div>
                                        <div className="col-2">
                                            <i className="fab fa-whatsapp"></i>
                                        </div>
                                        <div className="col-2">
                                            <i className="fab fa-facebook-messenger"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Nav Links */}
                            <div className="container">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a href="" className="nav-link active"></a>
                                    </li>
                                </ul>
                            </div>

                        </React.Fragment>
                    );
                }}
            </InfoConsumer>
        )
    }
}

export default Details

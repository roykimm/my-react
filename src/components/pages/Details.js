import React, { Component } from 'react';
import { InfoConsumer } from '../context'
import styled from 'styled-components';

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
                            <HeaderDetails className="container-fluid align-items-center">
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
                            </HeaderDetails>
                            {/* Nav */}
                            <div className="container">
                                {/* Nav Links */}
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="aboutPlace-tab" data-bs-toggle="tab" data-bs-target="#aboutPlace" type="button" role="tab" aria-controls="aboutPlace" aria-selected="true">aboutPlace</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">reviews</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="map-tab" data-bs-toggle="tab" data-bs-target="#map" type="button" role="tab" aria-controls="map" aria-selected="false">map</button>
                                    </li>
                                </ul>
                                {/* Tab Pane */}
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="aboutPlace" role="tabpanel" aria-labelledby="aboutPlace-tab">
                                        <div className="tab-pane fade show active" id="aboutPlace" role="tabpanel" aria-labelledby="aboutPlace">
                                            <h2 className="mb-3">{title}</h2>
                                            <p>{description}</p>
                                            <img src={img} alt={title} className="img-thumbnail img-fluid" />
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                        Reviews Content
                                    </div>
                                    <div class="tab-pane fade" id="map" role="tabpanel" aria-labelledby="map-tab">
                                        <iframe src={maps} 
                                            style = {{
                                                border:'0',
                                                height:'28rem',
                                                width:'100%',
                                                frameborder: '0'
                                            }}>
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                }}
            </InfoConsumer>
        )
    }
}

export default Details

const HeaderDetails = styled.header`
    background : linear-gradient(rgba(109,109,109), rgba(255,255,255));
    height : 100vh;
    text-transform: uppercase;
    color : var(--mainWhite);
    text-align: center;

    h1 {
        padding-top : 10%;
        color : var(--mainDark);
    }

    h4 {
        color : var(--mainDark);
    }

    p {
        padding-left : 10%;
        padding-right : 10%;
        margin-bottom : 10%;
        color : var(--mainDark);
    }
`;

import React, { Component } from 'react'
import { InfoConsumer } from './context';
import { Link } from 'react-router-dom';

export class Info extends Component {
    render() {

        const { 
            id,
            headerTitle,
            headerSubTitle,
            headerText,
            img
        } = this.props.item;

        return (
            <InfoConsumer>
                {value => (
                    <div className="col-10 col-lg-4 mx-auto mb-5">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={img} alt={headerTitle} className="card-img" />
                            <div className="card-body">
                                <h3 className="card-title text-uppercase">{headerTitle}</h3>
                                <h5 className="card-title">{headerSubTitle}</h5>
                                <p className="card-text">{headerText}</p>
                                <Link
                                    onClick={() => value.handleDetail(id)}
                                    to="/app2/details"
                                    className="btn btn-outline-success text-uppercase"
                                >
                                More Info
                                </Link>
                            </div>
                        </div>
                    </div>
                )
                }
            </InfoConsumer>
        )
    }
}

export default Info

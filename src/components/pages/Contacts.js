import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Contacts extends Component {
    render() {
        return (
            <section className="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">
                        <h3><strong>Our Location</strong></h3>
                    </div>
                
                    <div className="row">
                        <div className="col-md-7">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13052.670022447352!2d129.08836222187912!3d35.12749323499288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA3JzM4LjkiTiAxMjnCsDA1JzQ5LjYiRQ!5e0!3m2!1sko!2skr!4v1625654906823!5m2!1sko!2skr" width="600" height="450" allowfullscreen="" loading="lazy" allowFullScreen
                            style={{border : '0' , width: '100%', height: '315px', frameborder: '0'}}
                        ></iframe>
                        </div>

                        <div className="col-md-5">
                            <h4><strong>Contact Us</strong></h4>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control my-1" placeholder="name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control my-1" placeholder="email" />
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control my-1" placeholder="Phone" />
                                </div>
                                <textarea className="form-control my-1" cols="30" rows="3" placeholder="message..." />
                                <Link className="btn btn-outline-primary text-uppercase mt-1">
                                    <i className="fa fa-paper-plane-o" aria-hidden="true" />
                                    <i className="fab fa-telegram-plane"></i>&nbsp;Send
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contacts

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import WizardFooter from "./WizardFooter";

export default class ShippingInfo extends Component {
    render() {
        return (
            <div>
                <h3 className="mb-3">Shipping Information</h3>

                <div class="address-block">
                    <Row g={0} className="align-items-center">
                        <Col sm={6}>
                            <div className="p-3">
                                <div>Jamy Larson</div>
                                <div>
                                    Unit 2 Green Mount Retail Park<br />
                                    Halifax<br />
                                    HX1 5QN<br />
                                    Tel: 0344 332 5931
                                </div>
                                <div>
                                    <a href="#">Email Address</a> . <a href="#">Add New</a>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <iframe src="http://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114487.44141505488!2d72.96050347972428!3d26.270342409344973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c4eaa06ccb9%3A0x8114ea5b0ae1abb8!2sJodhpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1649343204443!5m2!1sen!2sin" height="250" style={{
                                border: 0,
                                width: '100%',
                                marginBottom: -6
                            }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Col>
                    </Row>
                </div>
                <h3 className="my-3">Shipping Method</h3>

                <Row className="mb-3">
                    <label className="col-sm-6">
                        <div className="address-picker p-4">
                            <div className="d-flex">
                                <input type="radio" name="address" checked className="d-none" value="standard" />
                                <i className="radio-icon"></i>
                                <div className='flex-fill'>
                                    <div className="d-flex justify-content-between">
                                        <div>Standard Delivery</div>
                                        <strong>Free</strong>
                                    </div>
                                    <div className="mt-2">
                                        Estimated 14-20 Day Shipping <br />
                                        (Duties and taxes may be due upon delivery)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                    <label className="col-sm-6">
                        <div className="address-picker p-4">
                            <div className="d-flex">
                                <input type="radio" name="address" className="d-none" value="fast" />
                                <i className="radio-icon"></i>
                                <div className='flex-fill'>
                                    <div className="d-flex justify-content-between">
                                        <div>Fast Delivery</div>
                                        <strong class="price">8.00</strong>
                                    </div>
                                    <div className="mt-2">
                                        Estimated 2-5 Day Shipping <br />
                                        (Duties and taxes may be due upon delivery)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                </Row>

                <WizardFooter {...this.props} nextString="Payment" prevString="Customer Info" />
            </div>
        );
    }
}
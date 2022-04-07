import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { Col, FormControl, FormLabel, InputGroup, Row } from "react-bootstrap";
import WizardFooter from "./WizardFooter";

import { $ } from "jquery";

export default class PaymentSelection extends Component {
    state = {
        cardNumber: null,
        cardName: null,
        expiryDate: null,
        cvvNumber: null
    }
    mastInput = (type, text) => {
        let string = text.target.value;
        if (type === 'card') {
            string = string.replace(/\D/g, '').substring(0, 16);
            let cardNumber = string.toString().replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
            this.setState({ cardNumber });
        }
        if (type === 'expiry') {
            string = string.replace(/\D/g, '').substring(0, 4);
            let expiryDate = string.toString().replace(/(\d{2})(\d{2})/, '$1/$2');
            this.setState({ expiryDate });
        }
        if (type === 'cvv') {
            let cvvNumber = string.replace(/\D/g, '').substring(0, 3);
            this.setState({ cvvNumber });
        }
    }
    render() {
        return (
            <div>
                <h3 className="mb-5">Payment Selection</h3>
                <label className="address-picker w-100 p-4 mb-4">
                    <div className="d-flex mb-3">
                        <input type="radio" name="payment" className="d-none" checked value="Credit Card" />
                        <i className="radio-icon"></i>
                        <div className='flex-fill'>
                            <div className="d-flex justify-content-between">
                                <div>Credit Card</div>
                                <img src={'/credit_cards.png'} style={{ height: 20 }} />
                            </div>
                            <div className="mt-2">
                                Safe money transfer using your bank account Visa, Maestro, Discover, American Express.
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <FormLabel>Card Number</FormLabel>
                        <div class="input-with-icon">
                            <FormControl placeholder="0000 0000 0000 0000" value={this.state.cardNumber} maxLength={19} onInput={value => this.mastInput('card', value)} />
                            <FontAwesomeIcon icon="credit-card" className="input-icon" />
                        </div>
                    </div>
                    <Row>
                        <Col sm={6}>
                            <div className="mb-3">
                                <FormLabel>Name On Card</FormLabel>
                                <FormControl placeholder="" />
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="mb-3">
                                <FormLabel>Expiry Date</FormLabel>
                                <div class="input-with-icon">
                                    <FormControl placeholder="MM/YY" value={this.state.expiryDate} onInput={value => this.mastInput('expiry', value)} />
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="mb-3">
                                <FormLabel>CVV Code</FormLabel>
                                <div class="input-with-icon">
                                    <FormControl placeholder="" value={this.state.cvvNumber} onInput={value => this.mastInput('cvv', value)} />
                                    <FontAwesomeIcon icon="question-circle" className="input-icon" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </label>
                <label className="address-picker w-100 p-4 mb-4">
                    <div className="d-flex mb-3">
                        <input type="radio" name="payment" className="d-none" value="Paypal" />
                        <i className="radio-icon"></i>
                        <div className='flex-fill'>
                            <div className="d-flex justify-content-between">
                                <div>Paypal</div>
                                <img src={'/paypal.png'} style={{ height: 20 }} />
                            </div>
                            <div className="mt-2">
                                You will be redirected to PayPal website to complete your purchase securely.
                            </div>
                        </div>
                    </div>
                </label>
                <WizardFooter {...this.props} prevString="Shipping Info" />
            </div>
        );
    }
}
import React, { Component } from 'react';
import StepWizard from 'react-step-wizard';
import CustomerInfo from './components/CustomerInfo';
import ShippingInfo from './components/ShippingInfo';
import PaymentSelection from './components/PaymentSelection';
import WizardNav from './components/WizardNav';
import { Badge, Col, Container, Row } from 'react-bootstrap';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class App extends Component {
  state = {
    items: [
      {
        image: '/bag.jpg',
        title: 'Lightweight College Backpack',
        price: '99.90',
      },
      {
        image: '/watch.jpg',
        title: 'Business Casual Leather Watch Waterproof',
        price: '69.90'
      },
    ]
  }
  render() {
    return (
      <Container fluid>
        <Row g={0} className="vh-100">
          <Col sm="9">
            <div className="p-5">
              <StepWizard nav={<WizardNav />}>
                <CustomerInfo stepName="01 Customer Info" />
                <ShippingInfo stepName="02 Shipping Info" />
                <PaymentSelection stepName="03 Payment Selection" />
              </StepWizard>
            </div>
          </Col>
          <Col sm="3" className="right-bar p-5">
            <h3 className="mb-5 d-flex">
              Shopping Cart
              <Badge bg="primary" className="ms-auto rounded-circle">2</Badge>
            </h3>

            <div className="cart-items">
              {
                this.state.items.map((p, i) => {
                  return (
                    <Row key={i} className="mb-3">
                      <Col xs={4}>
                        <img src={p.image} alt={p.title} className="w-100" />
                      </Col>
                      <Col xs={8}>
                        <div>{p.title}</div>
                        <div className="price">{p.price}</div>
                      </Col>
                    </Row>
                  );
                })
              }
              <div className="voucher-line text-dark d-flex align-items-center">
                Have a Voucher?
                <FontAwesomeIcon icon="angle-down" className="ms-auto" />
              </div>
              <div className="cart-footer">
                <Row className="align-items-center">
                  <Col>Subtotal</Col>
                  <Col className="text-end price">169.80</Col>
                </Row>
                <Row className="align-items-center">
                  <Col>Shipping</Col>
                  <Col className="text-end"><b>Free</b></Col>
                </Row>
              </div>

              <Row className=" align-items-center total-amount text-dark">
                <Col>Total</Col>
                <Col className="text-end price">169.80</Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
};

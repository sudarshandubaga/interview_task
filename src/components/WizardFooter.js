import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default class WizardFooter extends Component {
    render() {
        console.log(this.props);
        return (
            <Row className="align-items-center">
                <Col>
                    {
                        this.props.currentStep === 1 ?
                            (
                                <div>
                                    <a>
                                        <FontAwesomeIcon icon="long-arrow-left" className="me-2" />
                                        Return to Shop
                                    </a>
                                </div>
                            )
                            : (
                                <div>
                                    <a onClick={this.props.previousStep}>
                                        <FontAwesomeIcon icon="long-arrow-left" className="me-2" />
                                        Back to {this.props.prevString}
                                    </a>
                                </div>
                            )
                    }
                </Col>
                <Col className="text-end">
                    {
                        this.props.currentStep !== this.props.totalSteps ? (
                            <Button onClick={this.props.nextStep} className="px-5">Continue To {this.props.nextString}</Button>
                        ) : (
                            <Button className="px-5">Complete Order</Button>
                        )
                    }
                </Col>
            </Row>
        );
    }
}
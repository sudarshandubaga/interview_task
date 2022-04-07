import { Component } from "react";
import { Col, FormControl, FormLabel, FormSelect, InputGroup, Row, Button } from "react-bootstrap";
import WizardFooter from "./WizardFooter";

export default class CustomerInfo extends Component {
    render() {
        return (
            <div>
                <h3 className="mb-5">Customer Information</h3>

                <Row>
                    <Col sm={6}>
                        <div className="mb-4">
                            <FormLabel>First Name</FormLabel>
                            <FormControl placeholder="" />
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="mb-4">
                            <FormLabel>Last Name</FormLabel>
                            <FormControl placeholder="" />
                        </div>
                    </Col>
                </Row>

                <div className="mb-4">
                    <FormLabel>Address</FormLabel>
                    <FormControl placeholder="" />
                </div>

                <Row>
                    <Col sm={6}>
                        <div className="mb-4">
                            <FormLabel>Country</FormLabel>
                            <FormSelect placeholder="">
                                <option value>Select your Country</option>
                                <option value="IN">India</option>
                            </FormSelect>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="mb-4">
                            <FormLabel>City</FormLabel>
                            <FormControl placeholder="" />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6}>
                        <div className="mb-4">
                            <FormLabel>Postal Code</FormLabel>
                            <InputGroup>
                                <FormControl placeholder="" />
                                <Button variant="light" className="px-4">Find</Button>
                            </InputGroup>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="mb-4">
                            <FormLabel>Phone</FormLabel>
                            <FormControl type="tel" placeholder="" />
                        </div>
                    </Col>
                </Row>

                <WizardFooter {...this.props} nextString="Shipping" />

                {/* <p><button onClick={this.props.previousStep}>Previous Step</button></p>
                <p><button onClick={this.props.nextStep}>Next Step</button></p>
                <p><button onClick={() => this.props.goToStep(2)}>Step 2</button></p>
                <p><button onClick={this.props.firstStep}>First Step</button></p>
                <p><button onClick={this.props.lastStep}>Last Step</button></p> */}
            </div>
        );
    }
}
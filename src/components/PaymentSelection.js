import { Component } from "react";
import WizardFooter from "./WizardFooter";

export default class PaymentSelection extends Component {
    render() {
        return (
            <div>
                Payment Selection
                <WizardFooter {...this.props} prevString="Shipping Info" />
            </div>
        );
    }
}
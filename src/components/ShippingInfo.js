import { Component } from "react";
import WizardFooter from "./WizardFooter";

export default class ShippingInfo extends Component {
    render() {
        return (
            <div>
                Shipping Info

                <WizardFooter {...this.props} nextString="Payment" prevString="Customer Info" />
            </div>
        );
    }
}
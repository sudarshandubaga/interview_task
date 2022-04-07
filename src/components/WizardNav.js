import { Component } from "react";

export default class WizardNav extends Component {
    state = {
        steps: [
            '01 Customer Info',
            '02 Shipping Info',
            '03 Payment Selection',
        ]
    }
    render() {
        return (
            <ul className={"steps mb-5"}>
                {
                    this.state.steps.map((step, i) => {
                        return (
                            <li key={i} className={i + 1 == this.props.currentStep ? 'active' : ''}>{step}</li>
                        );
                    })
                }
            </ul>
        );
    }
}
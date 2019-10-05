import React from "react";
import Sandwich from "../../Sandwich/Sandwich";
import Button from "../../Button/Button";

const checkoutSummary = props => {
    return(
        <div>
            <h1>We hope it tastes well!</h1>
            <div style={{width: "100%", height: "400px"}}>
                <Sandwich ingredients={props.ingredients} />
            </div>
            <Button
                btnType="success"
                clicked={props.checkoutContinued}>
                Continue
            </Button>
            <Button
                btnType="danger"
                clicked={props.checkoutCancelled}>
                Cancel
            </Button>
        </div>
    );
};

export default checkoutSummary;
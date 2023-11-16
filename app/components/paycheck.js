import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { public_key } from "../config";

const Paycheck = () => {
  const onToken = (token) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      key={""}
      label="Payment"
      name="eRequirement"
      billingAddress
      shippingAddress
      description={`Your total is 100`}
      amount={100}
      panelLabel="Stripe payment"
      token={onToken}
      stripeKey={public_key}
    />
  );
};

export default Paycheck;

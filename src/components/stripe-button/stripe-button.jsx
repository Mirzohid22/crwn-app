import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = (token) => {
  console.log(token);
  alert("We are in business!");
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51K2DlTAtWvmZ5594zvkkpbj8lENZY0X5REx0gnLTlcg9OQD2kyfzzddeJZIMYSvJFFoqTbS91HjdxCkCg6RG2k4G00ImOkNTVP";
  return (
      <StripeCheckout 
         label="Pay Now"
         name="CRWN APP"
         billingAddress
         shippingAddress
         image="https://svgshare.com/i/CUz.svg"
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel="Pay Now"   
         token={onToken}
         stripeKey={publishableKey}
      />
  );  
};
export default StripeCheckoutButton;

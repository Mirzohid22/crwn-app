import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51K2DlTAtWvmZ5594zvkkpbj8lENZY0X5REx0gnLTlcg9OQD2kyfzzddeJZIMYSvJFFoqTbS91HjdxCkCg6RG2k4G00ImOkNTVP";

  const onToken = (token) => {
    alert("Payment succesful: We are in business now");
    // axios({
    //   url: "http://localhost:5000/payment",
    //   method: "POST",
    //   amount: priceForStripe,
    //   token: token,
    // })
    //   .then((response) => {
    //     alert("Payment Succesful!");
    //   })
    //   .catch((error) => {
    //     console.log("Payment error: " + JSON.parse(error));
    //     alert(
    //       "There was an issue with your payment, please sure you use the  provided credit cart."
    //     );
    //   });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
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

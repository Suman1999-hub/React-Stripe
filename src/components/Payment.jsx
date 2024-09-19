import {
  CardElement,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [stripeClientSec, setStripeClientSec] = useState("");
  const intializeStrip = () => {
    if (!stripePromise) {
      const stripeRes = loadStripe(
        "pk_test_51Q0HK4P0AD2jC8VgZPl6IU1YctDS070VipxSIvSgTczlJbxdPZcpBXRnD1SZNpoQsYCWkw5EgE7I6jG55wzkFKgm002t8HcrKd"
      );
      setStripePromise(stripeRes);
    }
  };
  useEffect(() => {
    intializeStrip();
  }, []);

  const fetchClientSecret = async () => {
    const payload = new URLSearchParams({
      currency: "USD",
      amount: 1000,
    });

    const response = await fetch("https://api.stripe.com/v1/payment_intents", {
      method: "POST",
      body: payload.toString(),
      headers: {
        Authorization: `Bearer sk_test_51Q0HK4P0AD2jC8VgUjyUFPUzrXQqgduJNizwAyer1XSBwAtXJ9abDrcKMpFsdA424O80Nr19rAikUqRyLlCe8VwK00Oj2Kxpbb`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    setStripeClientSec(data.client_secret);
    console.log(data);
  };

  useEffect(() => {
    fetchClientSecret();
  }, []);

  if (!stripePromise || !stripeClientSec) {
    return <p>Stripe Loading</p>;
  }
  console.log(stripePromise);
  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret: stripeClientSec,
      }}
    >
      <CheckoutForm />
    </Elements>

    // <a href="https://buy.stripe.com/test_cN28xF4mzbMLdEY000">Payment</a>
  );
}

export default Payment;

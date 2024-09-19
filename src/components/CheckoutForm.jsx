import {
  useStripe,
  useElements,
  PaymentElement,
  ElementsConsumer,
  CardElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return; // Stripe.js hasn't loaded
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/successful",
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      // Handle successful payment
      console.log("Payment successful!", result);
    }
  };

  return (
    <div style={{ maxWidth: "800px", textAlign: "center", margin: "auto" }}>
      <h1>Stripe Payment Gatway</h1>
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <button
          disabled={!stripe}
          style={{
            height: "60px",
            width: "150px",
            backgroundColor: "red",
            color: "white",
            borderRadius: "10px",
            fontSize: "20px",
            marginTop: "10px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;

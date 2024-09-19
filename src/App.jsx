import { BrowserRouter, Route, Routes } from "react-router-dom";
import Successfull from "./components/Successfull";
import Payment from "./components/Payment";
import PayBtn from "./components/PayBtn";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PayBtn />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/successful" element={<Successfull />} />
          {/* <Route path="/paymentfail" element={}/>  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

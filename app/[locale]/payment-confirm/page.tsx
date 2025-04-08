import { Metadata } from "next";
import PaymentConfirmPage from "@/page/payment-confirm/paymentConfirmPage";

export const metadata: Metadata = {
  title: "Payment Confirm",
};

const PaymentConfirm = () => {
  return (
    <>
      <PaymentConfirmPage />
    </>
  );
};

export default PaymentConfirm;

import { Metadata } from "next";
import Payment from "@/page/payment";

export const metadata: Metadata = {
  title: "Payment",
};

const Features = () => {
  return (
    <>
      <Payment />
    </>
  );
};

export default Features;

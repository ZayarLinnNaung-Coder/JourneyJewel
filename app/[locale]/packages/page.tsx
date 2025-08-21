import { Metadata } from "next";
import MerchantsAndPackagesPage from "@/page/packages/MerchantsAndPackagesPage";

export const metadata: Metadata = {
  title: "Packages",
};

const Packages = () => {
  return (
    <>
      <MerchantsAndPackagesPage />
    </>
  );
};

export default Packages;

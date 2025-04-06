import PlaceDetails from "../../../page/place-details";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Place Details",
};

const Features = () => {
  return (
    <>
      <PlaceDetails />
    </>
  );
};

export default Features;

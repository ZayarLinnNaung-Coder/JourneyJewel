import { Metadata } from "next";
import WishlistPage from "@/page/wishlist/wishlistPage";

export const metadata: Metadata = {
  title: "Wishlist",
};

const Wishlist = () => {
  return (
    <>
      <WishlistPage />
    </>
  );
};

export default Wishlist;

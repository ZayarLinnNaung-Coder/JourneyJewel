import WishlistCard from "./wishlistCard";

const WishlistPage = () => {
    const wishlist = [
        {
            title: "Luxury Water Villa",
            location: "Maldives",
            price: 549,
            rating: 4.9,
            imageUrl: "https://images.travelandleisureasia.com/wp-content/uploads/sites/4/2023/05/08123703/lake-como-1.jpeg?tr=w-480,f-jpg,pr-true",
        },
        {
            title: "Sunset Villa",
            location: "Santorini, Greece",
            price: 429,
            rating: 4.8,
            imageUrl: "https://images.travelandleisureasia.com/wp-content/uploads/sites/4/2023/05/08123703/lake-como-1.jpeg?tr=w-480,f-jpg,pr-true",
        },
        {
            title: "Luxury Water Villa",
            location: "Maldives",
            price: 549,
            rating: 4.9,
            imageUrl: "https://images.travelandleisureasia.com/wp-content/uploads/sites/4/2023/05/08123703/lake-como-1.jpeg?tr=w-480,f-jpg,pr-true",
        },
        {
            title: "Sunset Villa",
            location: "Santorini, Greece",
            price: 429,
            rating: 4.8,
            imageUrl: "https://images.travelandleisureasia.com/wp-content/uploads/sites/4/2023/05/08123703/lake-como-1.jpeg?tr=w-480,f-jpg,pr-true",
        },
        {
            title: "Luxury Water Villa",
            location: "Maldives",
            price: 549,
            rating: 4.9,
            imageUrl: "https://images.travelandleisureasia.com/wp-content/uploads/sites/4/2023/05/08123703/lake-como-1.jpeg?tr=w-480,f-jpg,pr-true",
        },
        {
            title: "Sunset Villa",
            location: "Santorini, Greece",
            price: 429,
            rating: 4.8,
            imageUrl: "https://images.travelandleisureasia.com/wp-content/uploads/sites/4/2023/05/08123703/lake-como-1.jpeg?tr=w-480,f-jpg,pr-true",
        },
    ];

    return (
        <div className="p-6 mt-5">
            <h2 className="text-3xl font-bold text-center mb-2">Your Wishlist</h2>
            <p className="text-center text-gray-500 mb-6">Save your favorite destinations for later</p>
            <div className="flex flex-wrap justify-center">
                {wishlist.map((item, index) => (
                    <WishlistCard
                        key={index}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
};

export default WishlistPage;

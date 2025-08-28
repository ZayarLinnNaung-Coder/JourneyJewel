"use client";
import React from "react";
import { useEffect, useState } from "react";

// Define the type for your place data
interface Place {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  // Add other properties that come from your API
}

const PopularDestinations = () => {
  const [benefitData, setBenefitData] = useState<Place[]>([]); // Type the state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const response = await fetch("http://localhost:8090/api/places?page=0&size=6");
        const data = await response.json();
        setBenefitData(data.content);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBenefits().then(r => console.log(r));
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  const routeToageDetails = (id: string) => {
    localStorage.setItem("place", id);
    window.location.href = "/place-details";
  };

  const routeToPlaces = () => {
    window.location.href = "/places";
  };

  return (
      <div className="py-10 container max-w-full bg-[#fafafa]">
        <div className="">
          <div className="mb-10 flex items-center justify-center ">
            <p className="text-[20px] lg:text-[40px] tracking-normal text-center font-[500] md:w-[700px]">
              Popular Destinations
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-wrap">
          {benefitData.map((item) => (
              <div
                  key={item.id}
                  className="bg-white w-full md:w-[30%] rounded-lg p-5 ml-3 mr-3 mb-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200"
                  onClick={() => routeToageDetails(item.id)}
              >
                <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover rounded-lg" />
                <div className="p-3">
                  <p className="font-bold mb-3">{item.name}</p>
                  <span>
                      {item.description.length > 100
                          ? item.description.slice(0, 100).split(' ').slice(0, -1).join(' ') + '...'
                          : item.description
                      }
                  </span>
                  <div className="flex mt-5">
                    <span className="me-1 text-blue-900">Learn More</span>
                    <svg
                        className="w-6 h-6 text-blue-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                      <path
                          stroke="#0000FF99"
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              onClick={routeToPlaces}
          >
            View All Destinations
          </button>
        </div>
      </div>
  );
};

export default PopularDestinations;
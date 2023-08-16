import React, {useEffect, useState} from "react";
import { getAvailableSpots } from "../api";

export const OpeningPage = () => {
  const [availableSpots, setAvailableSpots] = useState([]);

  useEffect( () => {
    getAvailableSpots()
      .then((response) => response.json())
      .then((data) => {
        setAvailableSpots(data);
      });
  }, []);


  return (
    <div className="flex">
      {availableSpots && availableSpots.map(({
        area,
        spots,
        available
      }, index) => {
        return (
            <div className="flex-auto">
            <CampingInformationCard 
        key={index}
        area={area}
        spots={spots}
        availability={available}
        />
        </div>
        )
      })}
    </div>
  );
};




export const CampingInformationCard = ({ area, spots, availability}) => {
  return (
    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
    <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
      <div className="mx-auto max-w-xs px-8">
        <p className="text-base font-semibold text-gray-600">{area}r</p>
        <p className="mt-6 flex items-baseline justify-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-gray-900"> Total spots: {spots}</span>
          <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
        </p>
        <a href="#" className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 
        text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
        focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get Tickets</a>
        <p className="mt-6 text-xs leading-5 text-gray-600">Available spotsL {availability}</p>
      </div>
    </div>
  </div>
   
  );
};

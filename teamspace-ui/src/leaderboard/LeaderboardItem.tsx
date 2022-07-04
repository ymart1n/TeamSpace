import React from "react";
import { Donation } from "../types";
import logo from "../TeamSpaceLogo_circle.png";
import { formatDate } from "../utils/formatDate";

interface Props {
  // Donation type defined in types.ts
  donation: Donation;
}

const LeaderboardItem = ({ donation }: Props) => {
  return (
    <div className="w-full lg:w-2/3">
      <div className="flex flex-row items-center space-x-3 p-4 border border-sky-300/60 rounded bg-white shadow-lg shadow-sky-200/50">
        <div className="flex-1 overflow-hidden rounded-full">
          <img className="object-cover" src={logo} alt="donator profile pic" />
        </div>
        {/* flex-1 makes it to eat up as much space as it can */}
        <div className="flex-row flex w-5/6 space-x-3 justify-between">
          <div className="flex flex-col justify-center w-2/3 md:flex-1">
            <div className="text-md md:text-lg font-bold uppercase text-cyan-700">
              {donation.team}
            </div>
            <div className="text-lg md:text-xl font-black mb-1">
              {donation.displayName}
            </div>
            <div className="text-sm md:text-md break-words">
              {donation.message}
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 w-1/4 md:w-1/5">
            <span className="inline-flex items-center justify-center py-3 text-sm font-bold text-white leading-none bg-cyan-600 rounded-xl text-center">
              {donation.count.toLocaleString()} <br />
              pounds
            </span>
            <div className="text-xs text-right">
              {formatDate(donation.createdAt)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardItem;

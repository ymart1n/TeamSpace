import React, { useState } from "react";
import { useQuery } from "urql";
import { Donation } from "../types";
import LeaderboardItem from "./LeaderboardItem";

const DonationsQuery = `
  query Query($orderBy: OrderByParams) {
    donations(orderBy: $orderBy) {
      id
      count
      displayName
      email
      createdAt
      message
      team
    }
  }
`;

type DonationsQueryRes = {
  // Donation type defined in types.ts
  donations: Donation[];
};

interface Props {}

const Leaderboard = (props: Props) => {
  const [field, setOrderByField] = useState("createdAt");
  const [{ data, fetching, error }] = useQuery<DonationsQueryRes>({
    query: DonationsQuery,
    variables: {
      orderBy: {
        field,
        direction: "desc",
      },
    },
  });

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oops... {error.message}</p>;

  return (
    <div className="flex flex-col space-y-4 items-center mx-6">
      <h4 className="text-center text-4xl font-black uppercase">Leaderboard</h4>
      <div className="w-full md:w-2/3">
        <div className="xl:w-full xl:mx-0 h-12 sm:block border border-sky-300/60 rounded bg-white shadow-lg shadow-sky-200/50">
          <ul className="flex px-5 space-x-2">
            <li
              onClick={() => setOrderByField("createdAt")}
              className={
                field === "createdAt"
                  ? "text-sm border-sky-700 pt-3 rounded-t text-sky-700 w-1/2 justify-center"
                  : "text-sm text-gray-600 py-3 flex items-center hover:text-sky-700 cursor-pointer w-1/2 justify-center"
              }
            >
              <div className="flex items-center mb-3 justify-center">
                {/* {activeStatus === 1 ? "Active" : "Inactive"} */}
                Most Recent
              </div>
              {field === "createdAt" && (
                <div className="w-3/4 mx-auto h-0.5 bg-sky-700 rounded-t-md" />
              )}
            </li>
            <li
              onClick={() => setOrderByField("count")}
              className={
                field === "count"
                  ? "text-sm border-sky-700 pt-3 rounded-t text-sky-700 w-1/2 justify-center"
                  : "text-sm text-gray-600 py-3 flex items-center hover:text-sky-700 cursor-pointer w-1/2 justify-center"
              }
            >
              <div className="flex items-center mb-3 justify-center">
                {/* {activeStatus === 2 ? "Active" : "Inactive"} */}
                Most Pounds
              </div>
              {field === "count" && (
                <div className="w-3/4 mx-auto h-0.5 bg-sky-700 rounded-t-md" />
              )}
            </li>
          </ul>
        </div>
      </div>
      {data?.donations.map((donation) => (
        <LeaderboardItem donation={donation} key={donation.id} />
      ))}
    </div>
  );
};

export default Leaderboard;

import "./App.css";
import logo from "./TeamSpaceLogo.png";
import "@fontsource/montserrat"; // Defaults to weight 400.
import "@fontsource/montserrat/700.css"; // for font-bold
import "@fontsource/montserrat/300.css"; // for font-light
import "@fontsource/montserrat/900.css"; // for font-black
import { Counter } from "./donation/Counter";
import { useQuery, useSubscription } from "urql";
import Leaderboard from "./leaderboard/Leaderboard";
import DonationWizard from "./donation/DonationWizard";

// may split these into a separate component
// so that we can also print error message correctly (partly in the page instead of
// taking the whole page)
const TotalDonationsQuery = `
  query Query {
    totalDonations
  }
`;

const TotalUpdatedQuery = `
  subscription Subscription {
    totalUpdated {
      total
    }
  }
`;

const handleSubscription = (previous: any, newTotal: any) => {
  return newTotal?.totalUpdated?.total;
};

function App() {
  // may split these into a separate component
  // so that we can also print error message correctly (partly in the page instead of
  // taking the whole page)
  const [{ data, fetching, error }] = useQuery({ query: TotalDonationsQuery });
  const [res] = useSubscription(
    { query: TotalUpdatedQuery },
    handleSubscription
  );

  // can improve this later currently it's just error strings
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oops... {error.message}</p>;

  return (
    <div className="container mx-auto">
      <img className="mx-auto mb-20" src={logo} alt="logo"></img>
      <h4 className="text-center text-4xl font-bold underline mb-10">
        JOIN THE MOVEMENT
      </h4>
      <p className="text-center text-lg font-light">
        The team is growing everyday and scoring wins for the planet.
        <br /> Remove <strong>space debris</strong> with us and track our
        progress!
      </p>
      <h1 className="text-center text-7xl font-black my-10">
        {/* use or here since res.data is null (subscription listening) at first */}
        <Counter from={0} to={res.data || data.totalDonations} />
      </h1>
      <DonationWizard />
      <Leaderboard />
    </div>
  );
}

export default App;

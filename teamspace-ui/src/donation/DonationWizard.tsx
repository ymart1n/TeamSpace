import React, { useState } from "react";
import { useMutation } from "urql";
import CountSelection from "./CountSelection";
import DonationDetails from "./DonationDetails";

const CreateDonation = `
  mutation Mutation($createDonationInput: CreateDonationInput!) {
    createDonation(createDonationInput: $createDonationInput) {
      id
      count
      displayName
    }
  }
`;

interface Props {}

const DonationWizard = (props: Props) => {
  const [step, setStep] = useState(0);
  const [donationDetails, setDonationDetails] = useState({
    count: 20,
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [donationResult, createDonation] = useMutation(CreateDonation);

  const submitDonation = async (values: any) => {
    // createDonation is a promise so we can await
    console.log(values + " 4");
    await createDonation({ createDonationInput: values });
    setShowConfirmation(true);
  };

  const next = (values: any = {}) => {
    const mergedDetails = { ...donationDetails, ...values };
    console.log(mergedDetails);
    if (step === pages.length - 1) {
      submitDonation(mergedDetails);
    } else {
      setStep(step + 1);
      setDonationDetails(mergedDetails);
    }
  };

  const previous = () => {
    if (step > 0) setStep(step - 1);
  };

  const pages = [
    <CountSelection next={next} initialCount={donationDetails.count} />,
    <DonationDetails next={next} previous={previous} />,
  ];

  return (
    <div className="flex flex-col space-y-4 items-center mx-6 mb-10">
      <div className="card w-full lg:w-2/3 bg-base-100 border border-sky-300/60 rounded shadow-lg shadow-sky-200/50">
        <div className="card-body px-3 items-center text-center">
          {showConfirmation ? (
            <div className="text-lg">
              Thank you for your donation of&nbsp;
              <div className="font-bold inline">
                ${donationResult?.data.createDonation?.count}
              </div>
            </div>
          ) : (
            pages[step]
          )}
        </div>
      </div>
    </div>
  );
};

export default DonationWizard;

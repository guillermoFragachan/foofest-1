import { useState } from "react";
import TicketSelection from "./TicketSelection";
import OptionalExtras from "./OptionalExtras";
import PersonalInfo from "./PersonalInfo";
import GuestInfo from "./GuestInfo";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ticketType: "", // regular or VIP
    numberOfTickets: 1, // number of tickets the user wants to buy
    camping: false, // whether the user wants to prebook a camping spot
    campingType: "", // Green camping or not
    numberOfTents: 0, // the number of tents the user wants the crew to set up
    tentType: "", // 2-person or 3-person tent
    bookingFee: false, // whether the booking fee has been paid
    personalInfo: [], // array to store personal info for multiple tickets
  });

  const [currentStep, setCurrentStep] = useState(0); // new state for handling current form step

  const handleChange = (e) => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleNext = () => {
    if (formData.ticketType === "") {
      alert("Please select a ticket type.");
    } else if (formData.numberOfTickets < 1) {
      alert("Please select a number of tickets.");
    } else {
      setCurrentStep(currentStep + 1);
    }
  };  

  const handleSubmit = (event) => {
    event.preventDefault();
    const totalSteps = formData.numberOfTickets > 1 ? 3 : 2;

    if (currentStep === totalSteps) {
      console.log(formData);
    } else {
      alert("Please complete all steps before submitting the form!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {currentStep === 0 && (
        <TicketSelection
          handleChange={handleChange}
          formData={formData}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 1 && (
        <OptionalExtras
          handleChange={handleChange}
          formData={formData}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 2 && formData.numberOfTickets > 1 && (
        <GuestInfo
          handleChange={handleChange}
          formData={formData}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 2 && formData.numberOfTickets === 1 && (
        <PersonalInfo
          handleChange={handleChange}
          formData={formData}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 3 && (
        <PersonalInfo
          handleChange={handleChange}
          formData={formData}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 3 && formData.numberOfTickets > 1 && (
        <GuestInfo
          handleChange={handleChange}
          formData={formData}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      )}
    </form>
  );
};

export default Form;

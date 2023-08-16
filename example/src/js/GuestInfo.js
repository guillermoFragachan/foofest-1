export const GuestInfo = ({
    handleChange,
    formData,
    currentStep,
    setCurrentStep,
  }) => {
    const handleNext = () => {
      // Check if all guest info fields have been filled
      const allFieldsFilled = formData.guests.every(
        (guest) => guest.name !== "" && guest.email !== ""
      );
  
      if (allFieldsFilled) {
        setCurrentStep(currentStep + 1);
      } else {
        alert("Please fill out all required fields for each guest.");
      }
    };
  
    const handleGuestInfoChange = (index, event) => {
      const updatedGuests = [...formData.guests];
      updatedGuests[index][event.target.name] = event.target.value;
      handleChange({ target: { name: "guests", value: updatedGuests } });
    };
  
    return (
      <>
        {Array(formData.numberOfTickets - 1)
          .fill(0)
          .map((_, index) => (
            <div key={index}>
              <label>
                Guest {index + 1} Name:
                <input
                  type="text"
                  name="name"
                  value={formData.guests[index].name}
                  onChange={(e) => handleGuestInfoChange(index, e)}
                  required
                />
              </label>
  
              <label>
                Guest {index + 1} Email:
                <input
                  type="email"
                  name="email"
                  value={formData.guests[index].email}
                  onChange={(e) => handleGuestInfoChange(index, e)}
                  required
                />
              </label>
            </div>
          ))}
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </>
    );
  };
  
  export default GuestInfo;
  
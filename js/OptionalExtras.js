const OptionalExtras = ({
    handleChange,
    formData,
    currentStep,
    setCurrentStep,
  }) => {
    const handleNext = () => {
      setCurrentStep(currentStep + 1);
    };
  
    return (
      <>
        <label>
          Prebook Camping Spot:
          <input
            type="checkbox"
            name="camping"
            checked={formData.camping}
            onChange={handleChange}
          />
        </label>
  
        {formData.camping && (
          <>
            <label>
              Camping Type:
              <select
                name="campingType"
                value={formData.campingType}
                onChange={handleChange}
              >
                <option value="">--Please choose an option--</option>
                <option value="green">Green Camping +249,-</option>
                <option value="regular">Regular Camping</option>
              </select>
            </label>
  
            <label>
              Tent setup:
              <select
                name="tentType"
                value={formData.tentType}
                onChange={handleChange}
              >
                <option value="">--Please choose an option--</option>
                <option value="twoPerson">2-person tent +299,-</option>
                <option value="threePerson">3-person tent +399,-</option>
              </select>
            </label>
  
            <label>
              Number of Tents:
              <input
                type="number"
                name="numberOfTents"
                value={formData.numberOfTents}
                min="1"
                max={formData.numberOfTickets}
                onChange={handleChange}
              />
            </label>
          </>
        )}
  
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </>
    );
  };
  
  export default OptionalExtras;
  
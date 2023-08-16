const PersonalInfo = ({
  handleChange,
  formData,
  currentStep,
  setCurrentStep,
}) => {
  const handleNext = () => {
    if (formData.name && formData.email) {
      // ensuring the fields are not empty
      setCurrentStep(currentStep + 1);
    } else {
      alert("Please fill out all required fields.");
    }
  };



  return (
    <>
      <label>
        Full Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <button type="button" onClick={handleNext}>
        Next
      </button>
    </>
  );
};

export default PersonalInfo;

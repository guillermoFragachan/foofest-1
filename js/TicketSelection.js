const TicketSelection = ({
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
        Ticket Type:
        <select
          name="ticketType"
          value={formData.ticketType}
          onChange={handleChange}
        >
          <option value="">--Please choose an option--</option>
          <option value="regular">Regular</option>
          <option value="vip">VIP</option>
        </select>
      </label>

      <label>
        Number of Tickets:
        <input
          type="number"
          name="numberOfTickets"
          value={formData.numberOfTickets}
          min="1"
          onChange={handleChange}
        />
      </label>

      <button type="button" onClick={handleNext}>
        Next
      </button>
    </>
  );
};

export default TicketSelection;

import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ticketType: "", // regular or VIP
    numberOfTickets: 1, // number of tickets the user wants to buy
    camping: false, // whether the user wants to prebook a camping spot
    campingType: "", // Green camping or not
    numberOfTents: 0, // the number of tents the user wants the crew to set up
  });

  const handleChange = (e) => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <NameInput formData={formData} handleChange={handleChange} />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

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
        <label>
          Camping Type:
          <select
            name="campingType"
            value={formData.campingType}
            onChange={handleChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="green">Green Camping</option>
            <option value="regular">Regular Camping</option>
          </select>
        </label>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

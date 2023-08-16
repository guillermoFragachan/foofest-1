const NameInput = ({formData, handleChange}) => {
    return (
      <input 
        type="text"
        name="name"
        value={formData.name} 
        onChange={handleChange} 
      />
    );
  }
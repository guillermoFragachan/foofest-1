import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    spots: '',
    area: '' 
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value  
    });
  }

  return (
    <form>
      <NameInput 
        formData={formData}
        handleChange={handleChange} 
      />
      {/* other fields */}
    </form>
  )
}

export default Form;
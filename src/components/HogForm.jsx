import { useState } from "react";

function HogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    specialty: "",
    greased: false,
    image: "",
    "highest medal achieved": ""
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newHog = {
      name: formData.name,
      weight: Number(formData.weight),
      specialty: formData.specialty,
      greased: formData.greased,
      image: formData.image,
      "highest medal achieved": formData["highest medal achieved"]
    };

    onAddHog(newHog);

    setFormData({
      name: "",
      weight: "",
      specialty: "",
      greased: false,
      image: "",
      "highest medal achieved": ""
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="weight">Weight:</label>
      <input
        id="weight"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
      />

      <label htmlFor="specialty">Specialty:</label>
      <input
        id="specialty"
        name="specialty"
        value={formData.specialty}
        onChange={handleChange}
      />

      <label htmlFor="greased">Greased?</label>
      <input
        id="greased"
        name="greased"
        type="checkbox"
        checked={formData.greased}
        onChange={handleChange}
      />

      <label htmlFor="image">Image:</label>
      <input
        id="image"
        name="image"
        value={formData.image}
        onChange={handleChange}
      />

      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;
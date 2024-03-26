import React, { useState } from "react";

const ApplyButton = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Implement logic to submit application data (name, email, resume)
    // This could involve sending the data to a server-side API or storing it locally
    console.log("Application submitted:", { name, email, resume });
    // Clear the form after submission (optional)
    setName("");
    setEmail("");
    setResume(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleInputChange}
        required
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleInputChange}
        required
      />
      <br />
      <label htmlFor="resume">Resume:</label>
      <input
        type="file"
        id="resume"
        name="resume"
        accept=".pdf,.docx,.doc" // Restrict file types (optional)
        onChange={handleResumeChange}
        required
      />
      <br />
      <button type="submit">Apply Now</button>
    </form>
  );
};

export default ApplyButton;


import React, { useState, useEffect } from "react";
import { httpRequest } from "../utils/httpRequest";
import Button from "../button/Button";
import Input from "../input/Input";

const FormComponent = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const authToken = "token";

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await httpRequest(
        "https://ox43yep5bf.execute-api.eu-west-1.amazonaws.com/Stage/v1/sign-up",
        "POST",
        formData
      );
      setData(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  if (error) {
    return <div>Error:{error}</div>;
  }

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="fullName"
        value={formData.name}
        label="fullName"
        onChange={handleChange}
      />
      <Input
        type="text"
        name="email"
        value={formData.email}
        label="email"
        onChange={handleChange}
      />
      <Button
        text={`${loading ? "Loading..." : "Sign Up"}`}
        onClick={handleSubmit}
        variant="elevated"
      />
      {data && <div>{data}</div>}
    </form>
  );
};

export default FormComponent;

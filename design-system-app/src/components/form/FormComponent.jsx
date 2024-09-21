import React, { useState, useEffect } from "react";
import { httpRequest } from "../../utils/httpRequest";
import Button from "../button/Button";
import Input from "../input/Input";
import Card from "../card/card";

const FormComponent = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await httpRequest(
        "https://catfact.ninja/fact"
        // "POST",
        // formData
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

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={formData.name}
          label="Full Name"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="email"
          value={formData.email}
          label="E-mail"
          onChange={handleChange}
        />
        <Button
          text={`${loading ? "Loading..." : "Sign Up"}`}
          onClick={handleSubmit}
          variant="elevated"
        />
        {data && (
          <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2>Did You Know?</h2>
            <p>{data.fact}</p>
          </div>
        )}
      </form>
    </Card>
  );
};

export default FormComponent;

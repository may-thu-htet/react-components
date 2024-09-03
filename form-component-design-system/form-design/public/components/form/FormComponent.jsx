import React, { useState, useEffect } from "react";
import { httpRequest } from "../utils/httpRequest";

const FormComponent = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const authToken = "token";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await httpRequest(
          "https://ox43yep5bf.execute-api.eu-west-1.amazonaws.com/Stage/v1/sign-up",
          "POST",
          formData
        );
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [authToken]);

  if (error) {
    return <div>Error:{error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </form>
  );
};

export default FormComponent;

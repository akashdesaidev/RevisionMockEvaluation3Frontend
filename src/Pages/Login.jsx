import { Button, Heading, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    setIsLoading(true);
    try {
      e.preventDefault();
      const URL = "https://revision3backend.onrender.com";
      const res = await axios.post(`${URL}/login`, formData);
      console.log(res);
      toast.success("Login success");
      localStorage.setItem("calculatorToken", res.data.message);
    } catch (err) {
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
      navigate("/calculator");
    }
  };

  return (
    <div className="container mx-auto max-w-md mt-10 p-4 bg-white shadow-lg rounded">
      <Heading className="text-2xl font-semibold mb-6">Login</Heading>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-gray-700">Email:</span>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Password:</span>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>
        <div className="flex gap-2">
          <Button disabled={isLoading} type="submit">Login</Button>
          <Button disabled={isLoading}>
            <NavLink
              to="/Signup"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Sign up
            </NavLink>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;

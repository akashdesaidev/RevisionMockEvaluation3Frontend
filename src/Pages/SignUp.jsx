import { Button, Heading, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import {
  NavLink,
  Navigate,
  unstable_HistoryRouter,
  useNavigate,
} from "react-router-dom";
import { toast } from "sonner";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const URL = "https://revision3backend.onrender.com";
      const res = await axios.post(`${URL}/register`, formData);
      toast.success("signup success");
      navigate("/login");
    } catch {
      toast.error("something went wrong");
    }
  };

  return (
    <div className="container mx-auto max-w-md mt-10 p-4 bg-white shadow-lg rounded">
      <Heading className="text-2xl font-semibold mb-6">Sign Up</Heading>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-gray-700">name :</span>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>
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
          <Button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </Button>
          <Button>
            <NavLink
              to="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Login
            </NavLink>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

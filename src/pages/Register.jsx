import React, { useState } from "react";
import PasswordInput from "../components/form/PasswordInput";
import TextInput from "../components/form/TextInput";
import LargeButton from "../components/buttons/LargeButton";
import { Link } from "react-router-dom";
import AccentedLink from "../components/typography/AccentedLink";
import SecondaryLogo from "../components/Images/SecondaryLogo";
import { signup } from "../api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";

const Register = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await signup(formData, []);
    if (response[0].status === 201) {
      toast.success("Registration successful!");
      history.push("/login");
    }
  }

  return (
    <div className="min-h-screen w-full bg-primary flex flex-col flex-shrink-0 flex-grow-0 items-center pt-20 px-5">
      <SecondaryLogo />
      <p class="text-xl mt-2 text-secondary">Debt management made easy</p>
      <form
        action=""
        className="bg-secondary flex flex-col px-8 pt-8 pb-3 rounded-lg text-gray-800 mt-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row md:gap-2">
          <TextInput
            value={formData.first_name}
            setValue={(e) =>
              setFormData({ ...formData, first_name: e.target.value })
            }
            placeholder="First Name"
          />
          <TextInput
            value={formData.last_name}
            setValue={(e) =>
              setFormData({ ...formData, last_name: e.target.value })
            }
            placeholder="Last Name"
          />
        </div>
        <TextInput
          value={formData.email}
          setValue={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email"
        />
        <PasswordInput
          value={formData.password}
          setValue={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="Password"
        />
        <LargeButton
          text="Register"
          widthClass="bg-primary text-black font-bold hover:text-secondary transition duration-500"
        />
        <span className="block text-center mt-2 text-white">
          Already have an account? <AccentedLink path="/login" text="Login" />
        </span>
      </form>
    </div>
  );
};

export default Register;

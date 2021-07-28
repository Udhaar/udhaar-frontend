import React, { useState } from "react";
import PasswordInput from "../components/form/PasswordInput";
import TextInput from "../components/form/TextInput";
import LargeButton from "../components/buttons/LargeButton";
import { Link } from "react-router-dom";
import AccentedLink from "../components/typography/AccentedLink";
import SecondaryLogo from "../components/Images/SecondaryLogo";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <div className="min-h-screen w-full bg-primary flex flex-col flex-shrink-0 flex-grow-0 items-center py-20 px-5">
      <SecondaryLogo />
      <p class="text-xl mt-2 text-secondary">Debt management made easy</p>
      <form
        action=""
        className="bg-secondary flex flex-col px-8 pt-8 pb-3 rounded-lg text-gray-800 mt-10"
      >
        <div className="flex flex-col md:flex-row md:gap-2">
          <TextInput
            value={lastName}
            setValue={setLastName}
            placeholder="First Name"
          />
          <TextInput
            value={firstName}
            setValue={setFirstName}
            placeholder="Last Name"
          />
        </div>
        <TextInput value={email} setValue={setEmail} placeholder="Email" />
        <PasswordInput
          value={password}
          setValue={setPassword}
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

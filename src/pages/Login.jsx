import React, { useState } from "react";
import PasswordInput from "../components/form/PasswordInput";
import TextInput from "../components/form/TextInput";
import LargeButton from "../components/buttons/LargeButton";
import { Link } from "react-router-dom";
import AccentedLink from "../components/typography/AccentedLink";
import SecondaryLogo from "../components/Images/SecondaryLogo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="min-h-screen w-full bg-primary flex flex-col flex-shrink-0 flex-grow-0 items-center py-20 px-5">
      <SecondaryLogo />
      <p class="text-xl mt-2 text-secondary">Debt management made easy</p>
      <form
        action=""
        className="bg-secondary flex flex-col px-8 pt-8 pb-3 rounded-lg text-gray-800 mt-10"
      >
        <TextInput value={email} setValue={setEmail} placeholder="Email" />
        <PasswordInput
          value={password}
          setValue={setPassword}
          placeholder="Password"
        />
        <LargeButton
          text="Login"
          widthClass="bg-primary text-black font-bold hover:text-secondary transition duration-500"
        />
        <span className="block text-center mt-2 text-white">
          Don't have an account?{" "}
          <AccentedLink path="/register" text="Create Account" />
        </span>
      </form>
    </div>
  );
};

export default Login;

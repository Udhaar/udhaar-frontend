import React, { useState } from "react";
import PasswordInput from "../components/form/PasswordInput";
import TextInput from "../components/form/TextInput";
import LargeButton from "../components/buttons/LargeButton";
import AccentedLink from "../components/typography/AccentedLink";
import SecondaryLogo from "../components/Images/SecondaryLogo";
import { signin } from "../api/api";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signin(formData, []);
    if (response[0].status === 200) {
      localStorage.setItem("access_token", `Token ${response[1]["token"]}`);
      history.push("/transactions");
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen w-full bg-primary flex flex-col flex-shrink-0 flex-grow-0 items-center pt-20 px-5">
      <SecondaryLogo />
      <p className="text-xl mt-2 text-secondary">Debt management made easy</p>
      <form
        action=""
        className="bg-secondary flex flex-col px-8 pt-8 pb-3 rounded-lg text-gray-800 mt-10"
        onSubmit={(e) => handleSubmit(e)}
      >
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

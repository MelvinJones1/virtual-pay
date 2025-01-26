import React, { useContext, useEffect, useState } from "react";
import InputBox from "./Attributes.js/InputBox";
import Header from "./Attributes.js/Header";
import SubHeading from "./Attributes.js/SubHeading";
import Button from "./Attributes.js/Button";
import BottomWarning from "./Attributes.js/BottomWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NameContext } from "../DashboardProvider";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { updateName } = useContext(NameContext);

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded bg-white w-10/12 text-center p-2 h-max px-4">
          <Header label={"Sign Up"} />
          <SubHeading label={"Enter your Information  to create an account"} />
          <InputBox
            label={"First Name"}
            placeholder={"John"}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          ></InputBox>
          <InputBox
            label={"Last Name"}
            placeholder={"Doe"}
            onChange={(e) => {
              setlastName(e.target.value);
            }}
          ></InputBox>
          <InputBox
            label={"Email"}
            placeholder={"johndoe@gmail.com"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputBox
            label={"Password"}
            placeholder={"123456"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            onClick={async () => {
              const response = await axios.post(
                "https://ezpay-b69o.onrender.com/api/v1/user/signup",
                {
                  username: email,
                  firstName,
                  lastName,
                  password,
                },
              );
              localStorage.setItem("token", response.data.token);
              updateName(email[0].toUpperCase());
              navigate("/dashboard");
            }}
            label={"Sign Up"}
          />
          <BottomWarning
            label={"Already a user ?"}
            buttonText={"Sign In"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;

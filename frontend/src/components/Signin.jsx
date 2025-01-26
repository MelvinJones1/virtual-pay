import React, { useContext, useState } from "react";
import Header from "./Attributes.js/Header";
import SubHeading from "./Attributes.js/SubHeading";
import InputBox from "./Attributes.js/InputBox";
import Button from "./Attributes.js/Button";
import BottomWarning from "./Attributes.js/BottomWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NameContext } from "../DashboardProvider";

const Signin = () => {
  const { name, updateName } = useContext(NameContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded bg-white w-5/6 text-center p-2 h-max px-4">
          <Header label={"Sign in"} />
          <SubHeading
            label={"Enter your credentials  to access your account"}
          />
          <InputBox
            label={"Email"}
            placeholder={"johndoe@gmail.com"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputBox
            label={"Password"}
            placeholder={"123456"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            label={"Sign in"}
            onClick={async () => {
              const response = await axios.post(
                "https://ezpay-b69o.onrender.com/api/v1/user/signin",
                {
                  username: email,
                  password,
                },
              );

              localStorage.setItem("token", response.data.token);
              updateName(email[0].toUpperCase());

              navigate("/dashboard");
            }}
          />
          <BottomWarning
            label={"New user?"}
            buttonText={"Sign Up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;

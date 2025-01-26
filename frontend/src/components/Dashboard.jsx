import React, { useEffect, useState } from "react";
import Appbar from "./Mainattributes/Appbar";
import Balance from "./Mainattributes/Balance";
import { Users } from "./Mainattributes/Users";
import axios from "axios";

const Dashboard = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    async function balance() {
      const response = await axios.get(
        "https://ezpay-b69o.onrender.com/api/v1/account/balance",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
      );

      setValue(response.data.balance);
      console.log(response.data.balance);
    }
    balance();
  }, [value]);
  return (
    <>
      <Appbar />
      <Balance value={Math.floor(value)} />
      <Users />
    </>
  );
};

export default Dashboard;

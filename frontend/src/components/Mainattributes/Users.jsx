import { useContext, useEffect, useState } from "react";
import Button from "../Attributes.js/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NameContext } from "../../DashboardProvider";

export const Users = () => {
  // Replace with backend call
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function search() {
      if (filter) {
        try {
          const token = localStorage.getItem("token"); // Assuming you store your token in localStorage
          const response = await axios.get(
            "https://ezpay-b69o.onrender.com/api/v1/user/bulk?filter=" + filter,
            {
              headers: {
                Authorization: `Bearer ${token}`, // Add your token here
              },
            },
          );
          if (filter == "") {
            setUsers([]);
          }

          setUsers(response.data.user);

          // Adjust this based on your API response structure
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      } else {
        setUsers([]); // Clear users when filter is empty
      }
    }
    search();
  }, [filter]);

  return (
    <>
      <div className="font-bold mt-6 text-lg m-5">Users</div>
      <div className="my-2 ml-4 mr-4">
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        ></input>
      </div>
      <div>
        {users.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    </>
  );
};

function User({ user }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between m-5">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button
          onClick={() => {
            navigate("/send?id=" + user._id + "&name=" + user.firstName);
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
}

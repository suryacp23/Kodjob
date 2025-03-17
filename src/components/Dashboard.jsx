import { useEffect, useState } from "react";
import JobList from "./JobList";
import { TbLogout } from "react-icons/tb";

export default function Dashboard() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.themuse.com/api/public/jobs?category=Software%20Engineering&page=1&descending=false"
    )
      .then((res) => res.json())
      .then((data) => setList(data?.results));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  };

  return (
    <div className="p-6">
      <div className="w-full flex justify-between items-center p-2 rounded-2xl ">
        <div className="text-xl font-extrabold">
          <span className="text-yellow-500 text-3xl font-extrabold">K</span>
          odJobs
        </div>
        <div className="flex justify-center items-center gap-2">
          {" "}
          <h1 className="text-2xl font-medium ">Hi, {currentUser.username}!</h1>
          <button
            onClick={handleLogout}
            className=" bg-yellow-300 text-black p-2 flex justify-center items-center rounded-xl cursor-pointer"
          >
            <TbLogout />
          </button>
        </div>
      </div>
      <JobList list={list} />
    </div>
  );
}

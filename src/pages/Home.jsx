import React, { useEffect, useState } from "react";
import Slot from "../components/Slot";
import supabase from "../supabase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        navigate("/login");
      }
    };
    getUser();
  });

  // useEffect(() => {
  //   const starCountRef = ref(db, "Slot/");
  //   onValue(starCountRef, (snapshot) => {
  //     const data = snapshot.val();
  //   });
  // });
  // useEffect(() => {
  //   const starCountRef = ref(db, "Slot/");
  //   onValue(starCountRef, (snapshot) => {
  //     const data = snapshot.val();
  //     const newdata = Object.keys(data).map((key) => ({
  //       id: key,
  //       ...data[key],
  //     }));
  //     setSlots(newdata)
  //   });
  // });

  const getUser = async () => {
    if (!user) {
      navigate("/login");
    }
  };

  const handleLogout = async () => {
    let { error } = await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <>
      <div className="flex justify-between py-5">
        <h1 className="text-3xl text-[#fff] font-bold  px-9 ">
          Admin Dashboard
        </h1>
        <button
          className="text-red-700 text-3xl px-9  hover:text-red-500"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="container">
        <Slot />
      </div>
    </>
  );
};

export default Home;

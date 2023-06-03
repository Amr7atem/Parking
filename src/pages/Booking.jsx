import React, { useState, useCallback, useEffect, useRef } from "react";
import { db } from "../lib/firebase";
import { ref, update } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";
import supabase from "../supabase";
import { useNavigate } from "react-router-dom";

import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { data } from "autoprefixer";

const Booking = (props) => {
  const [myValue, setValue] = useState(new Date());
  const [booking, setBooking] = useState({});
  const [value, onChange] = useState(new Date());
  const date = moment(value);
  const endDate = date.format("YYYY-MM-DD hh:mm a");

  const slotId = props.slot;
  const qrNumber = props.number;

  // State to store the selected option

  // console.log(selectedOption);
  const handleClick = async (e) => {
    const startDate = moment().format("YYYY-MM-DD hh:mm a");
    const randomNumber =
      Math.floor(Math.random() * 900000000000) + 100000000000;
    const qr = randomNumber.toString();
    if (endDate <= startDate) {
      return toast.error("can't book from the past ", {
        position: "top-center",
        autoClose: 2300,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setBooking({
      reserved: qr,
      startDate: startDate,
      endDate: endDate,
    });

    // Move the database update logic inside the callback function
    setBooking(async (booking) => {
      await update(ref(db, `/Data/${slotId}`), booking).catch((err) => {
        console.log(err);
      });
      await update(ref(db, `/Codes/${qrNumber - 1}`), { qr }).catch((err) => {
        console.log(err);
      });
    });
    toast.success("Slot reserved!", {
      position: "top-center",
      autoClose: 2300,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <div className="text-[#fff]">
        End Date{" "}
        <DateTimePicker
          className={"bg-[#fff]  text-[#001F2D]"}
          onChange={onChange}
          value={value}
        />
      </div>

      <div className="flex justify-center space-x-2 py-3">
        <button
          onClick={handleClick}
          type="submit"
          href="#_"
          className=" px-5 py-2  text-[#001F2D] bg-[#fff] rounded-full hover:bg-[#74858C] mx-0"
        >
          Book
        </button>
        <button
          onClick={() => {
            props.setShowForm(false);
          }}
          className=" px-5 py-2 text-[#001F2D] bg-[#fff] rounded-full hover:bg-[#74858C] mx-0"
        >
          Cancel
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Booking;

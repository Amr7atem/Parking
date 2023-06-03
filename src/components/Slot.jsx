import React, { useState, useEffect, useRef } from "react";
import "./Card.css";

import Booking from "../pages/Booking";
import { useNavigate } from "react-router-dom";
import { db } from "../lib/firebase";
import { ref, onValue, update, remove } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Qr from "../pages/Qr";

setOptions({
  theme: "ios",
  themeVariant: "light",
});

export default function Slot({ slot }) {
  const navigate = useNavigate();
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState([]);
  const [number, setNumber] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const cardRef = useRef(null);
  const descRef = useRef(null);
  const purchaseRef = useRef(null);

  function handleMouseMove(event) {
    const card = cardRef.current;
    const { offsetWidth: width, offsetHeight: height } = card;
    const { clientX, clientY } = event;
    const x = clientX - card.offsetLeft - width / 2;
    const y = clientY - card.offsetTop - height / 2;
    var mult = 40;
    setXRotation((y / height) * mult);
    setYRotation((x / width) * mult);
  }
  function handleMouseEnter() {
    const purchase = purchaseRef.current;
    const desc = descRef.current;

    purchase.style.transform = "translateZ(75px)";
    desc.style.transform = "translateZ(75px)";
  }
  function handleMouseLeave() {
    setXRotation(0);
    setYRotation(0);

    const purchase = purchaseRef.current;

    purchase.style.transform = "translateZ(0px)";
  }

  useEffect(() => {
    const starCountRef = ref(db, "Data/");
    const handleSnapshot = (snapshot) => {
      const data = snapshot.val();

      const newdata = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setSlots(newdata);

      console.log(newdata);
    };

    // Attach the event listener to the reference
    onValue(starCountRef, handleSnapshot);

    // Clean up the event listener when component unmounts
  }, []); // Add an empty dependency array to run effect only once during mount and unmount
  let empty = slots.filter((slot) => slot.reserved === "0");

  return (
    <>
      {slots.map((slot) => (
        <div
          key={slot.id}
          className={"card bg-[#FFF]"}
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h1 className="title"> {slot.id}</h1>
          {slot.reserved !== "0" ? (
            <p ref={descRef}>Full Until {slot.endDate}</p>
          ) : (
            <p ref={descRef}>Empty</p>
          )}

          <div className="button-box" ref={purchaseRef}></div>
          <button
            className="purchase "
            onClick={() => {
              setShowForm((show) => !show) && console.log("dd");
              setSelectedSlot(slot.id);
              setNumber(slot.slot);
            }}
          >
            Edit
          </button>
          <button
            className="purchase "
            onClick={async () => {
              setSelectedSlot(slot.id);
              setNumber(slot.slot);
              await update(ref(db, `/Data/${slot.id}`), {
                startDate: "",
                endDate: "",
                reserved: "0",
              });
              await remove(ref(db, `/Codes/${slot.slot - 1}`)).catch((err) => {
                console.log(err);
              });

              toast.success("Deleted Successfully!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            }}
          >
            Delete Booking
          </button>
        </div>
      ))}

      {showForm ? (
        <div>
          <Booking
            data={empty}
            setShowForm={setShowForm}
            slot={selectedSlot}
            number={number}
          />
          <Qr number={number} />
        </div>
      ) : null}
    </>
  );
}

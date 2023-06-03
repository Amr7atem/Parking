import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import { db } from "../lib/firebase";
import { onValue, ref } from "firebase/database";
function Qr(props) {
  const [text, setText] = useState("");
  const [qr, setQr] = useState("");
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const slotId = props.number;
  useEffect(() => {
    if (slotId) {
      // add conditional check
      const starCountRef = ref(db, `/Codes/${slotId - 1}`);
      const handleSnapshot = (snapshot) => {
        const data = snapshot.val();
        console.log(data);

        setQr(data);
      };

      // Attach the event listener to the reference
      onValue(starCountRef, handleSnapshot);
    }
  }, []);
  return (
    <div>
      {qr && qr.qr ? (
        <QRCode includeMargin={true} bgColor="#fff" size={300} value={qr.qr} />
      ) : null}
    </div>
  );
}
export default Qr;

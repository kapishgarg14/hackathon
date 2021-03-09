import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
import { userAtom, tokenAtom } from "../global/globalState";
import TopNav from "../components/TopNav";
//import Footer from "../components/Footer";


const DashboardDoc = ({ history }) => {
  const token = useRecoilValue(tokenAtom);
  const [user, setUser] = useRecoilState(userAtom);

  //State
  // const [symptoms, setSymptoms] = useState("");
  // const [medicine, setMedicine] = useState("");
  // const [comments, setComments] = useState("");
  // const [current, setCurrent] = useState("");

  // const givePrescription = (pID, objID) => {
  //   Axios.post(
  //     `${process.env.REACT_APP_API_URL}/prescription/give`,
  //     {
  //       patientId: pID,
  //       symptoms,
  //       medicine,
  //       objID,
  //       comments,
  //       date: Date.now(),
  //     },
  //     {
  //       headers: {
  //         Authorization: "Bearer " + token,
  //       },
  //     }
  //   )
  //     .then((res) => {
  //       console.log(res.data, "give pres");
  //       // setUser(res.data);
  //       // localStorage.setItem("user", JSON.stringify(res.data));
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  // useEffect(() => {
  //   Axios.get(`${process.env.REACT_APP_API_URL}/appointment/upcoming`, {
  //     headers: {
  //       Authorization: "Bearer " + token,
  //     },
  //   })
  //     .then((res) => {
  //       setUser(res.data);
  //       localStorage.setItem("user", JSON.stringify(res.data));
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  // const toggleCurrent = (_id) => {
  //   if (current === _id) {
  //     setCurrent("");
  //   } else {
  //     setCurrent(_id);
  //   }
  // };
  return (
    <>
      <TopNav />
      <div className="DashboardDoc">
        <div className="container">
          <h1>Welcome Doctor</h1>
          <h3>Your Appointments</h3>

        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default DashboardDoc;
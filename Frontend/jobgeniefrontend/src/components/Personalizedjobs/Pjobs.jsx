import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import "./Pjobs.scss";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../actions/user";
export default function Pjobs() {
  const [tjobs, setTjobs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const data = useSelector((state) => state.getuser);

  useEffect(() => {
    if (data && data.user && data.user.user && data.user.user.targetedjobs) {
      setTjobs(data.user.user.targetedjobs);
    }
  }, [data]);
  if (tjobs.length <= 0) {
    return <div>loading...</div>;
  }
  const actualArray = JSON.parse(tjobs[0]);

  const token = localStorage.getItem("token");
  return (
    <>
      {token ? (
        <div>
          {" "}
          <div className="Pjobs">
            <div className="jobs-page">
              <h1 className="page-heading">
                As per your resume, your personalized jobs
              </h1>
              <div className="card-container">
                {actualArray.map((job, index) => {
                  return <Cards key={index} job={job} />;
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Signup or Login First </div>
      )}
    </>
  );
}

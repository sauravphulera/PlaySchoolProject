import React from "react";
import "./school.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

const School = (props) => {
  const schoolData = props.school;
  return (
    <>
      <div className="school-card">
        <div className="school-inner-card">
          <div className="school-picture">
            <img src={require('../../../assets/kidzee.jpg')} height= "100%" width="100%" />
          </div>
          <div className="school">
            <div className="card-title">{schoolData.name}</div>
            <div className="card-subtitle">
              {schoolData?.address?.location}{" "}
              <LocationOnIcon style={{ color: "#229ABF", fontSize: "19px" }} />
              {schoolData?.address?.distance}
            </div>
            <div className="card-rating">
              <div className="rating-box">
                {schoolData.starRating} <span className="star"></span>
              </div>
              <div style={{ marginLeft: "13px" }}>
                ({schoolData?.rating} ratings)
              </div>
            </div>
            <div className="card-facilities">
              <div className="extra-info">
                <div style={{ fontSize: "0px" }}>
                  {schoolData?.extraCurrics ? <DoneIcon /> : <ClearIcon />}
                </div>
                <div>Extra currics</div>
              </div>
              <div className="extra-info">
                <div style={{ fontSize: "0px" }}>
                  {schoolData?.preSchool ? <DoneIcon /> : <ClearIcon />}
                </div>
                <div>Pre School</div>
              </div>
              <div className="extra-info">
                <div style={{ fontSize: "0px" }}>
                  {schoolData?.dayCare ? <DoneIcon /> : <ClearIcon />}
                </div>
                <div>Day Care</div>
              </div>
            </div>
            <div className="ameneties-container">
              <div
                className="ameneties"
                style={{
                  color: schoolData?.Amenities?.cctv ? "#11718F" : "gray",
                }}
              >
                <div style={{ display: "flex" }}>
                  <CameraAltIcon />
                </div>
                <div>CCTV</div>
              </div>
              <div
                className="ameneties"
                style={{
                  color: schoolData?.Amenities?.food ? "#11718F" : "gray",
                }}
              >
                <div style={{ display: "flex" }}>
                  <CameraAltIcon />
                </div>
                <div>Food</div>
              </div>
              <div
                className="ameneties"
                style={{
                  color: schoolData?.Amenities?.phoneUpdates
                    ? "#11718F"
                    : "gray",
                }}
              >
                <div style={{ display: "flex" }}>
                  <CameraAltIcon />
                </div>
                <div>Phone Updates</div>
              </div>
              <div
                className="ameneties"
                style={{
                  color: schoolData?.Amenities?.playArea ? "#11718F" : "gray",
                }}
              >
                <div style={{ display: "flex" }}>
                  <CameraAltIcon />
                </div>
                <div>Play Area</div>
              </div>
              <div
                className="ameneties"
                style={{
                  color: schoolData?.Amenities?.transport ? "#11718F" : "gray",
                }}
              >
                <div style={{ display: "flex" }}>
                  <CameraAltIcon />
                </div>
                <div>Transport</div>
              </div>
            </div>
            <div className="school-action-buttons">
              <button className="school--enquiry-btn">Send Enquiry</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default School;

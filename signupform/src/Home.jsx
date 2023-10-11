import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SuccessMessage from "./SuccessMessage";
import image from "../src/assets/images/image.jpg";
function Home() {
  const [message, setMessage] = useState(false);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="BackgroundDiv">
      {message ? (
        <SuccessMessage value={value} />
      ) : (
        <div className="BackgroundDiv">
          <div className="mainDiv">
            <div className="paragraphDiv">
              <h1 style={{ fontWeight: "bold", fontSize: "3em" }}>
                Stay Updated!
              </h1>
              <p style={{ marginTop: "10px" }}>
                Join 60.000+ product maganers receiving monthly <br /> updates
                on:
              </p>
              <div className="itemDiv">
                <div className="iconItemDiv">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                  >
                    <g fill="none">
                      <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                      <path
                        stroke="#FFF"
                        stroke-width="2"
                        d="M6 11.381 8.735 14 15 8"
                      />
                    </g>
                  </svg>
                  <p>Product discovery and building what matters</p>
                </div>
                <div className="iconItemDiv">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                  >
                    <g fill="none">
                      <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                      <path
                        stroke="#FFF"
                        stroke-width="2"
                        d="M6 11.381 8.735 14 15 8"
                      />
                    </g>
                  </svg>
                  <p>Measuring to ensure updates are a success</p>
                </div>
                <div className="iconItemDiv">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                  >
                    <g fill="none">
                      <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                      <path
                        stroke="#FFF"
                        stroke-width="2"
                        d="M6 11.381 8.735 14 15 8"
                      />
                    </g>
                  </svg>
                  <p>And much more!</p>
                </div>
              </div>
              <form className="formDiv">
                <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
                  Email address
                </div>
                <TextField
                  sx={{
                    ":focus": {
                      borderColor: "black",
                    },
                  }}
                  value={value}
                  onChange={handleChange}
                  type="email"
                  outlined
                  label="email@company.com"
                />
                <div className="ButtonDiv">
                  <Button
                    onClick={handleClick}
                    sx={{
                      ":hover": {
                        backgroundColor: "hsl(4, 100%, 67%)",
                      },
                      backgroundColor: " hsl(234, 29%, 20%)",
                      textTransform: "none",
                      width: "350px",
                    }}
                    size="large"
                    className="Button"
                    variant="contained"
                  >
                    Subscribe to monthly newsletter
                  </Button>
                </div>
              </form>
            </div>
            <div className="imgDiv">
              <img style={{ height: "550px" }} src={image} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

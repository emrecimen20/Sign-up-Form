import React from "react";
import Button from "@mui/material/Button";

function SuccessMessage({ value }) {
  return (
    <div>
      <div className="messageDiv">
        <div style={{ padding: "50px" }}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
            >
              <defs>
                <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stop-color="#FF6A3A" />
                  <stop offset="100%" stop-color="#FF527B" />
                </linearGradient>
              </defs>
              <g fill="none">
                <circle cx="32" cy="32" r="32" fill="url(#a)" />
                <path
                  stroke="#FFF"
                  stroke-width="4"
                  d="m18.286 34.686 8.334 7.98 19.094-18.285"
                />
              </g>
            </svg>
          </div>
          <div>
            <h1 style={{ fontSize: "3em" }}>
              Thanks for <br /> Subscribing!
            </h1>
          </div>
          <div>
            <p>
              A confirmation email has been sent to <br />{" "}
              <span style={{ fontWeight: "bold" }}>{value}</span> .Please open
              it and click <br /> the button inside to confirm your
              subscription.
            </p>
          </div>
          <div>
            <Button
              sx={{
                ":hover": {
                  backgroundColor: "hsl(4, 100%, 67%)",
                },
                color: "white",
                backgroundColor: " hsl(234, 29%, 20%)",
                textTransform: "none",
                width: "350px",
                marginTop: "15px",
                padding: "10px",
              }}
              className="Button"
            >
              Dismiss message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessMessage;

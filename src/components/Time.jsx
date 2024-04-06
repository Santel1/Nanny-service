import React, { useState } from "react";
import { Button, Popover, Typography } from "@mui/material";
import icons from "../images/icons.svg";

const TimePicker = ({ selectedTime, onChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "time-popover" : undefined;

  const handleTimeClick = (time) => {
    onChange(time);
    handleClose();
  };

  const renderTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        times.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return times.map((time) => (
      <Typography
        key={time}
        sx={{
          cursor: "pointer",
          padding: 1,
          fontFamily: "var(--font-family)",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "125%",
          color: "rgba(17, 16, 28, 0.3)",
          "&:hover": {
            color: "#000",
          },
        }}
        onClick={() => handleTimeClick(time)}
      >
        {time}
      </Typography>
    ));
  };

  return (
    <>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        style={{
          minWidth: "unset",
          padding: 0,
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <svg className="timeIcon" width="16" height="16 ">
          <use href={icons + "#icon-clock"}></use>
        </svg>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "12px",
            backgroundColor: "#fff",
            boxShadow: "0 20px 69px 0 rgba(0, 0, 0, 0.07)",
            height: "180px",
            width: "151px",
            fontFamily: "var(--font-family)",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "150%",
            color: "#11101c",
            padding: "10px",
            overflow: "auto",
            "&::-webkit-scrollbar": {
              width: "0px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent ",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "transparent ",
            },
          },
        }}
      >
        <Typography variant="body1" sx={{ padding: "10px" }}>
          Meeting time
        </Typography>
        <div>{renderTimeOptions()}</div>
      </Popover>
    </>
  );
};

export default TimePicker;

import React, { useEffect, useState } from "react";
import { TextField, Typography, Box, Button, Stack } from "@mui/material";
import "./CountdownTimer.css";
import NumberCard from "../NumberCard/NumberCard";
import { useMediaQuery } from "@mui/material";

const CountdownTimer = () => {
  const [targetDate, setTargetDate] = useState(
    localStorage.getItem("targetDate") || ""
  );
  const [timerObject, setTimerObject] = useState({});
  const [intervalId, setIntervalId] = useState(null);
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [message, setMessage] = useState("Set the timer...")

  // Use media query to check screen size
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    if (countdownStarted && targetDate) {
      const interval = setInterval(() => {
        const currentTime = new Date();
        const selectedDate = new Date(targetDate);
        const timeDifference = selectedDate - currentTime;

        if (timeDifference <= 0) {
          clearInterval(interval);
          localStorage.removeItem("targetDate");

          setTimerObject({});
          setMessage("Countdown completed! Set new timer.")
        } else {
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

          setTimerObject({ days, hours, minutes, seconds });
        }
      }, 1000);

      setIntervalId(interval);
    }
  }, [targetDate, countdownStarted]);

  const handleStartCountdown = () => {
    if (!countdownStarted) {
      localStorage.setItem("targetDate", targetDate);
      setCountdownStarted(true);
      // setTimerObject("Countdown started!");
      setMessage("Countdown started!");
    }
  };

  const handleCancelCountdown = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTimerObject({});
    setTargetDate("");
    setCountdownStarted(false);
    setMessage("Countdown Canceled! Set new Timer.");
    localStorage.removeItem("targetDate");
  };

  return (
    <>
      <Box className="countdown-wrapper" gap={5}>
        <Box className="title-box">
          <Typography sx={{ fontSize: 32, color: "#39AEBC" , fontWeight:"700"}}>
            Countdown Timer
          </Typography>
          <p >{message}</p>
        </Box>
        <input
          type="datetime-local"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
        />
        <Button
          variant="contained"
          className="button"
          sx={{
            backgroundColor: "#39AEBC",
            "&:hover": {
              backgroundColor: "#39AEBC",
            },
            fontWeight:"600"
          }}
          onClick={handleStartCountdown}
        >
          Start Timer
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={handleCancelCountdown}
          sx={{fontWeight:"600"}}
        >
          Cancel
        </Button>

        <Stack
          direction={isSmallScreen ? "column" : "row"}
          spacing={2}
          sx={{ padding: "2px" }}
        >
          <NumberCard entity="days" value={timerObject.days || 0} />
          <NumberCard entity="hours" value={timerObject.hours || 0} />
          <NumberCard entity="minutes" value={timerObject.minutes || 0} />
          <NumberCard entity="seconds" value={timerObject.seconds || 0} />
        </Stack>
      </Box>
    </>
  );
};

export default CountdownTimer;

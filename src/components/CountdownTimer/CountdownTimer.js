import React, { useEffect, useState } from "react";
import { TextField, Typography, Box, Button, Stack } from "@mui/material";
import "./CountdownTimer.css";

const CountdownTimer = () => {
  const [datetime, setDatetime] = useState(0);
  const [timerObject, setTimerObject] = useState({});
  const [timerRunning, setTimerRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    console.log("datetime: ", datetime);
    // console.log("timerObject: ", timerObject);
  }, [datetime, timerObject, timerRunning, intervalId]);

  /**
   * This function will count {days, hours, minutes, seconds } between two dates.
   * @param {string} date1
   * @param {string} date2
   * @returns {object} {days, hours, minutes, seconds }
   */
  const calculateTimeDifference = (date1, date2) => {
    let seconds = Math.floor((date1 - date2) / 1000);

    let days = Math.floor(seconds / (24 * 60 * 60));

    seconds = seconds % (24 * 60 * 60);

    let hours = Math.floor(seconds / (60 * 60));

    seconds = seconds % (60 * 60);

    let minutes = Math.floor(seconds / 60);

    seconds = seconds % 60;

    return { days, hours, minutes, seconds };
  };

  /**
   * This function will insure entered date is correct and within our bounds
   * @param {string} dateTime
   *
   */
  const handleSetDatetime = (dateTime) => {
    if (!timerRunning) {
      let timerDate = new Date(dateTime);
      let currDate = new Date();

      let diffInDays = Math.floor(
        (timerDate - currDate) / (1000 * 24 * 60 * 60)
      );

      let diffInSeconds = Math.floor((timerDate - currDate) / 1000);

      if (diffInSeconds > 0 && diffInDays <= 100) {
        setDatetime(dateTime);

        let { days, hours, minutes, seconds } = calculateTimeDifference(
          timerDate,
          currDate
        );

        setTimerObject({ days, hours, minutes, seconds });
      } else {
        console.log("Enter valid date.");
      }

      // console.log("timerDate: ", timerDate);
      // console.log("currDate: ", currDate);
    }
  };

  /**
   * This function updates the timerObject
   */
  const updateTimerObject = () => {
    let timerDate = new Date(datetime);
    let currDate = new Date();

    let { days, hours, minutes, seconds } = calculateTimeDifference(
      timerDate,
      currDate
    );

    setTimerObject({ days, hours, minutes, seconds });
  };

  const cancelTimer = () => {
    // setTimerObject({days:0,hours:0,minutes:0,seconds:0});
    clearInterval(intervalId);
    setDatetime(0);
    setTimerObject({});
    setTimerRunning(false);
    setIntervalId(null);
  };

  /**
   * This function will start the timer.
   */
  const handleStartTimer = () => {
    if (datetime!==0) {
      console.log("timerObject: ", timerObject);

      // Set the interval (in milliseconds)
      const interval = 1000;
      setTimerRunning(true);
      // Run the function at the specified interval
      const currIntervalId = setInterval(updateTimerObject, interval);
      setIntervalId(currIntervalId);

      let timerDate = new Date(datetime);
      let currDate = new Date();

      setTimeout(() => {
        clearInterval(intervalId);
        cancelTimer();
      }, timerDate - currDate);
    }
  };

  return (
    <Box className="countdown-wrapper" gap={5}>
      <Typography sx={{ fontSize: 32, color: "#39AEBC" }}>
        Countdown Timer
      </Typography>
      <TextField
        label="Select Date and Time"
        type="datetime-local"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => handleSetDatetime(e.target.value)}
      />
      <Button
        variant="contained"
        className="button"
        sx={{
          backgroundColor: "#39AEBC",
          "&:hover": {
            backgroundColor: "#39AEBC",
          },
        }}
        onClick={handleStartTimer}
      >
        Start Timer
      </Button>
      <Button
        variant="outlined"
        className="button"
        sx={{
          backgroundColor: "#39AEBC",
          "&:hover": {
            backgroundColor: "#39AEBC",
          },
        }}
        onClick={cancelTimer}
      >
        Cancel
      </Button>

      <Stack direction="row" spacing={2}>
        <h3>{timerObject.days}</h3>
        <h3>{timerObject.hours}</h3>
        <h3>{timerObject.minutes}</h3>
        <h3>{timerObject.seconds}</h3>
      </Stack>
    </Box>
  );
};

export default CountdownTimer;

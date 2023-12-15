import React, { useEffect, useState } from "react";
import "../App.css";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
  Flex,
  Button,
  Heading,
  TagLabel,
} from "@chakra-ui/react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
ChartJS.register(ArcElement, Tooltip, Legend);
const Calculator = () => {
  const [annualInstalmentAmount, setAnnualInstalmentAmount] = useState(10000);
  const [totalNumberOfYears, setTotalNumberOfYears] = useState(15);
  const [annualInterestRate, setAnnualInterestRate] = useState(7.1);
  const [totalInvestmentAmount, setTotalInvestmentAmount] = useState(0);
  const [maturityValue, setMaturityValue] = useState(10);
  const [totalInterest, setTotalInterest] = useState(10);

  // Function to calculate and return updated chart data
  const handleClick = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/calculate`, {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFrYXNoMzEwNkBnYW1pbC5jb20iLCJpYXQiOjE3MDI2NTI5NTN9.A0ewra_-mK9vFbm7VbwUVHM_NcvWxRtRB1aiOWnRHvU",
        },
        params: {
          annualInstalmentAmount,
          annualInterestRate,
          totalNumberOfYears,
        },
      });
      const data = res.data;

      setTotalInvestmentAmount(data.totalInvestmentAmount);
      setTotalInterest(data.totalInterestGained);
      setMaturityValue(data.totalMaturityValue
        );
      console.log(res.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log(totalInterest, maturityValue);
  const data = {
    labels: ["Total Interest", "TotalMaturity Value"],
    datasets: [
      {
        data: [totalInterest, maturityValue],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
      },
    ],
  };
  const options = {};
  //console.log(totalNumberOfYears,annualInstalmentAmount)
  return (
    <div>
      <Heading>Calculator</Heading>
      <Flex>
        <Box width={"50%"}>
          <Box width={"80%"} m={4}>
            <div className="details">
              <div>Yearly investment</div>
              <div>{annualInstalmentAmount}</div>
            </div>

            <Slider
              aria-label="slider-ex-2"
              colorScheme="pink"
              defaultValue={10000}
              onChange={(e) => setAnnualInstalmentAmount(e)}
              min={500}
              max={150000}
              step={1000}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <div className="details">
              <div> Time Period</div>
              <div>{totalNumberOfYears}</div>
            </div>

            <Slider
              aria-label="slider-ex-2"
              colorScheme="pink"
              defaultValue={15}
              min={15}
              max={50}
              onChange={(e) => setTotalNumberOfYears(e)}
              step={1}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <div className="details">
              <div> Rate of Interest</div>
              <div>7.1%</div>
            </div>
          </Box>
          <Button onClick={handleClick}>Calculate</Button>
        </Box>

        <div style={{ padding: "20px", width: "300px" }}>
          <Pie data={data} options={options}></Pie>
        </div>
      </Flex>
    </div>
  );
};

export default Calculator;

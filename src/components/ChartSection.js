// ChartSection.js
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import styled from "styled-components";

// Styled components for the layout
const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 40%;
  padding: 20px;
  text-align: left;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const ChartContainer = styled.div`
  flex: 1;
  max-width: 55%;
  min-width: 300px;
  padding: 10px;
  background: linear-gradient(145deg, #fdf5ff, #e6f3ff); /* Gradient border */
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  > div {
    background-color: #ffffff; /* White background inside the gradient */
    border-radius: 10px;
    padding: 10px;
  }
`;

const Heading = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.5;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const List = styled.ul`
  font-size: 16px;
  color: #555;
  line-height: 1.8;
  list-style-type: disc;
  padding-left: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ChartSection = () => {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://viaje.ai/mainvia_api/")
      .then((response) => {
        // Assuming the API returns the data in the structure you provided
        const data = response.data.data.map((item) => ({
          date: item["0"],
          viaBookingCount: item["1"],
          mainBookingCount: item["2"],
        }));
        setChartData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const chartOptions = {
    chart: {
      type: "column", // Column chart for vertical bars
      height: "500px", // Set the height of the chart
      backgroundColor: "#f9f9f9", // Light background color
    },
    title: {
      text: "Booking Data Comparison",
      style: {
        fontSize: "24px",
        color: "#333",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: chartData.map((data) => data.date), // Dates on the X-axis
      title: {
        text: "Date",
        style: {
          fontSize: "16px",
          color: "#333",
        },
      },
      labels: {
        style: {
          fontSize: "14px",
          color: "#333",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Booking Count",
        style: {
          fontSize: "16px",
          color: "#333",
        },
      },
      labels: {
        style: {
          fontSize: "14px",
          color: "#333",
        },
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.3,
        borderWidth: 0,
        groupPadding: 0.1, // Adjust this to create space between the bars
        pointWidth: 35, // Make the bars wider
      },
    },
    series: [
      {
        name: "Via Count",
        data: chartData.map((data) => data.viaBookingCount),
        color: "#ADD8E6", // Light blue color
      },
      {
        name: "Main Count",
        data: chartData.map((data) => data.mainBookingCount),
        color: "#90EE90", // Light green color
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 600, // Adjust chart size for smaller screens
          },
          chartOptions: {
            chart: {
              height: "400px",
            },
          },
        },
      ],
    },
  };

  return (
    <Section>
      <TextContainer>
        <Heading>Booking Data Analysis</Heading>
        <Paragraph>
          The following analysis provides insight into the booking trends for
          both the Via platform and Main platform. The data visualized below
          highlights:
        </Paragraph>
        <List>
          <li>Daily booking trends for both platforms.</li>
          <li>A comparison of the "Via Booking Count" vs. "Main Booking Count."</li>
          <li>Clear insights into the platform usage patterns.</li>
        </List>
        <Paragraph>
          This chart is designed to make it easier for decision-makers to
          identify which platform is performing better and to plan future
          strategies accordingly.
        </Paragraph>
      </TextContainer>

      <ChartContainer>
        {isLoading ? (
          <p>Loading chart...</p>
        ) : (
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        )}
      </ChartContainer>
    </Section>
  );
};

export default ChartSection;

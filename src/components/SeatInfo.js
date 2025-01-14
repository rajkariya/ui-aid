import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Styled Components
const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
  color: #333;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 50px;
  width: 100%;
  max-width: 1200px;
`;

const LeftSection = styled.div`
  flex: 1;
  max-width: 500px;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: #555;
`;

const Checklist = styled.ul`
  list-style-type: none;
  padding: 0;
  font-size: 18px;
  color: #555;

  li {
    margin-bottom: 15px;

    &:before {
      content: '✔';
      margin-right: 10px;
      color: purple;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-top: 20px;

  img {
    position: absolute;
    top: -20px;
    left: 0;
    width: 120px;
    height: 120px;
    z-index: -1;
  }
`;

const TableWrapper = styled.div`
  flex: 1;
  max-width: 600px;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 18px;
  color: #333;

  th, td {
    border: 1px solid #ddd;
    text-align: center;
    padding: 15px;
  }

  th {
    background-color: #f4f4f4;
    font-weight: bold;
    font-size: 20px;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  td:nth-child(3) {
    color: ${props => (props.status === 'A' ? 'green' : 'red')};
    font-weight: bold;
  }
`;

const SeatInfo = () => {
  const [seatData, setSeatData] = useState([]);

  useEffect(() => {
    const fetchSeatData = async () => {
      try {
        const response = await axios.get('https://viaje.ai/seatinfo_api/');
        setSeatData(response.data.data);
      } catch (error) {
        console.error('Error fetching seat data:', error);
      }
    };

    fetchSeatData();
  }, []);

  return (
    <SectionWrapper>
      <Title>How it works</Title>
      <InfoContainer>
        <LeftSection>
          <Description>Enter your post's title & keyword</Description>
          <Checklist>
            <li>Include any SEO keywords you want to rank for</li>
            <li>Customize your copy with tone and perspective options</li>
            <li>Choose from 25+ languages</li>
          </Checklist>
          <ImageWrapper>
            <img src="/path/to/your/image.png" alt="Decorative Purple Circle" />
          </ImageWrapper>
        </LeftSection>
        <TableWrapper>
          <StyledTable>
            <thead>
              <tr>
                <th>SEAT</th>
                <th>PRICE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {seatData.map(({ seat_no, price, status }, index) => (
                <tr key={index}>
                  <td>{seat_no}</td>
                  <td>{price}</td>
                  <td>{status}</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </TableWrapper>
      </InfoContainer>
    </SectionWrapper>
  );
};

export default SeatInfo;

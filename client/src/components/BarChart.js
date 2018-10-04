import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  min-width: 40rem;
  > * + * {
    margin-top: 1rem;
  }
`;

const Bars = styled.div`
  display: flex;
  flex-direction: column;
  background: hsl(216, 29%, 90%);
  padding: 1rem;
  border-radius: .2rem;
  > * + * {
    margin-top: 0.2rem;
  }
  box-shadow: 0 .1rem .75rem 0 hsl(216, 29%, 0%, 0.3);
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

const Bar = styled.div.attrs({
  style: ({ color, widthValue }) => ({
    background: color,
    width: `${widthValue}%`,
  }),
})`
  display: flex;
  justify-content: start;
  height: 1rem;
  transition: 100ms ease all;
  border-radius: 0.15rem;
`;

const VoteCount = styled.label`
  font-size: 1rem;
  display: flex;
  align-content: center;
  align-items: center;
  margin-left: 1rem;
`;

const Heading = styled.h2`
  font-weight: bold;
  font-size: 1.25rem;
`;

const BarChart = ({ title, animals, keyVal }) => {
  const widthValue = Math.max(...animals.map((animal) => animal[keyVal]));
  return (
    <Wrapper>
      <Heading>{title}</Heading>
      <Bars>
        {animals.map((animal, index) => {
          const barWidth = Math.round((animal[keyVal] / widthValue) * 100);
          return (
            <Section key={index}>
              <Bar widthValue={barWidth} color={animal.color} />
              <VoteCount>{animal[keyVal]}</VoteCount>
            </Section>
          );
        })}
      </Bars>
    </Wrapper>
  );
};

export default BarChart;

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  min-width: 40rem;
  > * + * {
    margin-top: 0.25rem;
  }
`;

export const Section = styled.div`
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
  transition: 400ms cubic-bezier(0.38, -0.08, 0.41, 1.48) all;
  border-radius: 0.15rem;
`;

const VoteCount = styled.label`
  font-size: 1rem;
  display: flex;
  align-content: center;
  align-items: center;
  margin-left: 1rem;
`;

const Chart = ({ title, animals, keyVal }) => {
  const widthValue = Math.max(...animals.map((animal) => animal[keyVal]));
  return (
    <Wrapper>
      <h2>{title}</h2>
      {animals.map((animal, index) => {
        const barWidth = Math.round((animal[keyVal] / widthValue) * 100);
        return (
          <Section key={index}>
            <Bar widthValue={barWidth} color={animal.color} />
            <VoteCount>{animal[keyVal]}</VoteCount>
          </Section>
        );
      })}
    </Wrapper>
  );
};

export default Chart;

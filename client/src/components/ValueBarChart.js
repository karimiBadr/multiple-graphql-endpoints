import React, { Fragment } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  > * + * {
    margin-top: 1rem;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-height: 1rem;
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  align-content: flex-end;
  width: 50%;
`;

const Right = styled.div`
  width: 50%;
`;

const Bar = styled.div.attrs({
  style: ({ color, barWidth }) => ({
    background: color,
    width: `${barWidth}%`,
  }),
})`
  height: 1rem;
  transition: 100ms ease all;
  border-radius: 0.15rem;
`;

const Label = styled.label`
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h2`
  font-weight: bold;
  font-size: 1.25rem;
`;

const Bars = styled.div`
  display: flex;
  flex-direction: column;
  background: hsl(216, 29%, 90%);
  border-radius: .2rem;
  box-shadow: 0 .1rem .75rem 0 hsl(216, 29%, 0%, 0.3);
  padding: 1rem;
  > * + * {
    margin-top: 0.2rem;
  }
`;

const ValueBarChart = ({ animals }) => {
  const widthValue = Math.max(
    ...animals.map((animal) => {
      const val = animal.upvotes - animal.downvotes;
      return Math.abs(val);
    }),
  );
  return (
    <Wrapper>
      <Heading>Value</Heading>
      <Bars>
        {animals.map((animal, index) => {
          const val = animal.upvotes - animal.downvotes;
          const barWidth = (Math.abs(val) / widthValue) * 100;
          return (
            <Row key={index}>
              <Fragment>
                <Left>
                  <Bar color={animal.color} barWidth={val < 0 ? barWidth : 0} />
                </Left>
                <Label>{val}</Label>
                <Right>
                  <Bar color={animal.color} barWidth={val > 0 ? barWidth : 0} />
                </Right>
              </Fragment>
            </Row>
          );
        })}
      </Bars>
    </Wrapper>
  );
};

export default ValueBarChart;

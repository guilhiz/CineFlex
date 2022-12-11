import styled from "styled-components";
import { fallingScreen } from "../../styles/animations";
import c from "../../constants/colors"

let milliseconds = 0;
function time() {
  milliseconds += 50;
  return milliseconds + "ms";
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 375px;
  gap: 27px 46px;
  margin: 0px auto;
  padding: 100px 25px 35px;
  background-color: ${c.background};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  animation: ${fallingScreen} ${time};
  > h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #247a6b;
    margin-bottom: 25px;
    animation: ${fallingScreen} ${time};
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 374px;
  min-height: 110px;
  margin-bottom: 12px;
  animation: ${fallingScreen} ${time};
  > h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: ${c.text};
    margin-bottom: 14px;
    animation: ${fallingScreen} ${time};
  }
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  animation: ${fallingScreen} ${time};
  > li {
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: ${c.text};
    margin-bottom: 7px;
    animation: ${fallingScreen} ${time};
  }
`;

export const ButtonHome = styled.button`
  width: 225px;
  height: 42px;
  background: ${c.button};
  border-radius: 3px;
  cursor: pointer;
  border: none;
  margin-top: 55px;
  animation: ${fallingScreen} ${time};

  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${c.white};

  :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  :active {
    scale: 0.9;

    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

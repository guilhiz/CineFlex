import styled from "styled-components";
import { fallingScreen } from "../../styles/animations";
import c from "../../constants/colors";

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

  > h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #247a6b;
    margin-bottom: 25px;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 374px;
  min-height: 110px;
  margin-bottom: 12px;

  > h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: ${c.text};
    margin-bottom: 14px;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;

  > li {
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: ${c.text};
    margin-bottom: 7px;
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

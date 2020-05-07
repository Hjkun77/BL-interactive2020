import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  width: 90%;
`

export const Img = styled.img`
  float: right;
  margin-left: 16px;
  margin-top: -28px;
`

export const Center = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`

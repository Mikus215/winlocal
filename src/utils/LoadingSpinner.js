import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const LoadingSpinner = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #333333;

    &:after{
        content: '';
        width: 75px;
        height: 75px;
        border: 15px solid #dddddd;
        border-top-color: #009578;
        border-radius: 50%;
        animation: ${loading} 0.75s ease infinite;
    }
`
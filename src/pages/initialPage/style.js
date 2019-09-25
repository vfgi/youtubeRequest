import styled from 'styled-components'

export const Container = styled.div`
  background-color: #212121;
  display: grid;
  justify-self: center;
  align-self: center;
  width: 100%;
  height: 100%;
  .new {
    display: grid;
    grid-template-columns: 70px 1fr 70px;
    align-self: center;
    justify-self: center;
    animation: fontSize 3s infinite;
    font-weight: bold;
    font-family: cursive;
    color: #fff;
    span {
      align-self: center;
      justify-self: center;
    }
    img {
      align-self: center;
      animation: App-logo-spin 3s infinite;
      width: 60px;
    }
  }

  @keyframes fontSize {
    0% {
      font-size: 12px;
    }

    50% {
      font-size: 50px;
    }

    100% {
      font-size: 12px;
    }
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
`

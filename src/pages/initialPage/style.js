import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  .input {
    display: grid;
    width: 100%;
    padding: 20px;
    background-color: #fff;
    grid-template-columns: 1fr 60px;
    font-weight: bold;
    font-family: cursive;
    color: #fff;
    padding-top: 300px;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 60px 1fr;
    }
    &.animate {
      animation: height 2s;
      padding-top: 50px;
    }
    button {
      cursor: pointer;
      align-items: center;
      background-color: #ededed;
      outline: none;
      border: none;
      width: 60px;
      height: 40px;
      border: 1px solid #ededed;
      border-radius: 0px 5px 5px 0px;
    }
    input {
      @media (min-width: 768px) {
        grid-column: 2;
      }
      width: 100%;
      justify-self: center;
      outline: none;
      border-radius: 5px 0px 0px 5px;
      border: 1px solid #ededed;
      height: 40px;
      background-color: rgba(255, 255, 255, 0.9);
      font-size: 16px;
      text-align: center;
      ::placeholder {
        opacity: 0.5;
      }

      @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 20px;
      }
    }
  }
  .infinite {
    background-color: #fff;
    height: 300;
    min-width: 100%;
    .template {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 20px;
      @media (max-width: 600px) {
        grid-template-columns: 1fr;
      }
    }
  }

  @keyframes height {
    from {
      padding-top: 300px;
    }
    to {
      padding-top: 50px;
    }
  }
`

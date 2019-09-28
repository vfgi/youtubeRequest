import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  padding: 30px;
  img {
    width: 100%;
    align-self: center;
    justify-self: center;
  }
  span:nth-child(2) {
    font-weight: bold;
    font-size: 16px;
    padding: 8px 0px 8px 0px;
  }
  span:nth-child(3) {
    font-weight: bold;
    font-size: 14px;
    padding: 8px 0px 8px 0px;
  }

  span:nth-child(4) {
    font-weight: normal;
    font-size: 14px;
    padding: 8px 0px 8px 0px;
  }
  a {
    align-self: flex-end;
  }
  button {
    outline: none;
    height: 30px;
    width: 100%;
    background-color: #bfcdb4;
    border: 1px solid #ededed;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
  }
`

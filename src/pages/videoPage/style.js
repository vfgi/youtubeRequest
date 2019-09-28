import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  padding: 20px;
  width: 100%;
  height: 100%;
  grid-template-rows: 40px 350px 50px 1fr 30px;
  @media (max-width: 768px) {
    grid-template-rows: 70px 350px 50px 1fr 40px;
  }
  background-color: #fff;
  .videoFrame {
    display: grid;
    justify-self: center;
    width: 100%;
    height: 100%;
    max-width: 800px;
    & iframe {
      justify-self: center;
      max-width: 100%;
      height: 100%;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
  .subtitle {
    display: grid;
    grid-template-columns: 4fr 1fr 1fr;
    grid-column-gap: 30px;
    align-self: center;
    justify-self: center;
    width: 100%;
    max-width: 750px;
    span {
      height: 100%;
      font-size: 14px;
      align-self: center;
      justify-self: start;
    }
    .action {
      width: 70%;
      display: flex;
      align-self: center;
      vertical-align: middle;
      justify-content: space-between;
      justify-self: end;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
  .title {
    width: 100%;
    align-self: center;
    justify-self: center;
    max-width: 760px;
  }
  span {
    align-self: center;
    justify-self: center;
    height: 30px;
    font-weight: bold;
    max-width: 800px;
    font-size: 16px;
  }
  .content {
    height: 100%;
    max-width: 750px;
    justify-self: center;
  }

  .views {
    display: grid;
    grid-template-columns: 10% 90%;
    width: 100%;
    height: 100%;
    max-width: 750px;
    justify-self: center;
    padding-top: 10px;
    span {
      align-self: center;
      justify-self: start;
      font-size: 14px;
      font-style: normal;
    }
  }
`

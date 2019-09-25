import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Content = styled.main`
  flex: 1;
  display: flex;
  overflow: hidden;
  background-color: #fafafa;

  .ScrollbarsCustom {
    /* height: 100%; */
    transition: all 0.5s ease;

    .ScrollbarsCustom-Wrapper {
      right: 5px !important;
    }

    .ScrollbarsCustom-Content {
      height: 100%;
      width: 100%;
    }

    .ScrollbarsCustom-Track {
      /* background-color: rgba(105, 189, 53, 0.3) !important; */
      background-color: #69bd3566 !important;
    }

    .ScrollbarsCustom-Thumb {
      background-color: #69bd35 !important;
    }

    .ScrollbarsCustom-TrackY {
      height: 100% !important;
      width: 5px !important;
      top: 0 !important;
    }

    .ScrollbarsCustom-TrackX {
      height: 5px !important;
      width: 100% !important;
      left: 0 !important;
    }

    &.full-width {
      margin-left: -180px;
    }

    &.full-width-checkout {
      margin-left: -210px;
      margin-right: -190px;
    }

    &.hide-sidebar-tab {
      margin-left: -210px;
    }

    &.hide-checkout-tab {
      margin-right: -190px;
    }

    @media (max-width: 768px) {
      margin-left: -285px;

      &.login {
        margin-left: 0;
      }
      &.hide-sidebar-tab {
        margin-left: -285px;
      }
      &.full-width {
        margin-left: -285px;
      }
    }
  }

  .checkout-tab {
    flex: 0 0 380px;
    /* overflow: auto; */

    @media (max-width: 768px) {
      background-color: #fff;
      position: absolute !important;
      margin: 0 auto !important;
      height: calc(100% - 60px) !important;
      /* width: 100% !important; */
      /* bottom: 0 !important; */
      /* border-radius: 8px; */
      /* left: 0 !important;
      right: 0 !important; */
      /* right: 50%; */
      /* flex: 1; */
      /* width: 300%; */
    }

    &.hidden {
      display: none;
    }

    &.hide-checkout-tab {
      transform: translateX(190px);

      @media (max-width: 768px) {
        padding: 28px 16px;
        transform: translateY(calc(100% - 40px));
      }
    }

    /* @media (max-width: 768px) {
      z-index: 10;
      padding: 28px 16px;
      min-width: 0;
    } */
  }
`

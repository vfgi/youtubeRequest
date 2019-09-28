import React from 'react'
function SearchIcon(props) {
  return (
    <>
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 22H23.41L22.86 21.45C24.82 19.18 26 16.23 26 13C26 5.82 20.18 0 13 0C5.82 0 0 5.82 0 13C0 20.18 5.82 26 13 26C16.23 26 19.18 24.82 21.45 22.87L22 23.42V25L32 34.98L34.98 32L25 22ZM13 22C8.03 22 4 17.97 4 13C4 8.03 8.03 4 13 4C17.97 4 22 8.03 22 13C22 17.97 17.97 22 13 22Z"
          fill={props.color}
        />
      </svg>
    </>
  )
}
export default SearchIcon

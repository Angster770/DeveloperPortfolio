import React from "react"
import { Typography, Grid } from "@mui/material"
import { styled } from "@mui/system"
import { RiMailFill } from "react-icons/ri"
import { IoChevronForward } from "react-icons/io5"

const ContactPageContainer = styled(Grid)`
  background-color: #fcfcf9;
  color: #1fb7fc;
  font-family: Comic Sans, monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0; /* Add margin above and beneath the component */
  font-size: 24px; /* Set desired font size */
  transition: transform 0.3s ease-in-out; /* Add smooth transition for sliding effect */

  /* Large screens */
  @media (min-width: 56.25rem) {
    /* Styles for screens 900px and above */
    flex-basis: 100%;
    max-width: 100%;
    margin: 4rem 0; /* Increase margin above and beneath the component */
  }

  &:hover {
    transform: translateY(-10px); /* Slide up slightly on hover */
  }
`

export const ContactPage = () => {
  return (
    <>
      <ContactPageContainer>
        <Typography style={{ fontFamily: "Helvetica Neue, sans-serif" }} variant="h4" gutterBottom>
          Contact Me
        </Typography>
        <a href="mailto:angster770@gmail.com">
          <Typography
            style={{
              color: "#1fb7fc",
              fontFamily: "Helvetica Neue, sans-serif",
            }}
          >
            Reach out to me at my email
            <IoChevronForward />
            <RiMailFill />
          </Typography>
        </a>
      </ContactPageContainer>
    </>
  )
}

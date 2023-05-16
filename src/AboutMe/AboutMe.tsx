import React from "react"
import { Typography, Paper, Grid } from "@mui/material"
import styled from "@emotion/styled"

const AboutMeContainer = styled(Grid)`
  background-color: #fcfcf9;
  color: #1fb7fc;
  font-family: Comic Sans MS, monospace;
  background-color: #fcfcf9;
  color: #1fb7fc;
  font-family: Comic Sans MS, monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem; /* Add margin-bottom for spacing */

  /* Large screens */
  @media (min-width: 56.25rem) {
    /* Styles for screens 900px and above */
    flex-basis: 100%;
    max-width: 100%;
    margin-bottom: 0; /* Remove margin-bottom for spacing */
  }
`

export const AboutMe: () => JSX.Element = () => {
  return (
    <>
      <AboutMeContainer>
        <Typography style={{ fontFamily: "Helvetica Neue, sans-serif" }} variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography style={{ fontFamily: "Helvetica Neue, sans-serif" }} variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus nec enim eleifend tristique. Nullam
          interdum vulputate metus,
        </Typography>
      </AboutMeContainer>
    </>
  )
}

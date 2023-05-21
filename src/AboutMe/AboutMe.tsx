import React, { useEffect } from "react"
import { Typography, Paper, Grid } from "@mui/material"
import styled from "@emotion/styled"
import { animateIntroSection } from "../LandingPage/MainPage"

const AboutMeContainer = styled(Grid)`
  background-color: #fcfcf9;
  color: #1fb7fc;
  font-family: proxima-nova, "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-top: 10rem;
  // margin-bottom: 8rem;
  padding-bottom: 10rem;
  font-size: 10rem /* Large screens */ @media (min-width: 56.25rem) {
    /* Styles for screens 900px and above */
    flex-basis: 100%;
    max-width: 100%;
    padding-top: 10rem;
  }
`

export const AboutMe: () => JSX.Element = () => {
  useEffect(() => {
    animateIntroSection(".about-me")
  }, [])
  return (
    <>
      <AboutMeContainer className="about-me">
        <Typography style={{ fontFamily: "Helvetica Neue, sans-serif" }} variant="h2" gutterBottom>
          About Me
        </Typography>
        <Typography style={{ fontFamily: "Helvetica Neue, sans-serif", padding: "1rem", maxWidth: "50%" }} variant="h4">
          I was born 1996 in Baltimore, Maryland. When not coding I enjoy other things like cooking, reading and
          practicing violin.
        </Typography>
      </AboutMeContainer>
    </>
  )
}

import React, { useEffect } from "react"
import { Typography, Paper, Grid } from "@mui/material"
import styled from "@emotion/styled"
import { animateIntroSection } from "../LandingPage/MainPage"

const AboutMeContainer = styled(Grid)`
  background-color: #fcfcf9;
  color: #333333;
  font-family: "Helvetica, Arial, sans-serif"
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10rem;
  // margin-bottom: 8rem;
  padding-bottom: 10rem;
  font-size: 10rem
   flex-basis: 100%;
    max-width: 100%;
    padding-top: 10rem;
   /* Large screens */ 
   @media (min-width: 56.25rem) {
    /* Styles for screens 900px and above */
    flex-basis: 100%;
    max-width: 100%;
    padding-top: 10rem;
  }
`

export const AboutMe: () => JSX.Element = () => {
  useEffect(() => {
    animateIntroSection(".about-me-class")
  }, [])
  return (
    <>
      <AboutMeContainer className="about-me-class" id="about-me-id">
        <Typography style={{ fontFamily: "Helvetica, Arial, sans-serif", padding: "1rem" }} variant="h2" gutterBottom>
          About Me
        </Typography>
        <Typography
          style={{ fontFamily: "Helvetica, Arial, sans-serif", padding: "1rem", maxWidth: "80%", lineHeight: "1.5" }}
          variant="h5"
        >
          My name is Menachem Angster, I am currently-based between New York City and Corvallis Oregon. I grew up in the
          Baltimore area and was educated both here in the United States and abroad. I studied React Typescript and
          spent time as an intern with Eval, supported by two seasoned mentors.
        </Typography>
      </AboutMeContainer>
    </>
  )
}

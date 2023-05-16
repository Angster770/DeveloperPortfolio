import React, { FC } from "react"
import styled from "styled-components"
import Grid from "@mui/material/Unstable_Grid2" // Grid version 2interface MainPageProps {}
import Avatar from "@mui/material/Avatar"
import { Typography, useMediaQuery, useTheme } from "@mui/material"
import { Navbar } from "./Navbar"
import ProfileImg from "../Imgs/ProfileImg.jpeg"
import Button from "@mui/material/Button"
import { ContactPage } from "../ContactPageFolder/ContactPage"
import { AboutMe } from "../AboutMe/AboutMe"

const Body = styled(Grid).attrs(() => ({
  container: true,
}))`
  /* add your styles here */
  margin: 0;
  padding: 0;
  height: calc(100vh - 64px); /* Subtract the height of the navbar from the viewport height */
  background-color: #fcfcf9;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Small screens */
  @media (max-width: 37.5rem) {
    /* Styles for screens up to 599px wide */
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  /* Medium screens */
  @media (min-width: 37.5rem) and (max-width: 56.25rem) {
    /* Styles for screens 600px to 899px wide */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* Large screens */
  @media (min-width: 56.25rem) {
    /* Styles for screens 900px and above */
    display: flex;

    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
`

export const IntroGrid = styled(Grid)`
  @media (min-width: 56.25rem) {
    /* Styles for screens 900px and above */
    flex-basis: 50%;
    max-width: 50%;
  }
`

const AvatarGrid = styled(Grid)`
  /* Large screens */
  @media (min-width: 56.25rem) {
    /* Styles for screens 900px and above */
    flex-basis: 50%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
  }
`

export const IntroParagraph = styled.div`
  background-color: #fcfcf9;
  color: #1fb7fc;
  font-family: Comic Sans MS, monospace;
  margin: auto;
  box-sizing: border-box;
  // background: linear-gradient(to bottom right, #2a6f97, #a1c4fd);

  /* Small screens */
  @media (max-width: 37.5rem) {
    /* Styles for screens up to 599px wide */
    align-self: center;
    margin: auto;
    height: 10rem;
    width: 100%;
    padding: 1.5rem;
  }
  /* Large screens */
  @media (min-width: 56.25rem) {
    /* Styles for screens 900px and above */
    height: 25rem;
    width: 25rem;
    max-width: 400px;
    margin-right: 1rem;
    font-size: 2rem;
  }
  /* Medium screens */
  @media (min-width: 37.5rem) and (max-width: 56.25rem) {
    /* Styles for screens 600px to 899px wide */
    height: 25rem;
    width: 25rem;
  }
`

export const MainPage: () => JSX.Element = () => {
  return (
    <>
      <Navbar />
      <Body
        container
        display="flex"
        justifyContent="center"
        rowSpacing={{ xs: 1, sm: 12, md: 3 }}
        columns={{ xs: 1, sm: 1, md: 2 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <IntroGrid xs={12} sm={6} md={4} style={{ flexDirection: "row" }}>
          <IntroParagraph>
            As a junior software engineer with 2 years of experience, I'm looking for opportunities to deliver front-end
            solutions that meet the unique needs of my clients.
          </IntroParagraph>
        </IntroGrid>
        <AvatarGrid xs={12} sm={6} md={2} container justifyContent="center" alignItems="center" direction="column">
          <Typography
            variant="caption"
            align="center"
            style={{ fontFamily: "Roboto Mono, monospace", color: "#1FB7FC" }}
          >
            This is me by the way
          </Typography>
          <Avatar sx={{ width: 340, height: 340 }} variant="square" alt="Remy Sharp" src={ProfileImg} />
          <Button
            variant="contained"
            style={{
              marginTop: "2rem",
              backgroundColor: "#1FB7FC",
              color: "#fcfcf9",
              borderRadius: "12px",
              textTransform: "none",
            }}
          >
            Hire Me
          </Button>
        </AvatarGrid>
        <ContactPage />
        <AboutMe />
      </Body>
    </>
  )
}

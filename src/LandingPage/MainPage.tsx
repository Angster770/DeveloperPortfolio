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
import { MyWork } from "../MyWork/MyWork"
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

const IntroGrid = styled(Grid)`
  /* Small screens */
  @media (max-width: 37.5rem) {
    height: 100vh;
  }
  /* Large screens */
  @media (min-width: 56.25rem) {
    /* Styles for screens 900px and above */
    // flex-basis: 50%;
    // max-width: 100%;
  }
`

const AvatarGrid = styled(Grid)`
  /* Large screens */
  @media (min-width: 56.25rem) {
    /* Styles for screens 900px and above */
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 6rem;
  }
`
const StyledAvatar = styled(Avatar)`
  width: 360px;
  height: 360px;

  box-shadow: 0 0 130px rgba(0, 0, 0, 0.3);
  /* Large screens */
  @media (min-width: 56.25rem) {
    /* Styles for screens 900px and above */
    // margin-top: 7rem;
  }
`
const IntroParagraph = styled.div`
  background-color: #fcfcf9;
  // color: #1fb7fc;
  // font-family: "In-House Edition", sans-serif";

  margin: auto;
  box-sizing: border-box;
  // background: linear-gradient(to bottom right, #2a6f97, #a1c4fd);

  /* Small screens */
  @media (max-width: 37.5rem) {
    /* Styles for screens up to 599px wide */
    align-self: center;
    margin: auto;
    width: 100%;
    padding: 1.5rem;
  }
  /* Large screens */
  @media (min-width: 56.25rem) {
    /* Styles for screens 900px and above */

    max-width: 400px;
    font-size: 2rem;
    padding: 1.5rem;
  }
  /* Medium screens */
  @media (min-width: 37.5rem) and (max-width: 56.25rem) {
    /* Styles for screens 600px to 899px wide */
  }
`

const SpeechBubble = styled.div`
  /* Common styles for both mobile and full screen */
  // color: #7fc5fd;
  // background: #7fc5fd;
  position: relative;
  padding: 10px;
  border-radius: 10px;
  margin: 50px auto;
  max-width: 320px;

  /* Styles for mobile */
  // @media (max-width: 768px) {
  //   &::before {
  //     content: "";
  //     position: absolute;
  //     bottom: -40px;
  //     left: 50%;
  //     transform: translateX(-50%);
  //     border-width: 40px 20px 0;
  //     border-style: solid;
  //     border-color: #7fc5fd transparent transparent;
  //   }

  /* Styles for full screen */
  // @media (min-width: 769px) {
  //   &::after {
  //     content: "";
  //     position: absolute;
  //     top: 50%;
  //     right: -25rem;
  //     transform: translateY(-50%);
  //     border-width: 20px 0 20px 400px;
  //     border-style: solid;
  //     border-color: transparent transparent transparent #7fc5fd;
  //   }
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
        columns={{ xs: 1, sm: 1, md: 1 }}
        columnSpacing={{ xs: 1, sm: 1, md: 1 }}
      >
        <IntroGrid xs={12} sm={6} md={4} style={{ flexDirection: "row" }}>
          <SpeechBubble>
            <IntroParagraph
              style={{
                padding: "1rem",
                fontSize: "1rem",
                fontFamily: "'VTCSundaykomixcaps', sans-serif",
                lineHeight: "1.5",
              }}
            >
              Hi, <br /> I am a junior software engineer with 2 years of experience, I'm looking for opportunities to
              deliver front-end solutions that meet the unique needs of my clients.
            </IntroParagraph>
          </SpeechBubble>
          <AvatarGrid xs={12} sm={6} md={2} container justifyContent="center" alignItems="center" direction="column">
            <StyledAvatar sx={{ width: 340, height: 340 }} variant="circular" alt="Remy Sharp" src={ProfileImg} />
            <a href="mailto:angster770@gmail.com" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                style={{
                  marginTop: "2rem",
                  backgroundColor: "#1FB7FC",
                  color: "#fcfcf9",
                  borderRadius: "12px",
                  textTransform: "none",
                  fontFamily: "'VTCSundaykomixcaps', sans-serif",
                }}
              >
                Let's Talk
              </Button>
            </a>
          </AvatarGrid>
        </IntroGrid>

        <AboutMe />
        <MyWork />
      </Body>
    </>
  )
}

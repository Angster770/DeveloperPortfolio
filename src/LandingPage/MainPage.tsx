import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import styled from "styled-components"
import Grid from "@mui/material/Unstable_Grid2" // Grid version 2interface MainPageProps {}
import Avatar from "@mui/material/Avatar"
import { Typography, useMediaQuery, useTheme } from "@mui/material"
import { Navbar } from "./Navbar"
import ProfileImg from "../Imgs/ProfileImg.jpeg"
import Button from "@mui/material/Button"
import { AboutMe } from "../AboutMe/AboutMe"
import { MyWork } from "../MyWork/MyWork"
import { Footer } from "../Footer/Footer"
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
  background-color: #fcfcf9;
  display: flex;

  // opacity: 0;
  // transition: opacity 0.5s ease;

  /* Small screens */
  @media (max-width: 37.5rem) {
    // height: 100vh;
    flex-direction: column;
  }
  /* Medium screens */
  @media (min-width: 37.5rem) and (max-width: 56.25rem) {
    /* Styles for screens 600px to 899px wide */
    width: -webkit-fill-available;
  }
  /* Large screens */
  @media (min-width: 56.25rem) {
    /* Styles for screens 900px and above */
    margin-top: 12rem;
    flex-direction: row;
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
  width: 100%;
  max-width: 360px;
  height: auto;

  box-shadow: 0 0 130px rgba(0, 0, 0, 0.3);
  /* Large screens */
  @media (min-width: 56.25rem) {
    /* Styles for screens 900px and above */
    // margin-top: 7rem;
  }
`
const IntroParagraph = styled.div`
  background-color: #fcfcf9;
  padding: 1rem;

  line-height: 1.5;
  position: relative;
  padding-bottom: 10px;
  border-radius: 10px;
  // max-width: 320px;
  margin: auto;
  box-sizing: border-box;

  /* Small screens */
  @media (max-width: 37.5rem) {
    /* Styles for screens up to 599px wide */
    align-self: center;
    margin: 0;
    // margin-top: 4rem;
    // margin-bottom: 5rem;
    width: 100%;
    padding: 1.5rem;
  }
  /* Large screens */
  @media (min-width: 56.25rem) {
    /* Styles for screens 900px and above */
    fontsize: 10rem;
    max-width: 400px;
    font-size: 2rem;
    padding: 1.5rem;
  }
  /* Medium screens */
  @media (min-width: 37.5rem) and (max-width: 56.25rem) {
    /* Styles for screens 600px to 899px wide */
    width: 10rem;
  }
`
export const animateIntroSection = (elementSelector) => {
  const animate = (element) => {
    gsap.set(element, { opacity: 0, y: 20 })

    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 7,
      ease: "power3.out",
      stagger: 0.2,
    })
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target
        animate(element)
        observer.unobserve(element)
      }
    })
  })

  const elements = document.querySelectorAll(elementSelector)
  elements.forEach((element) => {
    observer.observe(element)
  })
}

const IntroSection = () => {
  useEffect(() => {
    animateIntroSection(".intro-grid")
  }, [])

  return (
    <>
      <IntroGrid className="intro-grid">
        {/* <SpeechBubble> */}
        <IntroParagraph style={{ fontFamily: "Helvetica, Arial, sans-serif" }} className="intro-paragraph">
          Hi, <br /> I am looking for opportunities to deliver front-end solutions that meet the unique needs of my
          clients.
        </IntroParagraph>
        {/* </SpeechBubble> */}
        <AvatarGrid className="avatar-grid" container justifyContent="center" alignItems="center" direction="column">
          <StyledAvatar
            sx={{ width: 340, height: 340 }}
            variant="circular"
            alt="Remy Sharp"
            src={ProfileImg}
            className="avatar"
          />
          <a href="mailto:angster770@gmail.com" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{
                marginTop: "1rem",
                backgroundColor: "#1FB7FC",
                color: "#333333",
                borderRadius: "12px",
                textTransform: "none",
                fontFamily: "Helvetica, Arial, sans-serif",
                padding: "1rem",
              }}
            >
              Let's Talk
            </Button>
          </a>
        </AvatarGrid>
      </IntroGrid>
    </>
  )
}

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
        <IntroSection />
        <AboutMe />
        <MyWork />
        <Footer />
      </Body>
    </>
  )
}

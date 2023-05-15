import React, { FC } from "react"
import styled from "styled-components"
import Grid from "@mui/material/Unstable_Grid2" // Grid version 2interface MainPageProps {}
import Avatar from "@mui/material/Avatar"
import { Typography, useMediaQuery, useTheme } from "@mui/material"
import { Navbar } from "./Navbar"
import ProfileImg from "../Imgs/ProfileImg.jpeg"
import Button from "@mui/material/Button"

const Body = styled(Grid).attrs(() => ({
  container: true,
}))`
  /* add your styles here */
  margin: 0;
  padding: 0;
  height: calc(100vh - 64px); /* Subtract the height of the navbar from the viewport height */
  background-color: #fcfcf9;
  // &:before {
  //   content: "";
  //   top: 0;
  //   left: 0;
  //   height: 100%;
  //   width: 100%;
  //   background-color: rgba(0, 0, 0, 0.5);

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
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
      align-items: center;
    }
  }
`

const IntroParagraph = styled.div`
  background-color: #fcfcf9;
  color: #1fb7fc;
  font-family: Roboto Mono, monospace;
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
    padding: 4.5rem;
    marginbottom: 6rem;
  }
  /* Large screens */
  @media (min-width: 56.25rem) {
    /* Styles for screens 900px and above */
    height: 15rem;
    width: 15rem;
    // max-width: 400px;
    // margin-left: 10rem;
  }
  /* Medium screens */
  @media (min-width: 37.5rem) and (max-width: 56.25rem) {
    /* Styles for screens 600px to 899px wide */
    height: 25rem;
    width: 25rem;
    // margin-left: 10rem;
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
        <Grid container justifyContent="center" spacing={2}>
          <Grid xs={12} sm={6} md={4}>
            <IntroParagraph style={{ color: "#1FB7FC", marginBottom: "6rem" }}>
              As a junior software engineer with 2 years of experience, I'm looking for opportunities to deliver
              front-end solutions that meet the unique needs of my clients.
            </IntroParagraph>
          </Grid>
          <Grid xs={12} sm={6} md={2} container justifyContent="center" alignItems="center" direction="column">
            <Typography
              variant="caption"
              align="center"
              style={{ fontFamily: "Roboto Mono, monospace", color: "#1FB7FC" }}
            >
              This is me by the way
            </Typography>
            <Avatar sx={{ width: 240, height: 240 }} variant="square" alt="Remy Sharp" src={ProfileImg} />
            <Button
              variant="contained"
              style={{
                marginTop: "3rem",
                backgroundColor: "#1FB7FC",
                color: "#fcfcf9",
                borderRadius: "12px",
                textTransform: "none",
              }}
            >
              Hire Me
            </Button>
          </Grid>
        </Grid>
      </Body>
    </>
  )
}

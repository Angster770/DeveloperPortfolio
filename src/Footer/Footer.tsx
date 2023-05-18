import React, { useEffect, useState } from "react"
import { AppBar, BottomNavigation, Toolbar, Typography } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import styled from "styled-components"

const FooterContainer = styled(BottomNavigation)`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  backgroundcolor: #1fb7fc;
  display: flex;
  padding: 3rem;
  justifycontent: space-between;
  /* Small screens */
  @media (max-width: 37.5rem) {
    /* Styles for screens up to 599px wide */
    flex-direction: column;
  }

  /* Medium screens */
  @media (min-width: 37.5rem) and (max-width: 56.25rem) {
    /* Styles for screens 600px to 899px wide */
    flexdirection: row;
  }

  /* Large screens */
  @media (min-width: 56.25rem) {
    /* Styles for screens 900px and above */
    flexdirection: row;
  }
`

export const Footer = () => {
  return (
    <>
      <BottomNavigation
        showLabels
        style={{
          position: "relative",
          bottom: "0",
          width: "100%",
          height: "2.5rem",
          backgroundColor: "#1FB7FC",
          display: "flex",
          flexDirection: "row",
          padding: "3rem",
          justifyContent: "space-between",
        }}
      >
        <Typography align="center">
          <span>&#169;</span> Menachem Angster
        </Typography>
        <a href="https://github.com/Angster770/DeveloperPortfolio" target="_blank" rel="noopener noreferrer">
          <Typography align="center" variant="body1">
            <GitHubIcon />
            Check Out My Repo Here
          </Typography>
        </a>
      </BottomNavigation>
    </>
  )
}

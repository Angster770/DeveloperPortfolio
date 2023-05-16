import React from "react"
import { Typography, Paper, Grid } from "@mui/material"
import styled from "@emotion/styled"
import GitHubIcon from "@mui/icons-material/GitHub"

const MyWorkContainer = styled(Grid)`
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

export const MyWork: () => JSX.Element = () => {
  return (
    <>
      <MyWorkContainer>
        <Typography style={{ fontFamily: "Helvetica Neue, sans-serif" }} variant="h4" gutterBottom>
          My Work
        </Typography>
        <a href="https://github.com/Angster770/angster_portfolio" target="_blank" rel="noopener noreferrer">
          <Typography
            style={{
              textDecoration: "none",
              color: "#1fb7fc",
              fontFamily: "Helvetica Neue, sans-serif",
              padding: "1rem",
            }}
            variant="body1"
          >
            <GitHubIcon />
            Check Out My Repo Here
          </Typography>
        </a>
      </MyWorkContainer>
    </>
  )
}

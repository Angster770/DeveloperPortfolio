import React, { useEffect } from "react"
import { Typography, Paper, Grid } from "@mui/material"
import styled from "@emotion/styled"
import GitHubIcon from "@mui/icons-material/GitHub"
import { animateIntroSection } from "../LandingPage/MainPage"
import { createTheme, ThemeProvider } from "@mui/material"
import MenachemAngsterResume from "../PDF/MenachemAngsterResume.pdf"
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"

const theme = createTheme({
  typography: {
    fontFamily: "VTCSundaykomixcaps, sans-serif",
  },
})
const MyWorkContainer = styled(Grid)`
  background-color: #fcfcf9;
  color: #333333;
  font-family: proxima-nova, "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  width: -webkit-fill-available;

  /* Large screens */
  @media (min-width: 56.25rem) {
    /* Styles for screens 900px and above */
    flex-basis: 100%;
    margin-bottom: 0; /* Remove margin-bottom for spacing */
  }
`

export const MyWork: () => JSX.Element = () => {
  useEffect(() => {
    animateIntroSection(".my-work-container")
  }, [])
  return (
    <>
      <MyWorkContainer className="my-work-container" id="my-work">
        <Typography style={{ fontFamily: "VTCSundaykomixcaps, sans-serif" }} variant="h2">
          My Work
        </Typography>
        <ThemeProvider theme={theme}>
          <Grid
            style={{
              color: "#333333;",
              fontFamily: "VTCSundaykomixcaps, sans-serif",
              padding: "1rem",
              lineHeight: "3.5",
            }}
          >
            <Typography
              style={{
                fontFamily: "VTCSundaykomixcaps, sans-serif",
                padding: "1rem",
                maxWidth: "80%",
              }}
              variant="h5"
            >
              Experience:
            </Typography>
            <Typography style={{ fontFamily: "VTCSundaykomixcaps, sans-serif", fontSize: "smaller" }} variant="h6">
              Download My Resume
            </Typography>
            <Typography
              style={{
                color: "inherit",
                textDecoration: "none",
                fontFamily: "VTCSundaykomixcaps, sans-serif",
              }}
            >
              <a
                style={{ color: "inherit", textDecoration: "none" }}
                href={MenachemAngsterResume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PictureAsPdfIcon />
              </a>
            </Typography>
            <Typography style={{ fontFamily: "VTCSundaykomixcaps, sans-serif" }} variant="h6">
              Sept 2022 - Junior Software Engineer with Eval
            </Typography>

            <Typography>
              <ul>
                <li> Fixed frontend bugs, ensuring a smooth project execution and friendly user experience.</li>
                <li>Implemented Storybook, resulting in more efficient component development and styling process.</li>
                <li>
                  Created frontend components for the grading section, enhancing functionality and user interaction.
                </li>
                <li>
                  Designed components in alignment with GraphQL data schema, facilitating data integration and
                  manipulation.
                </li>
                <li>
                  Created frontend components for the grading section, enhancing functionality and user interaction.
                </li>
                <li>
                  Created frontend components for the grading section, enhancing functionality and user interaction.
                </li>
              </ul>
            </Typography>
            <Typography
              style={{
                fontFamily: "VTCSundaykomixcaps, sans-serif",
                padding: "1rem",
                maxWidth: "80%",
                lineHeight: "3.5",
              }}
              variant="h5"
            >
              Skills:
            </Typography>
            <Typography>
              <ul>
                <li>UI Implementation: Styled React components using TypeScript, adherening to Figma designs.</li>
                <li>
                  GraphQL: Worked with GraphQL to retrieve and manipulate data, designed and implemented GraphQL schemas
                  to fulfill project data.
                </li>
                <li>Debugging: Identified and resolved front-end bugs through a logical step-by-step process.</li>
                <li>
                  Collaboration Skills: Adaptable in working collaboratively with team members, ensuring successful
                  project outcomes through effective communication.
                </li>
              </ul>
            </Typography>
            {/* <GitHubIcon />
            Check Out My Repo Here */}
          </Grid>
        </ThemeProvider>
      </MyWorkContainer>
      {/* <a href="https://github.com/Angster770/DeveloperPortfolio" target="_blank" rel="noopener noreferrer"></a> */}
    </>
  )
}

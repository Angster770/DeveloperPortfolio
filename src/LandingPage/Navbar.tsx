import React, { FC } from "react"
import styled from "styled-components"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { GiHamburgerMenu } from "react-icons/gi"
import { Box, Breadcrumbs, useMediaQuery, Drawer, List, ListItem, ListItemText } from "@mui/material"
import { Link, animateScroll } from "react-scroll"

const StyledNavbar = styled.nav`
  background-color: #7fc5fd;
  color: #fcfcf9
  font-family:  "Helvetica, Arial, sans-serif";
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0.5rem;
  height: 4rem;
  @media (max-width: 767px) and (orientation: landscape) {
  /* CSS rules for phones in landscape mode */
  height: 5rem;
  padding: 0 1rem 2rem;
}
@media (min-width: 601px) and (max-width: 900px) {
  /* CSS rules for screens between 768px and 1920px width */
  /* Adjust the styles as per your requirements */
  /* Example styles */
  height: 4rem;
  padding: 0 2rem 4rem;
}

`

const MobileScreenBarContainer = styled("div")`
  align-items: center;
  display: flex;
  background-color: #7fc5fd;
  color: #fff;
  font-family: "Helvetica, Arial, sans-serif";
`
const HamburgerIcon = styled(GiHamburgerMenu)`
  @media (max-width: 400px) {
    margin-left: 5rem;
  }

  @media (min-width: 401px) {
    margin-left: 7rem;
  }
`
const LinkFullScreen = styled(Link)`
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s ease;
`
const LinkFullScreenText = styled.div`
  &:hover {
    transform: translateY(-1px);
  }
`
const MyName: FC = () => {
  return (
    <>
      <Typography
        variant="h6"
        component="div"
        sx={{
          color: "#333333",
          fontWeight: 600,
          fontSize: "1.5rem",
          maxWidth: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <Box>Menachem Angster</Box>
      </Typography>
    </>
  )
}

const FullScreenNavbar: FC = () => {
  return (
    <>
      <MyName />
      <Breadcrumbs style={{ color: "#333333", fontFamily: "Helvetica, Arial, sans-serif" }}>
        <LinkFullScreen
          to="about-me-id"
          smooth={true}
          duration={500}
          offset={0}
          color="inherit"
          href="#"
          underline="none"
        >
          <LinkFullScreenText> About Me</LinkFullScreenText>
        </LinkFullScreen>
        <Link
          style={{ color: "inherit", textDecoration: "none" }}
          to="my-work"
          smooth={true}
          duration={500}
          offset={0}
          color="inherit"
          href="my-work"
          underline="none"
        >
          <LinkFullScreenText>My Work</LinkFullScreenText>
        </Link>
      </Breadcrumbs>
    </>
  )
}

const MobileScreenBar: FC = () => {
  const [open, setOpen] = React.useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <MobileScreenBarContainer>
        <MyName />
        <Button onClick={handleToggle}>
          <HamburgerIcon size={28} />
        </Button>
        <Drawer
          anchor="right"
          open={open}
          onClose={handleClose}
          PaperProps={{ style: { backgroundColor: "#7fc5fd", color: "#fcfcf9" } }}
        >
          <List>
            <ListItem
              button
              onClick={(event) => {
                handleClose()
                event.preventDefault()
              }}
            >
              <ListItemText>
                <Link
                  to="about-me-id"
                  smooth={true}
                  duration={500}
                  offset={30}
                  color="inherit"
                  href="#"
                  underline="none"
                  style={{ color: "inherit", textDecoration: "none" }}
                  onClick={() => {
                    handleClose()
                    animateScroll.scrollTo("about-me-id", {
                      smooth: true,
                      duration: 500,
                      offset: -50,
                    })
                  }}
                >
                  About Me
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem button onClick={handleClose}>
              <ListItemText>
                <Link
                  to="my-work"
                  smooth={true}
                  duration={500}
                  offset={0}
                  color="inherit"
                  href="#"
                  underline="none"
                  style={{ color: "inherit", textDecoration: "none" }}
                  onClick={() => {
                    handleClose()
                    animateScroll.scrollTo("about-me-id", {
                      smooth: true,
                      duration: 500,
                      offset: -50,
                    })
                  }}
                >
                  My Work
                </Link>
              </ListItemText>
            </ListItem>
          </List>
          <div style={{ background: "#7fc5fd" }} />
        </Drawer>
      </MobileScreenBarContainer>
    </>
  )
}

export const Navbar: FC = () => {
  const isSmallScreen = useMediaQuery("(max-width: 37.5rem)")

  return (
    <>
      <StyledNavbar
        style={{
          color: "#fcfcf9",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexGrow: 1,
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        {isSmallScreen ? <MobileScreenBar /> : <FullScreenNavbar />}{" "}
      </StyledNavbar>
    </>
  )
}

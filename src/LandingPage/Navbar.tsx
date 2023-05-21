import React, { FC } from "react"
import styled from "styled-components"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { GiHamburgerMenu } from "react-icons/gi"
import { Box, Breadcrumbs, Link, useMediaQuery, Drawer, List, ListItem, ListItemText } from "@mui/material"
import { Link as LinkRouter } from "react-router-dom"

const StyledNavbar = styled.nav`
  background-color: #7fc5fd;
  color: #fcfcf9
  font-family: proxima-nova,"Helvetica Neue",Helvetica,Arial,sans-serif;
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

`

const MobileScreenBarContainer = styled("div")`
  align-items: center;
  display: flex;
  background-color: #7fc5fd;
  color: #fff;
  font-family: proxima-nova, "Helvetica Neue", Helvetica, Arial, sans-serif;
`
const HamburgerIcon = styled(GiHamburgerMenu)`
  @media (max-width: 400px) {
    margin-left: 5rem;
  }

  @media (min-width: 401px) {
    margin-left: 7rem;
  }
`

const MyName: FC = () => {
  return (
    <>
      <Typography
        variant="h6"
        component="div"
        sx={{
          color: "#fcfcf9",
          fontWeight: 600,
          fontSize: "1.5rem",
          maxWidth: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
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
      <Breadcrumbs style={{ color: "#fcfcf9" }}>
        <Link color="inherit" href="#" underline="none">
          About Me
        </Link>
        <Link color="inherit" href="#" underline="none">
          My Work
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
            <ListItem button onClick={handleClose}>
              <ListItemText>About Me</ListItemText>
            </ListItem>
            <ListItem button onClick={handleClose}>
              <ListItemText>My Work</ListItemText>
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
        }}
      >
        {isSmallScreen ? <MobileScreenBar /> : <FullScreenNavbar />}{" "}
      </StyledNavbar>
    </>
  )
}

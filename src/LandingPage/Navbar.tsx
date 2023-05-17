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
  font-family: "Helvetica Neue", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0 1rem .5rem;
`

const MobileScreenBarContainer = styled("div")`
  display: flex;
  // justify-content: flex-end;
  background-color: #7fc5fd;
  color: #fff;
  font-family: proxima-nova, "Helvetica Neue", Helvetica, Arial, sans-serif;
`
const HamburgerIcon = styled(GiHamburgerMenu)`
  margin-left: 5rem;
  // margin-right: auto;
  // justify-self: flex-end;
  // align-self: flex-end;
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
      <Breadcrumbs>
        <Link color="inherit" href="/contact" underline="none">
          <LinkRouter to="/contact">Contact</LinkRouter>
        </Link>
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
        <Drawer anchor="right" open={open} onClose={handleClose}>
          <List>
            <ListItem button onClick={handleClose}>
              <ListItemText>Contact</ListItemText>
            </ListItem>
            <ListItem button onClick={handleClose}>
              <ListItemText>About Me</ListItemText>
            </ListItem>
            <ListItem button onClick={handleClose}>
              <ListItemText>My Work</ListItemText>
            </ListItem>
          </List>
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

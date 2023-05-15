import React, { FC } from "react"
import styled from "styled-components"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import ClickAwayListener from "@mui/material/ClickAwayListener"
import Grow from "@mui/material/Grow"
import Paper from "@mui/material/Paper"
import Popper from "@mui/material/Popper"
import MenuItem from "@mui/material/MenuItem"
import MenuList from "@mui/material/MenuList"
import { GiHamburgerMenu } from "react-icons/gi"
import { Box, Breadcrumbs, Link, useMediaQuery } from "@mui/material"

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

const StyledMenuButton = styled(Button)`
  && {
    color: white;
    padding: 0.5rem;
    margin-left: auto;
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
          flexGrow: 1,
          maxWidth: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        <Box>Angster</Box>
      </Typography>
    </>
  )
}

const FullScreenNavbar: FC = () => {
  return (
    <>
      <MyName />
      <Breadcrumbs>
        <Link color="inherit" href="#" underline="none">
          Contact
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
  const anchorRef = React.useRef<HTMLButtonElement>(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === "Escape") {
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }

    prevOpen.current = open
  }, [open])
  return (
    <>
      <>
        <MyName />
        <StyledMenuButton
          ref={anchorRef}
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <GiHamburgerMenu size={28} />
        </StyledMenuButton>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>Contact</MenuItem>
                    <MenuItem onClick={handleClose}>My Work</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </>
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

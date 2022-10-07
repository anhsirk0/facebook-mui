import React, { useState } from "react";
import {
  AppBar,
  Badge,
  Box,
  Container,
  IconButton,
  InputBase,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccountMenu from "./AccountMenu";
import { Sidebar } from "../../components";

const Navbar = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.1),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.2),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
      display: "block",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "40ch",
      },
    },
  }));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isDrawerOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              paddingLeft: 0,
              paddingRight: 0,
            }}
          >
            <IconButton
              onClick={handleClick}
              aria-controls={isDrawerOpen ? "drawer" : undefined}
              aria-haspopup="true"
              aria-expanded={isDrawerOpen ? "true" : undefined}
              color="inherit"
              sx={{ display: { xs: "block", sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
              }}
            >
              facebook
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Stack direction="row" spacing={3} alignItems="center">
              <Badge color="error">
                <PeopleAltIcon />
              </Badge>
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
              <Badge badgeContent={2} color="error">
                <NotificationsIcon />
              </Badge>
              <AccountMenu />
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Sidebar isDrawerOpen={isDrawerOpen} handleClose={handleClose} />
    </>
  );
};

export default Navbar;

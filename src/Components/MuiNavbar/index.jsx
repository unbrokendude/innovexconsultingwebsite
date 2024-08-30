import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
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
    border: "1px solid #ced4da",
    borderRadius: 7,
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const pages = [
  { title: "Accueil", to: "/" },
  { title: "À propos", to: "/about" },
  { title: "Carrières", to: "/careers" },
  { title: "Notre équipe", to: "/consultants" },
];

function MuiNavbar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter") {
      const query = event.target.value.trim();
      if (query) {
        navigate(`/search?query=${encodeURIComponent(query)}`);
      }
    }
  };

  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <>
                {pages
                  .concat({ title: "Nous Contacter", to: "/contact" })
                  .map((page) => (
                    <MenuItem
                      key={page.title}
                      onClick={() => navigate(page.to)}
                    >
                      <Typography
                        sx={{ textAlign: "center", fontFamily: "Outfit" }}
                      >
                        {page.title}
                      </Typography>
                    </MenuItem>
                  ))}
              </>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <img
              src={logo}
              alt="Logo"
              className="logo"
              onClick={() => navigate("/")}
            />
          </Box>
          <Typography
            variant="p"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 600,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Innovex Consulting
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <img
              src={logo}
              alt="Logo"
              className="logo"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
          </Box>
          <Search sx={{ display: { xs: "none", md: "flex" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onKeyDown={handleSearchKeyDown}
            />
          </Search>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Box
            sx={{
              justifyContent: "flex-end",
              display: { xs: "none", md: "flex" },
            }}
          >
            <>
              {pages.map((page) => (
                <Button
                  key={page.title}
                  onClick={() => navigate(page.to)}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    textTransform: "initial",
                    mx: 2,
                    fontFamily: "Outfit",
                    fontWeight: 400,
                    fontSize: 16,
                  }}
                >
                  {page.title}
                </Button>
              ))}
              <Button
                onClick={() => navigate("/contact")}
                sx={{
                  my: 2,
                  color: "white",
                  background: "#0077b5",
                  display: "block",
                  textTransform: "capitalize",
                  fontFamily: "Outfit",
                  mx: 2,
                  borderRadius: 5,
                  px: 2,
                  fontSize: 16,
                }}
              >
                Nous contacter
              </Button>
            </>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MuiNavbar;

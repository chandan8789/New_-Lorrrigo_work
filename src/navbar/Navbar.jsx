import * as React from "react";
import "./navbar.css";

import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import icon1 from "../assets/navbar-img/icon1.png";
import icon11 from "../assets/navbar-img/icon11.png";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material";
import logo from "../images/image 5.png";
import { Link } from "react-router-dom";
import wallet from "../images/wallet.png";
import { navbarOpenContext } from "../App";

const drawerWidth = 210;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  backgroundColor: "red",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Navbar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [amount, setAmount] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { isNavbarOpen, setIsNavbarOpen } = React.useContext(navbarOpenContext);
  const [userInfo, setUserInfo] = React.useState([]);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const location = useLocation();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerOpen = () => {
    setIsNavbarOpen(true);
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setIsNavbarOpen(false);
    setOpen(false);
  };

  const ItemArr = [
    {
      home: "Home",
      icon: (
        <p
          className="nav-icon"
          style={{
            width: "40px",
            height: "40px",
            backgroundColor:
              location.pathname === "/"
                ? "rgba(255, 255, 255, 0.4)"
                : "rgba(255, 255, 255, 0.25)",
            borderRadius: "6px",
          }}
        >
          <img
            src={location.pathname === "/" ? icon1 : icon11}
            alt="icon"
            width="18px"
            height="18px"
            style={{ color: "white" }}
          />
        </p>
      ),
      url: "/",
    },
    {
      home: "Create Shipment",
      icon: (
        <p
          className="nav-icon"
          style={{
            width: "40px",
            height: "40px",
            backgroundColor:
              location.pathname === "/create-shipment"
                ? "rgba(255, 255, 255, 0.4)"
                : "rgba(255, 255, 255, 0.25)",
            borderRadius: "6px",
          }}
        >
          <i
            className="fa-solid fa-plus"
            style={{ color: "white", fontSize: "22px" }}
          ></i>
        </p>
      ),
      url: "/create-shipment",
    },
    {
      home: "Mange Address",
      icon: (
        <p
          className="nav-icon"
          style={{
            width: "40px",
            height: "40px",
            backgroundColor:
              location.pathname === "/manage-address"
                ? "rgba(255, 255, 255, 0.4)"
                : "rgba(255, 255, 255, 0.25)",
            borderRadius: "6px",
          }}
        >
          <i
            className="fa-solid fa-address-card"
            style={{ color: "white", fontSize: "22px" }}
          ></i>
        </p>
      ),
      url: "/manage-address",
    },
    {
      home: "View Shipment",
      icon: (
        <p
          className="d-flex justify-content-center align-items-center"
          style={{
            width: "40px",
            height: "40px",
            backgroundColor:
              location.pathname === "/view-shipment"
                ? "#FAFAFA"
                : "rgba(255, 255, 255, 0.25)",
            borderRadius: "6px",
          }}
        >
          <i
            className="fa-regular fa-eye"
            style={{ color: "white", fontSize: "22px" }}
          ></i>
        </p>
      ),
      url: "/view-shipment",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
          borderBottom: "2px solid #E1E1E180",
        }}
        open={open}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <div>
              <img style={{ height: "38px" }} src={logo} alt="" />
            </div>{" "}
            {userInfo?.name}
          </Typography>

          <Box sx={{ marginLeft: "auto" }}>
            <div className="d-flex gap-4">
              <img
                style={{ height: "20px", width: "21px" }}
                className="mt-1"
                src={wallet}
                alt=""
              />{" "}
              <span className="mt-1">₹ 100.00 </span>
              <button
                style={{ background: "#C1392B", fontSize: "13px" }}
                type="button"
                class="btn btn-danger fw-bold"
                data-toggle="modal"
                data-target=".bd-example-modal-sm"
              >
                Recharge Wallet
              </button>
              <div
                class="modal fade bd-example-modal-sm"
                tabindex="-1"
                role="dialog"
                aria-labelledby="mySmallModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div class="modal-content mt-5">
                      <div class="modal-header">
                        <h5
                          class="modal-title mx-1 fw-bold"
                          id="exampleModalLongTitle"
                        >
                          Recharge You Wallet
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span style={{ fontSize: "30px" }} aria-hidden="true">
                            &times;
                          </span>
                        </button>
                      </div>

                      <div class="modal-body">
                        <div className="row justify-content-center">
                          <h6 class="mb-2 text-muted opacity-75">
                            Current Wallet Amount{" "}
                            <span style={{ color: "#C1392B" }}>₹ 100.00</span>
                          </h6>
                          <div
                            class="card mt-2"
                            style={{
                              width: "29rem",
                              background: "#C1392B0F",
                              border: "none",
                            }}
                          >
                            <div class="card-body">
                              <p class="card-text fw-bold">
                                Enter Amount in Multiple of 100
                              </p>
                              <input
                                type="text"
                                className="p-2 rounded w-100 border"
                                placeholder="₹ 100"
                                value={amount}
                                onChange={({ target }) =>
                                  setAmount(target.value)
                                }
                              />
                              <p
                                style={{ fontSize: "13px" }}
                                className="opacity-50 m-1"
                              >
                                Min value: ₹ 500 & Max value ₹ 10000{" "}
                              </p>
                              <p
                                style={{ fontSize: "15px" }}
                                className="mt-3 mx-1 fw-bold"
                              >
                                Or Select From Below{" "}
                              </p>

                              <div className="d-flex justify-content-between">
                                <button
                                  className="rechargessss rounded-pill p-2"
                                  onClick={() => setAmount(500)}
                                >
                                  ₹ 500
                                </button>
                                <button
                                  className="rechargessss rounded-pill p-2"
                                  onClick={() => setAmount(1000)}
                                >
                                  ₹ 1000
                                </button>
                                <button
                                  className="rechargessss rounded-pill p-2"
                                  onClick={() => setAmount(2000)}
                                >
                                  ₹ 2000
                                </button>
                                <button
                                  className="rechargessss rounded-pill p-2"
                                  onClick={() => setAmount(5000)}
                                >
                                  ₹ 5000
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          style={{ background: "#C1392B", color: "white" }}
                          type="button"
                          class="btn btn"
                        >
                          Pay now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                style={{
                  fontSize: "13px",
                  color: "white",
                  background: "#C1392B",
                }}
                className="rounded p-2 fw-bold"
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                  window.location.reload();
                }}
              >
                Logout
              </button>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{ zIndex: "999", position: "relative" }}
        className="drawer-color"
      >
        <DrawerHeader>
          {!open ? (
            <>
              <IconButton
                color="black"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  color: "white",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </>
          )}
        </DrawerHeader>
        <Divider />

        <div className="all_icons">
          <div className="d-flex">
            <Link style={{ textDecoration: "none" }} to="/">
              <i class="bi bi-house-door"></i>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/">
              <p className="dashboard">Dashboard</p>
            </Link>
          </div>

          <div className="d-flex">
            <Link style={{ textDecoration: "none" }} to="/order-status">
              <i class="bi bi-database-fill-lock"></i>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/order-status">
              <p className="dashboard">Shipment & Pickup</p>
            </Link>
          </div>

          <div className="d-flex">
            <Link style={{ textDecoration: "none" }} to="/">
              <i class="bi bi-cash-coin"></i>
            </Link>

            <div class="dropdown show dashboard">
              <p
                class="dark dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Finance
              </p>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">
                  Remittances
                </a>
                <a class="dropdown-item" href="#">
                  Invoice
                </a>
              </div>
            </div>
          </div>

          <div className="d-flex">
            <Link style={{ textDecoration: "none" }} to="/supports">
              <i class="bi bi-headset"></i>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/supports">
              <p className="dashboard">Support</p>
            </Link>
          </div>

          <div className="d-flex">
            <Link style={{ textDecoration: "none" }} to="/">
              <i class="bi bi-fullscreen-exit"></i>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/">
              <p className="dashboard">Services</p>
            </Link>
          </div>

          <div className="d-flex">
            <Link style={{ textDecoration: "none" }} to="/setting-page">
              <i class="bi bi-gear-fill"></i>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/setting-page">
              <p className="dashboard">Setting</p>
            </Link>
          </div>
        </div>

        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}

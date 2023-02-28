import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleCart } from "../../features/cartSlice";

function Navbar() {
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const navigate = useNavigate();
  return (
    <>
      <Box
        width="100%"
        position="sticky"
        top="0"
        bgcolor="white"
        display="flex"
        alignItems="center"
        zIndex={10}
      >
        <Box
          width={{ xs: "100%", sm: "90%" }}
          display="flex"
          margin="auto"
          padding={{ xs: "12px 16px", sm: "12px 0" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="h2"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            {isNonMobile ? "ECOMMERCE SHOP" : "E-SHOP"}
          </Typography>

          <Box display="flex" columnGap="4px">
            <IconButton color="primary">
              <SearchOutlinedIcon />
            </IconButton>

            <IconButton color="primary">
              <PersonOutlineOutlinedIcon />
            </IconButton>

            <IconButton color="primary">
              <ShoppingBagOutlinedIcon />
            </IconButton>

            <IconButton color="primary" onClick={() => dispatch(toggleCart())}>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Sidebar />
    </>
  );
}

export default Navbar;

import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleCart,
  selectIsCartOpen,
  selectCart,
} from "../../../features/cartSlice";
import Close from "@mui/icons-material/close";
import { useTheme } from "@mui/material/styles";
import CartItem from "./CartItem";
import { pallete } from "../../../theme";
import { useEffect } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useNavigate } from "react-router-dom";

const FlexBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Sidebar() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cart = useSelector(selectCart);
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "auto";
  }, [isCartOpen]);

  const handleClose = () => {
    dispatch(toggleCart());
  };

  const handleCheckout = () => {
    dispatch(toggleCart());
    navigate("/checkout");
  };

  const totalPrice = cart.reduce((currentPrice, product) => {
    return currentPrice + product.attributes.price * product.qty;
  }, 0);

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgcolor="rgba(0,0,0,0.65)"
        display={isCartOpen ? "block" : "none"}
        zIndex={10}
        overflow="auto"
      />
      <Box
        height="100%"
        padding="16px"
        width="max(320px, 28%)"
        position="fixed"
        right="0"
        top="0"
        bgcolor={theme.palette.grey[50]}
        borderRadius="8px 0 0 8px"
        zIndex={10}
        display="flex"
        flexDirection="column"
        sx={{
          transform: isCartOpen ? "translate(0)" : "translate(100%)",
          transitionProperty: "transform",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "150ms",
        }}
      >
        <FlexBox flex="none">
          <Typography variant="h3">SHOPPING BAG</Typography>

          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </FlexBox>

        {/* Cart Items */}
        <Box flex="1 1 auto" overflow="auto">
          {/* if no cart item */}
          {!cart.length && (
            <Box textAlign="center" mt="50%" color={pallete.neutral[700]}>
              <HighlightOffIcon fontSize="large" />
              <Typography>No Item. Please add one</Typography>
            </Box>
          )}
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </Box>

        <Divider sx={{ my: "16px" }} />

        <FlexBox mb="24px" flex="none">
          <Typography color={pallete.neutral[900]} fontWeight={600}>
            SUBTOTAL
          </Typography>
          <Typography fontWeight="bold" variant="body2">
            Rp. {totalPrice}
          </Typography>
        </FlexBox>

        {/* Button */}
        <Button
          onClick={handleCheckout}
          disabled={!cart.length}
          fullWidth
          sx={{
            bgcolor: pallete.primary[500],
            color: pallete.neutral[200],
            py: "16px",
            ":hover": {
              color: pallete.primary[500],
              bgcolor: pallete.neutral[500],
            },
            ":disabled": {
              color: pallete.neutral[100],
              bgcolor: pallete.neutral[800],
            },
          }}
        >
          <Typography variant="body2">Checkout</Typography>
        </Button>
      </Box>
    </>
  );
}

export default Sidebar;

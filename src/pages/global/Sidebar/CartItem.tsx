import Close from "@mui/icons-material/close";
import { Box, IconButton, styled, Typography } from "@mui/material";
import { pallete } from "../../../theme";
import { CartItem as CartItemType } from "../../../features/cartSlice";
import { useDispatch } from "react-redux";
import {
  increaseAmount,
  decreaseAmount,
  removeItem,
} from "../../../features/cartSlice";

const FlexBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function CartItem({ item }: { item: CartItemType }) {
  const dispatch = useDispatch();

  const handleDecrease = () => {
    dispatch(decreaseAmount(item));
  };

  const handleIncrease = () => {
    dispatch(increaseAmount(item));
  };

  const handleClose = () => {
    dispatch(removeItem(item));
  };

  return (
    <Box mt="16px" display="flex" justifyContent="space-between">
      <Box flex="1 1 40%">
        <img
          src={`${import.meta.env.VITE_BASE_URL}${
            item.attributes.image.data[0].attributes.formats.medium.url
          }`}
          width="88px"
          style={{ aspectRatio: "8/12", objectFit: "cover" }}
        />
      </Box>
      <Box flex="1 1 60%" ml="16px">
        <FlexBox>
          <Typography fontWeight="bold" variant="body2">
            {item.attributes.name}
          </Typography>

          <IconButton onClick={handleClose}>
            <Close
              sx={{
                width: "16px",
                heigth: "16px",
              }}
            />
          </IconButton>
        </FlexBox>
        <Typography color={pallete.neutral[800]} variant="body2">
          {item.attributes.shortDesc}
        </Typography>

        <FlexBox mt="16px">
          <Box
            display="flex"
            gap="8px"
            p="0 8px"
            fontSize="14px"
            border={`1px solid ${pallete.neutral[500]}`}
          >
            <button disabled={item.qty === 1} onClick={handleDecrease}>
              -
            </button>
            <span>{item.qty}</span>
            <button onClick={handleIncrease}>+</button>
          </Box>

          <Typography variant="body2" fontWeight="bold" pr="16px">
            Rp. {item.attributes.price}
          </Typography>
        </FlexBox>
      </Box>
    </Box>
  );
}

export default CartItem;

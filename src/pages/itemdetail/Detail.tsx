import { useParams } from "react-router-dom";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { pallete } from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseAmount,
  increaseAmount,
  removeItem,
  selectCart,
} from "../../features/cartSlice";
import { Item } from "../../constant/item";

type PropsType = {
  foundItem: Item;
};

function Detail({ foundItem }: PropsType) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCart);
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  if (!foundItem) return <p>404 Not Found :(</p>;

  const itemsInCart = cartItems.find((prod) => prod.id === Number(id));

  const {
    attributes: {
      name,
      price,
      longDesc,
      image: { data },
    },
  } = foundItem;

  const handleDecrease = () => {
    dispatch(decreaseAmount(itemsInCart!));
  };

  const handleIncrease = () => {
    if (!itemsInCart) {
      dispatch(addItem(foundItem));
      return;
    }
    dispatch(increaseAmount(itemsInCart));
  };

  const handleBtnClick = () => {
    if (!itemsInCart) {
      dispatch(addItem(foundItem));
      return;
    }
    dispatch(removeItem(itemsInCart));
    return;
  };

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      columnGap={2}
    >
      <Box flex="1 1 40%">
        <img
          src={`${import.meta.env.VITE_BASE_URL}${
            data[0].attributes.formats.medium.url
          }`}
          width="100%"
          style={{
            objectFit: "cover",
            aspectRatio: isNonMobile ? "8/16" : "1/1",
          }}
        />
      </Box>
      <Box
        flex="1 1 50%"
        minWidth="320px"
        my={5}
        textAlign={{ xs: "center", sm: "left" }}
      >
        <Box>
          <Typography mb={1} variant="h2">
            {name}
          </Typography>
          <Typography fontWeight={600} variant="body1">
            Rp. {price}
          </Typography>
        </Box>
        <Box my={2}>
          <Typography fontWeight={300} variant="body1">
            {longDesc}
          </Typography>
        </Box>
        <Box
          display="flex"
          gap={3}
          justifyContent={{ xs: "center", sm: "left" }}
        >
          <Box
            display="flex"
            gap={3}
            p="0 8px"
            fontSize="14px"
            border={`1px solid ${pallete.neutral[500]}`}
            alignItems="center"
          >
            <button
              disabled={itemsInCart?.qty === 1 || !itemsInCart}
              onClick={handleDecrease}
            >
              -
            </button>
            <span>{itemsInCart?.qty || 0}</span>
            <button onClick={handleIncrease}>+</button>
          </Box>
          <Button
            onClick={handleBtnClick}
            sx={{
              bgcolor: pallete.primary[500],
              color: pallete.neutral[100],
              padding: "8px 32px",
              fontSize: "10px",
              borderRadius: 0,
              ":hover": {
                bgcolor: pallete.primary[500],
                color: pallete.neutral[100],
              },
            }}
          >
            {!itemsInCart ? "Add to cart" : "Remove Item"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Detail;

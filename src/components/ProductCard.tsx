import { Box, Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { pallete } from "../theme";
import { Link } from "react-router-dom";
import {
  decreaseAmount,
  addItem,
  selectCart,
  removeItem,
} from "../features/cartSlice";
import { Item } from "../constant/item";

type PropsType = {
  product: Item;
  small?: boolean;
};

function ProductCard({ product, small }: PropsType) {
  const [hovered, setHovered] = useState(false);
  const cartItems = useSelector(selectCart);
  const dispatch = useDispatch();

  const {
    id,
    attributes: {
      category,
      name,
      price,
      image: { data },
    },
  } = product;

  const foundItem = cartItems.find((item) => item.id === id);

  const handleDecrease = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!foundItem) return;
    if (foundItem.qty === 1) {
      dispatch(removeItem(foundItem));
      return;
    }
    dispatch(decreaseAmount(foundItem));
  };

  const handleAddItem = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(addItem(product));
  };

  const handleBtnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!foundItem) {
      dispatch(addItem(product));
      return;
    }
    dispatch(removeItem(product));
    return;
  };

  return (
    <Link to={`/product/${id}`}>
      <Box
        minWidth="100%"
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          cursor: "pointer",
        }}
      >
        <Box
          width="100%"
          position="relative"
          height={small ? "320px" : "400px"}
        >
          <img
            src={`${import.meta.env.VITE_BASE_URL}${
              data[0].attributes.formats.medium.url
            }`}
            width="100%"
            height="100%"
            alt={`product-${id}`}
            style={{ objectFit: "cover" }}
          />

          <Box
            position="absolute"
            display={hovered ? "block" : "none"}
            bgcolor="rgba(0,0,0,0.4)"
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={1}
          />

          <Box
            display={hovered ? "flex" : "none"}
            justifyContent="space-between"
            position="absolute"
            bottom="32px"
            left="0"
            p="0 16px"
            width="100%"
            zIndex={2}
          >
            <Box
              display="flex"
              alignItems="center"
              gap="8px"
              p={small ? "0 8px" : "0 16px"}
              fontSize="14px"
              bgcolor={pallete.neutral[100]}
            >
              <button
                disabled={foundItem?.qty === 0 || !foundItem}
                onClick={handleDecrease}
              >
                -
              </button>
              <span>{foundItem?.qty || 0}</span>
              <button onClick={handleAddItem}>+</button>
            </Box>

            <Button
              sx={{
                background: pallete.primary[400],
              }}
              onClick={handleBtnClick}
            >
              <Typography
                variant={small ? "body2" : "caption"}
                color={pallete.neutral[100]}
              >
                {!foundItem ? "ADD TO CART" : "REMOVE ITEM"}
              </Typography>
            </Button>
          </Box>
        </Box>

        <Box p="16px 8px">
          <Typography
            textTransform="uppercase"
            variant="body2"
            color={pallete.neutral[700]}
          >
            {category}
          </Typography>

          <Typography
            fontWeight="bold"
            variant="body1"
            color={pallete.neutral[800]}
            textOverflow="ellipsis"
            overflow="hidden"
            whiteSpace="nowrap"
          >
            {name}
          </Typography>

          <Typography fontWeight={600} color={pallete.primary[500]}>
            Rp. {price}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}

export default ProductCard;

import ProductCard from "../../components/ProductCard";
import { Box, Typography } from "@mui/material";
import { allProducts } from "../../constant/item";

type PropsType = {
  category: string;
};

function Related({ category }: PropsType) {
  const relatedProduct = allProducts.data.filter(
    (prod) => prod.attributes.category === category
  );

  return (
    <Box>
      <Typography variant="h3" fontWeight={500} my={3}>
        RELATED PRODUCTS
      </Typography>

      <Box
        display={{ xs: "flex", sm: "grid" }}
        flexDirection="column"
        gridTemplateColumns="repeat(auto-fill, 200px)"
        gap={2}
        rowGap={4}
        justifyContent="space-between"
      >
        {relatedProduct.map((prod) => (
          <ProductCard small product={prod} key={prod.id} />
        ))}
      </Box>
    </Box>
  );
}

export default Related;

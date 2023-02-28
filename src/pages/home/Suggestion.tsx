import { Box, Tabs, Tab, styled, TabProps } from "@mui/material";
import { useState } from "react";
import { pallete } from "../../theme";
import ProductCard from "../../components/ProductCard";
import { useGetAllProductsQuery } from "../../api/product";
import { ResponseType } from "../../api/product";
import Loading from "../global/Loading";

const allCategories = ["all", "newArrivals", "bestSellers", "topRated"];

const StyledTab = styled((props: TabProps) => <Tab {...props} />)(
  ({ theme }) => ({
    textTransform: "capitalize",
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: pallete.neutral[800],
    "&.Mui-selected": {
      color: pallete.primary[500],
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

const newArrivalsProduct = (allProducts: ResponseType) => {
  return allProducts.data.filter(
    (product) => product.attributes.category === "newArrivals"
  );
};

const bestSellersProduct = (allProducts: ResponseType) =>
  allProducts.data.filter(
    (product) => product.attributes.category === "bestSellers"
  );
const topRated = (allProducts: ResponseType) =>
  allProducts.data.filter(
    (product) => product.attributes.category === "topRated"
  );

function Suggestion() {
  const [activeCategory, setActiveCategory] = useState(allCategories[0]);

  const {
    data: allProducts,
    isError,
    isLoading,
  } = useGetAllProductsQuery(null);

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setActiveCategory(newValue);
  };

  if (isLoading) return <Loading />;

  if (isError) return <p>Error :(</p>;

  if (!allProducts) return <p>Loading...</p>;

  return (
    <Box width={{ xs: "100%", sm: "90%" }} margin="auto">
      <Box width="100%" my="16px" px={2}>
        <Tabs
          variant="scrollable"
          value={activeCategory}
          onChange={handleChange}
        >
          {allCategories.map((categ, i) => (
            <StyledTab key={i} value={categ} label={`${categ}`} />
          ))}
        </Tabs>
      </Box>
      {/* Content */}
      <Box
        display={{ xs: "flex", sm: "grid" }}
        flexDirection="column"
        gridTemplateColumns="repeat(auto-fit,240px)"
        gap="32px"
        justifyContent="space-between"
        py="16px"
        px={2}
      >
        {activeCategory === "all" &&
          allProducts?.data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        {activeCategory === "newArrivals" &&
          newArrivalsProduct(allProducts!).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        {activeCategory === "bestSellers" &&
          bestSellersProduct(allProducts!).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        {activeCategory === "topRated" &&
          topRated(allProducts!).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Box>
    </Box>
  );
}

export default Suggestion;

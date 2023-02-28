import { useEffect } from "react";
import Detail from "./Detail";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Related from "./Related";
import { useGetSingleProductQuery } from "../../api/product";
import Loading from "../global/Loading";

function ProductDetail() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleProductQuery(id!);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [id]);

  if (isLoading) return <Loading />;

  if (isError) return <p>Error :(</p>;

  const foundItem = data!.data;

  return (
    <Box
      width={{ xs: "100%", sm: "90%" }}
      margin="auto"
      padding={{ xs: "12px 16px", sm: "12px 0" }}
    >
      <Detail foundItem={foundItem} />
      <Related category={foundItem.attributes.category} />
    </Box>
  );
}

export default ProductDetail;

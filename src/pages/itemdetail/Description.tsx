import { Box, Typography } from "@mui/material";

function Description() {
  return (
    <Box my={5} textAlign={{ xs: "center", sm: "left" }}>
      <Typography variant="h3" fontWeight={500} mb={1}>
        DESCRIPTION
      </Typography>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere velit
        illo natus optio porro. Voluptas, harum illo doloribus, officia
        reiciendis ea dolorem, ut temporibus possimus dolorum placeat vero
        facere similique?
      </Typography>
    </Box>
  );
}

export default Description;

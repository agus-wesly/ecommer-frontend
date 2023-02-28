import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function Success() {
  return (
    <section>
      <Box
        width={{ xs: "100%", sm: "90%" }}
        height="60vh"
        margin="auto"
        padding={{ xs: "12px 16px", sm: "12px 0" }}
      >
        <Alert severity="success">
          Congratulations, Your Order has been completed <br />
          <Link to="/">
            <strong>Back to home</strong>
          </Link>
        </Alert>
      </Box>
    </section>
  );
}

export default Success;

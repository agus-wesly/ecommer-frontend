import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import { Box, Typography, TextField, Button } from "@mui/material";
import { pallete } from "../../theme";

function Subscribe() {
  return (
    <Box
      width="min(90%, 1024px)"
      mx="auto"
      my="32px"
      textAlign="center"
      py="24px"
    >
      <AttachEmailOutlinedIcon />
      <Box mt="16px" mb="24px">
        <Typography variant="h2">
          JOIN OUR NEWSLETTER TO GET THE LATEST INFO
        </Typography>
        <Typography variant="body1" color={pallete.neutral[800]}>
          And receive 20% discount for your first order
        </Typography>
      </Box>

      {/* Input */}
      <Box display="flex" bgcolor={pallete.neutral[200]}>
        <TextField
          type="email"
          sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: "transparent",
              "& fieldset": {
                border: "none",
              },
            },
          }}
          placeholder="Enter your email address"
          fullWidth
        />
        <Button
          sx={{
            px: 2,
          }}
          variant="text"
        >
          Join
        </Button>
      </Box>
    </Box>
  );
}

export default Subscribe;

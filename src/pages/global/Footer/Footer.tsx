import { Box, Typography, useMediaQuery } from "@mui/material";
import { pallete } from "../../../theme";

function Footer() {
  const isNonMobile = useMediaQuery("(min-width:600px");
  return (
    <footer>
      <Box width="full" bgcolor={pallete.neutral[200]} pt="24px" mt="40px">
        <Box
          width={{ xs: "100%", sm: "90%" }}
          padding={{ xs: "12px 16px", sm: "12px 0" }}
          m="auto"
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          gap="24px"
        >
          <Box maxWidth={isNonMobile ? "240px" : "128px"}>
            <Typography
              textTransform="uppercase"
              fontSize="16px"
              fontFamily="Cinzel"
              fontWeight="bold"
              color={pallete.secondary[500]}
              mb="16px"
            >
              ECOMERCE
            </Typography>

            <Typography variant="body2" color={pallete.primary[700]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem quaerat animi hic impedit illo reprehenderit doloremque
              voluptates incidunt similique dignissimos.
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            color={pallete.neutral[800]}
            gap={isNonMobile ? "24px" : "16px"}
          >
            <Typography fontSize="16px" fontFamily="Cinzel" fontWeight="bold">
              ABOUT US
            </Typography>
            <Typography fontSize="12px">Careers</Typography>
            <Typography fontSize="12px">Our Stores</Typography>
            <Typography fontSize="12px">Terms & Conditions</Typography>
            <Typography fontSize="12px">Privacy Policy</Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            color={pallete.neutral[800]}
            gap={isNonMobile ? "24px" : "16px"}
          >
            <Typography fontSize="16px" fontFamily="Cinzel" fontWeight="bold">
              CUSTOMER CARE
            </Typography>
            <Typography fontSize="12px">Help Center</Typography>
            <Typography fontSize="12px">Track Your Order</Typography>
            <Typography fontSize="12px">Corporate</Typography>
            <Typography fontSize="12px">Returns & Refunds</Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            color={pallete.neutral[800]}
            gap={isNonMobile ? "24px" : "16px"}
          >
            <Typography fontSize="16px" fontFamily="Cinzel" fontWeight="bold">
              CONTACT US
            </Typography>
            <Typography fontSize="12px">
              $0 bid Grove Street, Washington DC, 104432
            </Typography>
            <Typography fontSize="12px">Email: hbvhh@gmail.com</Typography>
            <Typography fontSize="12px">00223-5563-9090</Typography>
          </Box>
        </Box>
      </Box>
    </footer>
  );
}

export default Footer;

import { Box, IconButton, Avatar, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { pallete } from "../../theme";

function CarouselComponent() {
  const images = [...Array(5).keys()].map((index) => (
    <div key={index}>
      <img src={`../../../${index + 1}.jpeg`} alt={`Image${index + 1}`} />
      <Box
        bgcolor="rgba(0,0,0,0.6)"
        p="4px 16px"
        position="absolute"
        top="50%"
        left={"20%"}
      >
        <Typography
          textAlign="left"
          variant="h3"
          color={pallete.secondary[200]}
          mb="16px"
        >
          New Items
        </Typography>
        <Typography mb="8px" color={pallete.neutral[200]} variant="h1">
          SUMMER SALE
        </Typography>
      </Box>
    </div>
  ));
  return (
    <Carousel
      showArrows
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      swipeable={false}
      infiniteLoop
      renderArrowPrev={(handlePrev) => (
        <Box position="absolute" top="50%" left={0} zIndex={5}>
          <IconButton onClick={handlePrev}>
            <Avatar sx={{ bgcolor: "rgba(0,0,0,0.2)" }}>
              <ArrowBackIosNewOutlinedIcon
                sx={{
                  color: pallete.neutral[500],
                }}
              />
            </Avatar>
          </IconButton>
        </Box>
      )}
      renderArrowNext={(handleNext) => (
        <Box position="absolute" top="50%" right="0" zIndex={5}>
          <IconButton onClick={handleNext}>
            <Avatar sx={{ bgcolor: "rgba(0,0,0,0.2)" }}>
              <ArrowForwardIosOutlinedIcon
                sx={{
                  color: pallete.neutral[500],
                }}
              />
            </Avatar>
          </IconButton>
        </Box>
      )}
    >
      {images as any}
    </Carousel>
  );
}

export default CarouselComponent;

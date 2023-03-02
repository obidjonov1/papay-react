import React from "react";
import { Favorite } from "@mui/icons-material";
import { Box, Container, Rating, Stack, Button } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Marginer from "../../components/marginer";
import Checkbox from "@mui/material/Checkbox";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const chosen_list = Array.from(Array(6).keys());

export function ChosenDish() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="chosen_dish_page">
      <Container className="dish_container">
        <Stack className={"chosen_dish_slider"}>
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            // thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="dish_swiper"
          >
            {chosen_list.map((ele, index) => {
              const image_path = `/others/sandvich.jpg`;
              return (
                <SwiperSlide key={index}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={image_path}
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <Stack>
            <Swiper
              className={"dish_swiper_down_swiper"}
              loop={true}
              slidesPerView={3}
              spaceBetween={25}
            >
              {chosen_list.map((ele, index) => {
                return (
                  <SwiperSlide key={`${index}`}>
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "15px",
                      }}
                      src="/others/sandvich.jpg"
                      alt="food"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Stack>
        </Stack>

        <Stack className={"chosen_dish_info_container"}>
          <Box className={"chosen_dish_info_box"}>
            <strong className={"dish_txt"}>Sweet Sendvich</strong>
            <span className={"resto_name"}>Texas De Brazil</span>
            <Box className={"rating_box"}>
              <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
              <div className="evaluation_box">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "20px",
                  }}
                >
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite style={{ color: "red" }} />}
                    /* @ts-ignore */
                    checked={false}
                  />

                  <span>98</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                  <span>1000</span>
                </div>
              </div>
            </Box>
            <p className={"dish_desc_info"}>Juda mazzali sandwich</p>
            <Marginer
              direction="horizontal"
              height="1"
              width="100%"
              bg="#000000"
            />
            <div className={"dish_price_box"}>
              <span>Narx:</span>
              <span>$10</span>
            </div>
            <div className="button_box">
              <Button
                variant="contained"
                style={{ color: "#FFFFFF", background: "#1976D2" }}
              >
                SAVATGA QO'SHISH
              </Button>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

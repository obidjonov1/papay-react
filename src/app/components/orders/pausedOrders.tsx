import React from "react";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, Stack } from "@mui/material";

const pausedOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

export default function PausedOrders(props: any) {
  return (
    <TabPanel value={"1"}>
      <Stack>
        {pausedOrders?.map((order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.map((item) => {
                  const image_path = `/others/sandvich.jpg`;
                  return (
                    <Box className={"ordersName_price"}>
                      <img src={image_path} className={"orderDishImg"} alt="" />
                      <p className={"titleDish"}>Sandvich</p>
                      <Box className={"priceBox"}>
                        <p>7$</p>
                        <img src={"/icons/Close.svg"} alt="" />
                        <p>3</p>
                        <img src={"/icons/pause.svg"} alt="" />
                        <p style={{ marginLeft: "15px" }}>21$</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total_price_box black_solid"}>
                <Box className={"boxTotal"}>
                  <p>mahsulot narxi</p>
                  <p>$21</p>
                  <img
                    src={"/icons/plus.svg"}
                    style={{ marginLeft: "20px" }}
                    alt=""
                  />
                  <p>yetkazish xizmati</p>
                  <p>$2</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                    alt=""
                  />
                  <p>jami narx</p>
                  <p>$89</p>
                </Box>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#c40909", borderRadius: "10px" }}
                >
                  Bekor qilish
                </Button>
                <Button variant="contained" style={{ borderRadius: "10px" }}>
                  to'lash
                </Button>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}

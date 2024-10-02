"use client"; // This makes the component a Client Component
import Banner from "@/components/banner/Banner";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  return (
    <Box>
      <Banner />
    </Box>
  );
}

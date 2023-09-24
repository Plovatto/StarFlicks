import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { CustomPrevArro, CustomNextArro } from "./style";

const CustomNextArrow = ({ onClick }) => (
  <CustomNextArro className="custom-arrow custom-next-arrow" onClick={onClick}>
    <FaChevronRight />
  </CustomNextArro>
);

const CustomPrevArrow = ({ onClick }) => (
  <CustomPrevArro className="custom-arrow custom-prev-arrow" onClick={onClick}>
    <FaChevronLeft />
  </CustomPrevArro>
);

export { CustomNextArrow, CustomPrevArrow };

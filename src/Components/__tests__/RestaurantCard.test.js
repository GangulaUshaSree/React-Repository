import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../Test_MockData/ResCard_mockData.json";
import "@testing-library/jest-dom";
import { isRestaurantOpen } from "../RestaurantCard";

it("Should render Restaurant card component with props data", () => {

    render(< RestaurantCard resData = {MOCK_DATA} />);

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
});

test("Should render Restaurant card component with isOpen true", () => {
  // Wrap RestaurantCard with the HOC
  const OpenRestaurantCard = isRestaurantOpen(RestaurantCard);

  // Render with mock data
  render(<OpenRestaurantCard resData = {MOCK_DATA} />);

  // Check that the "Open" label is present
  const label = screen.getByText("Open");

  //expect(label).toBeInTheDocument();
  expect(MOCK_DATA.info.isOpen).toBe(true);
});
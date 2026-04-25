import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantsMenu from "../RestaurantMenu";
import MOCK_DATA from "../Test_MockData/ResMenu-mockData.json";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import appStore from "../Utils/appStore";
import { Provider } from "react-redux";
import Header from "../Header";
import Cart from "../Cart";

it("Should load restaurant menu component", () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: "/restaurants/414835", state: "Pizza Hut" }]}>
        <Provider store={appStore}>
            <Header/>
            <RestaurantsMenu />
            <Cart/>
        </Provider>
    </MemoryRouter>
  );

  const accordianHeader = screen.getByText("Recommended (20)");

  fireEvent.click(accordianHeader);

  const foodItems = screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(20);

  const addButtons = screen.getAllByRole("button", {name: "Add"});

  fireEvent.click(addButtons[0]);

  const cart = screen.getByText("Cart - 1");

  expect(cart).toBeInTheDocument();

  fireEvent.click(addButtons[1]);

  expect(screen.getByText("Cart - 2")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(22);

  fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

  expect(screen.getAllByTestId("foodItems").length).toBe(20);

  expect(screen.getByText("Your Cart is empty. Please add the items in your cart")).toBeInTheDocument();
});
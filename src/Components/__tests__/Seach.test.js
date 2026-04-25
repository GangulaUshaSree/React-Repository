import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "../Test_MockData/ResList_mockData.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should search Res list for burger text input", async () => {
    
    await act(async () => 
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const resCardBeforeSearch = screen.getAllByTestId("resCard");

    expect(resCardBeforeSearch.length).toBe(20);

    const searchButton = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: {value: "burger"}});

    fireEvent.click(searchButton);

    const resCardAfterSearch = screen.getAllByTestId("resCard");

    expect(resCardAfterSearch.length).toBe(2);

});

it("Should Filter the Top Rated Restaurants", async () => {
    
    await act(async () => 
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const resCardBeforeFilter = screen.getAllByTestId("resCard");

    expect(resCardBeforeFilter.length).toBe(20);

    const topRatedRestaurantButton = screen.getByRole("button", { name: "Top Rated Restaurants" });

    fireEvent.click(topRatedRestaurantButton);

    const resCardAfterFilter = screen.getAllByTestId("resCard");

    expect(resCardAfterFilter.length).toBe(13);

});
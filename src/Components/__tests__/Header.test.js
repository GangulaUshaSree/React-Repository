import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../Components/Utils/appStore";
import "@testing-library/jest-dom";

it("Should render Header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    //if you have multiple button then we can specify the name
    const loginbutton = screen.getByRole("button", {name : "Login"});

    expect(loginbutton).toBeInTheDocument();
});

it("Should render Header component with a cart items 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - 0");

    expect(cartItems).toBeInTheDocument();
});

it("Should render Header component with cart items exist or not", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    //we can use regex as well. For that we don't need double quotes
    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    //if you have multiple button then we can specify the name
    const loginbutton = screen.getByRole("button", {name : "Login"});

    //for event listeners we will use fireEvent
    fireEvent.click(loginbutton);

    const logoutbutton = screen.getByRole("button", {name : "Logout"});

    expect(logoutbutton).toBeInTheDocument();
});
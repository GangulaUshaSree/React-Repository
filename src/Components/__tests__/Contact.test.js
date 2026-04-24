const { render, screen } = require("@testing-library/react");
import Contact from "../Contact";
import "@testing-library/jest-dom";

//we can use test/it both will work in the same way
describe("Contact Us page Test cases", () => {
    test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});
test("Should load button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
});

it("Should load input name inside contact us component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    expect(inputName).toBeInTheDocument();
});

it("Should load 2 input boxes on the contact us component", () => {
    render(<Contact />);

    const inputBox = screen.getAllByRole("textbox");

    console.log(inputBox.length);

    expect(inputBox.length).toBe(2);
});
})

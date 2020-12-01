import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, waitFor } from "@testing-library/react";
import { withThemeProvider } from 'utils/testUtils';
import Form from "./index";

describe('Form', function () {
  let wrapper, getTestId;

  beforeEach(() => {
    const { container, getByTestId } = withThemeProvider(<Form />);
    
    wrapper = container;
    getTestId = getByTestId;
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should show validation on blur", async () => {
    const input = getTestId("messageInput");
    
    fireEvent.blur(input);
    await waitFor(() => {
      expect(getTestId("messageError")).not.toBe(null);
      expect(getTestId("messageError")).toHaveTextContent("message is a required field");
    });
  });
})
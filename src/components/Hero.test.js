import React from 'react';

import { render } from "@testing-library/react";

import Hero from "./Hero";

test('renders Hero with children', () =>{
    const {debug, getByText} = render(
        <Hero>
            <p>André Balconi</p>
        </Hero>
    );

    //debug();
    //expect(getByText("André Balconi")).toBeTruthy();
    expect(getByText("André Balconi")).toBeInTheDocument();
});

test("renders image background", () => {
    const image = "http://test/image.jpg";
  
    const { getByTestId } = render(<Hero image={image} />);
  
    expect(getByTestId("hero")).toHaveStyleRule({
      backgroundImage: image,
    });
  });

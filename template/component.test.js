import React from "react";
import render from "react-test-renderer";
import __NAME__ from "./__NAME__";

it("renders correctly", () => {
  const tree = render.create(<__NAME__ />).toJSON();
  expect(tree).toMatchSnapshot();
});

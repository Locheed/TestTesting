import React from "react";
import { shallow } from "enzyme";
import Title from "./Title";

describe("Title component", () => {
  it("Title equals given name", () => {
    const wrapper = shallow(<Title name="Daniel" />);
    const text = wrapper.find("h3").text();
    expect(text).toEqual("Hello there, Daniel");
  });
});

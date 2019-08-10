import React from "react";
import NavigationItems from "./NavigationItems";
import NavigationItem from "../NavigationItem/NavigationItem";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

describe("<NavigationItem />", () => {
    it("should be present two times", () => {
    const wrapper = shallow(<NavigationItems />);
    expect( wrapper.find(NavigationItem)).toHaveLength(2);
    });
});
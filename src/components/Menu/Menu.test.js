
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Menu from "./Menu";

configure({adapter: new Adapter()});

describe("<Menu />", () => {
    it("should include 3 div's menubar", () => {
        const wrapper = shallow(<Menu />);
        expect( wrapper.find("div.menubar")).toHaveLength(3);
    });
});
import React from "react";
import { mount } from "enzyme";
import { authors, newCourse, courses } from "../../../tools/mockData";
import { ManageCoursePage } from "./ManageCoursePage";

function render(args) {
  const defaultProps = {
    courses,
    authors,
    history: {},
    saveCourse: jest.fn(),
    loadAuthors: jest.fn(),
    loadCourses: jest.fn(),
    match: {},
  };
  const props = { ...defaultProps, ...args };
  return mount(<ManageCoursePage {...props} />);
}

it("sets error when attempting to save an empty tirle field", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Title is required");
});

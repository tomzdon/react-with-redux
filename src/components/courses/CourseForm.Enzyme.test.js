import React from "react";
import CourseForm from "./CourseForm";
import { shallow } from "enzyme";

function renderCourseForm(args) {
  const defaultProps = {
    course: {},
    authors: [],
    onSave: () => {},
    onChange: () => {},
    saving: false,
    errors: {},
  };
  const props = { ...defaultProps, ...args };
  return shallow(<CourseForm {...props} />);
}

it("renders form and header", () => {
  const wrapper = renderCourseForm();
  //   console.log(wrapper.debug());
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Course");
});

it("labels save buttons as 'Save' when not saving", () => {
  const wrapper = renderCourseForm();
  //   console.log(wrapper.debug());
  expect(wrapper.find("button").text()).toEqual("Save");
});

it("labels save buttons as 'Saving' when  saving", () => {
  const wrapper = renderCourseForm({ saving: true });
  //   console.log(wrapper.debug());
  expect(wrapper.find("button").text()).toEqual("Saving...");
});

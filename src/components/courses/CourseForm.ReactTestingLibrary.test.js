import React from "react";
import { cleanup, render, getByText } from "react-testing-library";
import CourseForm from "./CourseForm";

afterEach(cleanup);

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
  return render(<CourseForm {...props} />);
}

it("should render Add Course header", () => {
  const { getByText } = renderCourseForm();
  getByText("Add Course");
});

it("labels save buttons as 'Save' when not saving", () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it("labels save buttons as 'Saving' when  saving", () => {
  const { getByText, debug } = renderCourseForm({ saving: true });
  debug();
  getByText("Saving...");
});

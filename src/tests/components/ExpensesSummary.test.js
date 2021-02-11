import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should correctly render ExpensesSummary with 1 expense", () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={9434} />);
  expect(wrapper).toMatchSnapshot();
});

test("should correctly render ExpensesSummary with multiple expenses", () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={7} expensesTotal={9425734} />);
  expect(wrapper).toMatchSnapshot();
});

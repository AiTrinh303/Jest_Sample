// import { screen, render } from "@testing-library/react";
// import RepositoriesSummary from "./RepositoriesSummary";

// test("displays info about the repository", () => {
//   const repository = {
//     language: "JavaScript",
//     stargazers_count: 5,
//     forks: 30,
//     open_issues: 1,
//   };

//   render(<RepositoriesSummary repository={repository} />);

//   for (const key in repository) {
//     const value = repository[key];
//     // const element = screen.getByText(value, { exact: false });
//     const element = screen.getByText(new RegExp(value));

//     expect(element).toBeInTheDocument();
//   }
// });

import {render, screen} from '@testing-library/react';
import RepositoriesSummary from './RepositoriesSummary';

test('display the primary language of the repository',() => {
  const repository = {
    language: 'JavaScript',
    stargazers_count: 5,
    forks: 30,
    open_issues: 1,
  };

  render(<RepositoriesSummary repository={repository} />);

  const language = screen.getByText('JavaScript');

  expect(language).toBeInTheDocument();

});


test('display information about the repository',() => {
  const repository = {
    language: 'JavaScript',
    stargazers_count: 5,
    forks: 30,
    open_issues: 1,
  };

  render(<RepositoriesSummary repository={repository} />);

  for(const key in repository){
    const value = repository[key];
    const element = screen.getByText(new RegExp(value));

    expect(element).toBeInTheDocument();
  }

});
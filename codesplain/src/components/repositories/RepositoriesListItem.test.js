import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RepositoriesListItem from "./RepositoriesListItem";


// function renderComponent() {
//   const repository = {
//     language: "JavaScript",
//     full_name: "facebook/react",
//     description: "React",
//     owner: { login: "facebook" },
//     name: "react",
//     html_url: "https://github.com/facebook/react",
//   };

//   render(
//     <MemoryRouter>
//       <RepositoriesListItem repository={repository} />
//     </MemoryRouter>
//   );

//   return { repository };
// }

// test("shows a link to the GitHub homepage for a given repository", async () => {
//   const { repository } = renderComponent();

//   // Note: the sign that the component has finished the state of fetching
//   await screen.findByRole("img", { name: "JavaScript" });

//   const link = screen.getByRole("link", {
//     name: /github repository/i,
//   });

//   expect(link).toHaveAttribute("href", repository.html_url);
// });

// test("shows a file icon with the appropriate icon", async () => {
//   renderComponent();

//   const icon = await screen.findByRole("img", { name: "JavaScript" });

//   expect(icon).toHaveClass("js-icon");
// });



// jest.mock('../tree/FileIcon', () => {
//   //content of FileIcon.js
//   return () => {
//     return 'File Icon Component';
//   }
// });

function renderComponent()  {
  const repository = {
    language: "JavaScript",
    full_name: "facebook/react",
    description: "React",
    owner: { login: "facebook" },
    name: "react",
    html_url: "https://github.com/facebook/react",
  };

  render (
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );
  return {repository};
}

//TEST 1: shows a link to the github homepage for this repository
test('shows a link to the github homepage for this repository', async () => {
  const {repository} = renderComponent();

  // screen.debug();
  // await pause();
  // screen.debug();
  await screen.findByRole('img', {name: 'JavaScript'}); 

  const link = screen.getByRole('link', {name: /github repository/i});
  expect(link).toHaveAttribute('href', repository.html_url);

})

// const pause = () => new Promise(resolve => setTimeout(resolve,100));
  
//TEST 2: shows a Fileicon with the appropriate icon
test('shows a Fileicon with the appropriate icon', async () => {
  renderComponent();
  const icon = await screen.findByRole('img', {name: 'JavaScript'});
  expect(icon).toHaveClass('js-icon');
});

//TEST 3: shows a link to the code editor page
test("shows a link to the code editor page", async () => {
  const { repository } = renderComponent();

  await screen.findByRole("img", { name: "JavaScript" });

  const link = screen.getByRole("link", {
    name: new RegExp(repository.owner.login),
  });

  expect(link).toHaveAttribute("href", `/repositories/${repository.full_name}`);
});
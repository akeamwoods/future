# Future - Test

Live Demo: https://akeamwoods.github.io/future/

## About

This project is built with react and typescript, styled with tailwind, and scaffolded using vite. I have used pnpm as package manager as it is incredibly fast and more performant than yarn/pnpm etc. Vite is also ever-increasingly becoming the dominant build tool of choice, although i do have extensive experience with both webpack and rollup (particularly for building component libraries).

### Note

While reviewing this project, you may notice some elements that may seem over-engineered for a relatively simple use case (e.g., a table with some data). For example, I separated API logic into a custom useOffers hook instead of fetching data directly within the component. Although this may appear unnecessary for an app of this size, my goal was to demonstrate best practices suitable for larger, scalable codebases. Another instance of this is the creation of a generic Table component, even though we’re only fetching one type of data. I've taken this approach to showcase clean, reusable components, separation of concerns, and the use of tools like Storybook.

That said, I haven’t been exhaustive in my implementation, as these types of tech tests are not meant to take an extensive amount of time. I’ve aimed to provide a representative variety of tests covering different aspects (e.g., hooks, unit tests for components, and more integration-like tests for the main app file), without testing every possible scenario. Similarly, I’ve included a skeleton loader for the table, but not for the list or table in mobile view. Since I’ve demonstrated the implementation of this feature, I didn’t feel it necessary to duplicate it across multiple components.

The focus has been on delivering a high standard of work that demonstrates my ability to apply good practices while acknowledging the time constraints of a typical code test.

## Key packages used

- react-query (now known as tanstack/react-query) - Used for its caching abilities and ease of use
- axios
- storybook - showcase component usage, and easy to build clean and reusable components in isolation
- faker-js/faker - the new version of faker, used for generating data in storybook
- husky, lint-staged - used to create pre-commit hooks to maintain code quality, prettify code, and ensure code which breaks tests is not commited
- tailwind
- gh-pages - used to host the live demo
- jest and react-testing-library - for writing unit and integration tests
- eslint and prettier - linting and code formatting

## Code quality safeguarding/enforcement

For code quality and styling this project has pre-commit hooks setup to automatically check code as it is commited. If there are errors then it is rejected. This is achieved using the following packages:

- husky
- eslint
- prettier
- lint-staged
  The commits are automatically formatted as well using prettier to ensure consistency. Here's an example of some broken code and what it looks like:
  <img width="362" alt="broken-code" src="https://github.com/user-attachments/assets/1fac76a8-fbbd-405b-b9bd-c5c3a448dba6">

Trying to commit the above code is prevented by this setup as shown below:

<img width="528" alt="husky" src="https://github.com/user-attachments/assets/57871796-83e1-49c7-8328-46cecacff7dc">

The pre-commit hooks checks that all tests pass and that no linting errors occur, if any of the checks fail it blocks the commit.

## Import Aliases

I have configued import aliases which allows for much cleaner importing of modules, rather than using long relative paths, .e.g ../../components/Table, we can simply import directly from components. This makes the imports cleaner and also helps when re-organising code not having to worry about changing import paths.
The import aliases are set up in the vite.config.ts file as follows:

<img src="https://github.com/user-attachments/assets/45a034cd-8600-4b95-b790-348000caee12" alt="import-aliases" style="height: 450px;"/>

You can see how much cleaner this is in this example:

<img width="471" alt="aliases2" src="https://github.com/user-attachments/assets/7455a133-c409-497a-ae83-5dfdd66b8a5e">

## Barrel Files

To improve code organization and simplify importing components and types, I’ve used barrel files. A barrel file (typically an index.ts file) consolidates and re-exports multiple modules from a folder, allowing them to be imported from a single location.

### Example

Instead of importing multiple components from different locations like this:

<img src="https://github.com/user-attachments/assets/506a378b-21f7-43c7-bcca-39c5c3f9dd70" alt="barrel1" style="height: 250px;"/>

I’ve exported them all from a single location using a barrel file (/src/components/index.ts):

<img src="https://github.com/user-attachments/assets/49335b90-d275-4b74-9c50-13c01689fdb4" alt="barrel2" style="height: 250px;"/>

This way, I can import everything from a single source, like this:

<img src="https://github.com/user-attachments/assets/464407a5-4547-4e55-baf2-770c5985d4cd" alt="barrel3" style="height: 250px;"/>

## API Setup and Separation of Concerns

In this project, I've structured the API logic to follow separation of concerns principles. Rather than fetching data directly in components, the logic is handled within an api folder, making it easier to maintain, scale, and test.
Folder Structure:

- api/baseApi.ts - contains the base API client which uses Axios to handle HTTP requests and a helper get method to simplify GET requests
- api/offersApi.ts - A specific function fetchOffers to fetch offer data from the API, more offer related api logic would go in this file
- api/queryClient.ts - configures the query client for react-query to manage caching, stale time, and retries
- hooks/useOffers.ts - A custom hook that uses react-query to fetch offers in a clean, reusable way

### Why use a custom hook (useOffers)?

- Separation of concerns: The logic for fetching data is abstracted away from the UI components. This makes the components themselves more focused on rendering data and handling user interactions
- Reusability: By separating the data-fetching logic into a custom hook, it can easily be reused in multiple components throughout the application, reducing duplication and making the code more maintainable
- Cleaner code: The hook encapsulates the fetching logic, making the components cleaner and easier to read
- Easier testing: Since the data-fetching logic is separated, it’s easier to mock and test the hook independently of the UI. This allows for more focused unit tests for both the hook and the components using it

## Storybook

I used storybook in this project to showcase the reusability of the components i've created. I also used it to help me when building them as it allows me to build them in isolation and easily test props and see how everything looks visually.

You can run storybook in this project using **pnpm storybook**.

Here's an example of some of the stories:
![storybook](https://github.com/user-attachments/assets/0f59ed51-b369-4534-8b13-bc3e23315f82)
![storybook2](https://github.com/user-attachments/assets/6af4c462-6112-43cb-8970-7113c4397469)

## List and Table components

Although the brief specified a "table-style layout" it also mentioned that using an HTML table was not mandatory and that the goal was to display data in a user-friendly and visually appealing manner. To meet the criteria, I opted to create both a traditional Table component as well as a more modern List component. This approach gives flexibility in how the data can be presented while ensuring accessibility and a clean, responsive design.

### Design Decisions

#### Table Component:

I created a traditional table-style component with dynamic columns and data, as this provides a structured and familiar layout for presenting tabular data. This component uses semantic HTML elements e.g. table, thead, and tbody, and includes responsive options to stack rows on smaller screens.

#### List Component:

In addition to the table, I developed a more modern list-based layout. This is especially useful for mobile views. The list presents the data in a vertical way, making it more user-friendly particularly on smaller screens.

#### Why Both Components?

Given the flexibility in the brief, I wanted to showcase different ways of rendering the same data while adhering to good design practices. The table is more ideal for structured, data-heavy displays, and more suited for desktop browsing. The list provides a more modern, mobile-friendly layout. Both are reusable, customizable, and maintain a clean separation of concerns between the data and presentation layers.

#### Use of Generics

Both components use TypeScript generics to allow them to work with any type of data. This makes the components highly reusable across different contexts while maintaining type safety. By defining the structure of the data generically, the same component can render various sets of data without needing to modify the logic. This approach not only ensures flexibility but also keeps the code scalable and adaptable to future requirements.

## Code Splitting/Lazy Loading

To improve performance and also the load time of the application, I implemented code splitting and lazy loading. This means that components are loaded only when necessary which then reduces the initial bundle size and also speeds up the rendering of more important elements. I used React Suspense and React.lazy() for dynamically loading the OfferList and OfferTable components:

<img src="https://github.com/user-attachments/assets/641fd98d-1c83-4dd4-a19f-1a0175bb57a7" alt="lazy-loading" style="height: 250px;"/>

<img src="https://github.com/user-attachments/assets/f167eb20-1baa-46b9-9278-c24ed6434c2c" alt="suspense" style="height: 350px;"/>

## Skeleton Loading

The SkeletonTable component provides a placeholder while data is being fetched, improving the perceived performance of the application. When the application is in a loading state, the skeleton table is rendered, indicating to the user that data is being loaded in the background.

Example of the skeleton loading:

![loading](https://github.com/user-attachments/assets/45c5b0a0-a9ea-4df5-be9b-ce26e34274a2)

## Testing

I focused on providing a variety of test types to demonstrate my ability to write meaningful tests for different scenarios, rather than exhaustively testing every aspect of the application. I implemented a mix of unit tests, integration tests, and hook tests to cover a range of functionality without going beyond the scope expected for such an assessment.

### Key Tests:

#### Integration Tests (App Component):

I tested the app’s core functionality, including:

- Rendering the skeleton loader and then loading data into the table once it’s fetched.
- Toggling between the table and list views and ensuring both are rendered correctly.

#### Hook Tests (useOffers):

I wrote tests for the useOffers hook to:

- Ensure data is fetched correctly and handled successfully.
- Simulate error handling by testing how the hook responds to a failed fetch.

#### Unit Tests (Table Component):

I tested the Table component to:

- Ensure the table headers and rows are rendered with the correct content.
- Handle edge cases like empty data, ensuring the component doesn’t break.

### Testing Utilities

To simplify testing with react-query, I created utilities like RenderWithProvider and QueryClientWrapper to ensure the components and hooks are tested in isolation but with the required context for data fetching.

Whilst I didn’t test every possible scenario or component, I provided a solid foundation of test cases that cover key functionality, demonstrating how I would approach testing in a real-world project.

## Performance Considerations:

Key areas where I focused on performance are:

1. Code Splitting and Lazy Loading
2. React Suspense for Deferred Loading
3. Caching with react-query

### Lack of memoization

In this project, I chose not to memoize the components because the application currently doesn’t involve heavy computational tasks or complex re-renders that would significantly benefit from memoization. Memoizing components (using React.memo) can improve performance when there are frequent, unnecessary re-renders but in this case:

- Minimal State Changes: The application only switches between table and list views and fetches data once on load meaning that re-render frequency is low
- Lightweight Components: The components themselves are relatively lightweight, and there isn't a noticeable performance hit.
- Simplicity: Memoizing components adds an extra layer of complexity in managing props equality checks. Given how simple this application is I thought that introducing memoization would add overhead to maintain whilst not providing any tangible benefits.

## Future Considerations

While my project meets the requirements, there are several improvements that could be added in the future to enhance performance and scalability:

### Virtualization or Pagination:

When there is more data rendering all items at once can lead to performance issues. Implementing virtualization (e.g. by using react-window or react-virtualized) would only render table rows which are visible in the DOM. Pagination could be introduced to display a limited number of offers at a time, although obviously with only 4 rows of data this is not currently needed.

### Lazy Loading Images:

For further performance optimization, lazy loading images would work well. This would defer the loading of offscreen images until they are about to enter the viewport, reducing the number of HTTP requests made on initial load and speeding up page rendering.

### Server-Side Rendering (SSR):

Implementing server-side rendering (SSR) would significantly improve performance and SEO. Rendering HTML on the server first would lead to faster initial load times.

## Screenshots

### Table View (Desktop)

<a href="https://github.com/user-attachments/assets/13977750-c851-43f8-879a-eaf234641043" target="_blank">
  <img src="https://github.com/user-attachments/assets/13977750-c851-43f8-879a-eaf234641043" alt="table-view-l" width="100%" style="margin: 0 auto; display: block;"/>
</a>

### List View (Desktop)

<a href="https://github.com/user-attachments/assets/3148e9cc-fc41-4cfd-af7e-d5363024ddf4" target="_blank">
  <img src="https://github.com/user-attachments/assets/3148e9cc-fc41-4cfd-af7e-d5363024ddf4" alt="list-view-l" width="100%" style="margin: 0 auto; display: block;"/>
</a>

### Mobile Views

<div style="display: flex; gap: 20px; justify-content: center;">
  <a href="https://github.com/user-attachments/assets/83dc0033-08c7-428d-903e-65b1022d7339" target="_blank">
    <img src="https://github.com/user-attachments/assets/83dc0033-08c7-428d-903e-65b1022d7339" alt="table-view-s" width="45%" />
  </a>
  <a href="https://github.com/user-attachments/assets/e86b443f-c1ac-4c1e-9b8f-6f40e4de4f0d" target="_blank">
    <img src="https://github.com/user-attachments/assets/e86b443f-c1ac-4c1e-9b8f-6f40e4de4f0d" alt="list-view-s" width="45%" />
  </a>
</div>

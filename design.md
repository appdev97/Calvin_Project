# Design specifications

## UI/UX

### Current Design

At the top of the screen, you will find three buttons. Clicking each button will display different content:

- 🎥 Movies - Displays a list of movies, along with their title, length, and box office revenue.
- 🎭 Characters - Displays a list of characters, along with their name, gender, and species.
- 💬 Quotes - Displays a list of quotes from various movies.

In the application, the currently active button has a disabled state to provide visual feedback to the user. Additionally, to handle overflowed content, an ellipsis(...) is added at the end of the visual area, and tooltips are shown when hovering over the content.

The application includes a count of the number of items loaded and the total number of items available in the database, providing the user with a clear understanding of the data being displayed. Additionally, a loading icon is displayed during data retrieval to give visual feedback to the user. The app also shows the infinite scrolling status at the bottom of the list.

### Future Improvements

- I can make the card component clickable and display popups to show more details.
- I can implement the filter.
- I can add animations.

## Codebase

### Current Design

- This app was built using `React` and `TypeScript`. I leveraged the power of `React-Query` to efficiently fetch and cache data. To make our app visually appealing, I used `Tailwind CSS` for the styling.

- I created several reusable components and functions to improve the code quality and maintainability of the app:

  1. A `Button` component that can be used throughout the app.
  2. An `ItemList` component that is used to render the content in a generic way.
  3. A custom `httpClient` that includes authentication and generic type support.
  4. A generic `get` function for making API calls that handles errors and status codes.
  5. A generic `useGetDataQuery` hook to handle all the useInfiniteQuery calls in a consistent way and avoid code duplication.

- I implemented infinite scrolling / pagination using React-Query.

### Future Improvements

- I can implement the virtualization functionality to increase IT agility, flexibility and scalability.
- I can write automatic tests to ensure the code quality, eliminates human errors, save time & money.
- I can add animations.
- I can setup prettier/husky/git commands/etc.

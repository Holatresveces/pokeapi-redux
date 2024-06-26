
# PokéAPI Redux App

An application to display Pokémon data from the [PokéAPI](https://pokeapi.co/).

[Live Deploy](https://pokeapi-redux-psi.vercel.app/)

![PokéAPI Redux App Screenshot](https://i.imgur.com/yx5dvsi.png)

### Features

- **Pokémon List**: Fetch and display a list of the first 150 pokémon from the PokéAPI. Click on a pokémon's name to change the pokémon displayed at the .
- **Pokémon Detail**: Double click on a pokémon to view more detailed information including pokémon's types, stats, and abilities.

## 🚀 Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Holatresveces/pokeapi-redux.git
   cd pokeapi-redux
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   Your application should now be running on `http://localhost:3000`.

## 🛠️ Built With
- Typescript
- React
- React Redux
- TailwindCSS
- PokéAPI
- Axios

## 📝 Notes

As this application deals mostly with API calls, a better-suited tool for this kind of application is [RTK Query](https://redux-toolkit.js.org/rtk-query/overview), which abstracts away much of the state management related to data fetching and also provides caching features. For the purpose of this exercise, a conscious decision was made to use only the features provided by [Redux Toolkit](https://redux-toolkit.js.org/), as I think it should convey a better understanding of the Redux data flow and patterns.

## 🏗️ Future Improvements

Due to time constraints, the mandatory features for this exercise, as per the requirement, were completed. However, these are some tasks that would further improve the application:

- **Testing**: Add integration and unit tests using React Testing Library.
- **Caching**: Since we can end up having repeated API calls to get the same data, I would use RTK Query to deal with caching, which should result in better performance and ultimately a better experience for the user.
- **Error handling**: Features stick mostly to the happy path. A 'failed' status is kept in state if one of the API calls returns an error. However, there's currently no indication of this to the user, who should currently see a screen with empty data. A better approach would be adding an error message with a button to retry the action.
- **Pagination**: Pagination is currently being managed internally by the appication's state. It would be nice to keep it in sync with a query param so that the user is able to navigate to a particular page on the list given a query param on the URL.
# MyReads Project

* A simple App where users could ask questions, answer each other's questions and get ranked based on their interactions.
* You could login using different users and have the app's pages interact with each user's status (including their answered and asked questions).
* The app consists of three main pages:
    * Home: Where the user could view his answered and unanswered questions and interact with them.
    * New Question: Where the user can post a new question.
    * Leaderboard: Where the users get ranked based on their interaction
* The app was built using React library adding redux-toolkit to manage the state of the app.


## General Information

* This is the Second project in Udacity's Advanced Web Development course. the project was created using create-react-app adding the redux-toolkit to it.
* This app uses the provided _DATA.js file as a backend.

## TL;DR

To get started developing right away:

* install all project dependencies with `yarn install`
* start the development server with `yarn start`

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`_DATA.js`](src/utils/_DATA.js.js) was used to build a simple api file [`api.js`](src/utils/api.js) contains the methods you will need to perform necessary operations on the backend:

* [`getInitialData`](#getInitialData)
* [`saveQuestion`](#saveQuestion)
* [`saveQuestionAnswer`](#saveQuestionAnswer)

### `getInitialData`

Method Signature:

```js
getInitialData()
```

* Returns a Promise which resolves to an object containing the current users and questions data.

### `saveQuestion`

Method Signature:

```js
saveQuestion({optionOneText, optionTwoText, author})
```

* optionOneText: `<String>` contains the first part of the question.
* optionTwoText: `<String>` contains the second part of the question.
* author: `<String>` contains the name of the creating user.
* Returns a Promise which resolves to an object containing formated question data.

### `saveQuestionAnswer`

Method Signature:

```js
saveQuestionAnswer({ authedUser, qid, answer })
```

* authedUser: `<String>` contains the name of the answering user.
* qid: `<String>` represenging the question id.
* answer: `<String>` contains the value of the selected answer.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

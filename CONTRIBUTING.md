
If you are contributing to the Open Source for the first time, You can check out [First Time Contributors Guide](#first-time-contributors-guide)

# Local Setup

- [Fork](https://github.com/Pika1998/Meetup-Widget/fork) the respository.
- Clone your forked copy of the repository using `git clone https://github.com/${yourUsername}/Meetup-Widget` 
- `cd Meetup-Widget`
- `npm install` to install the dev dependencies.
- `npm run meetup-widget` will get the server running.


# File Structure
The code is based upon web components and does not use any dependency. You can read more about WebComponents in this [WebComponents Tutorial](https://www.robinwieruch.de/web-components-tutorial)

```js
- src
|- card.component.mjs // Contains the main logic
|- card.style.mjs // Contains the stylesheet
 - index.html // Example and can be used for testing the output
```

# Sending Pull Request
- Create a branch in your forked repository with a relevant name (`e.g enhanced-styling`, `feature-autoreload`)
- Push your changes to the branch
- Create a pull request from your branch to `master` of my branch.

# Development Guide
- If you are looking to add HTML then checkout `card.component.mjs`
- If you are looking to add CSS then checkout `card.style.mjs`

# First-time Contributors Guide
- You can checkout the [Issues](https://github.com/Pika1998/Meetup-Widget/issues) and select the one that you like (You can comment on issue to let me know that you're working on it.)
- Just go through the [Local Setup Guide](#local-setup) to locally setup the project
- Once you are done making changes you can create a Pull Request to the master of this (https://github.com/Pika1998/Meetup-Widget) repository.



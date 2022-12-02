# Dia landing page

  Implementation of the Dia landing page according to the corresponding figma designs, all carried out strictly with only a few differences to automate some actions and go along with some preferances.

  The link to preview the site:
  [DEMO LINK](https://UmizDemud.github.io/layout_dia/)

## Technologies

  - An environment of node is utilized for devops.
  - Scss files are being used for creation of reusable BEM blocks.
  - Lint checkups for readability is implemented and tested for all of the scss, js and html code.

# Some Details
  - The speed of animations is the same throughout the landing page (for example, increasing when hovering or moving blocks when scrolling)
  - Placeholders in the forms suggest what to enter, and if there is a validation of the form, then it is clear in what format to enter the phone number
  - Everything looks neat on mobile and without horizontal scrolling
  - Added favicon for various device types
  - Smooth scroll for the whole page
  - For the preview, When you try to send the form there is no 405 error and the form is automatically cleared after submit and is scrolled to the top of the page or the page is reloaded
  - The form doesn’t submit empty
  - Hover effects on cards in the boundaries of all devices types.
  - Responsive menu for the header

## Github flow
1. **Fork** the repo.
2. **Clone** the forked one. (The project link should have your name but not `mate-academy`)
3. Run `npm install` (or just `npm i`).
4. Run `npm start`.
5. Open one more terminal window for the next steps.
6. `git checkout -b develop` - to create new branch and switch on it.
7. Write you code in `src` folder.
8. Run `npm run lint` and fix code style errors.
9. Run `npm run deploy` to deploy your solution to `gh-pages`.
10. `git add . && git commit -m 'solution'` to save your changes.
11. `git push origin develop` - to send you code for PR.

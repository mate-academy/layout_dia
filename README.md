# Dia landing page
Implement landing page according to [Figma design](https://www.figma.com/file/7qwsWggv9BAxMi2VPhBuPr/Air-(formerly-Dia)?node-id=9138%3A35) - Use BEM and SCSS

Adapt the page to the following screens:
- Large screens 2560px
- Full HD 1920px
- The design 1600px
- Notebook 1280px
- Tablet 1024
- Mobile (> 320px)

1. Implement the header with `nav`.
1. Implement `Strategic agency` block.
1. Implement slider (You may start with a single picture).
    - implement slider block as absolutely positioned element with `right: 0` and `bottom: 0` position inside the black container
    - on large screens limit the width of black container to 1600px, so that left outer space have a standart grey background color
3. Implement `Who we are` block.
4. Implement `Our expertise` block with the card reused 3 times.
5. Implement `Process` block with 4 process cards.
    - use `trasnlateY(-50%)` to move cards up
6. Implement `Testimonials` block.
     - each card should have a fixed width and on the small screens the whole block should switch to column layout
8. Implement `Vision, Passion, Results` block.
    - use https://github.com/mate-academy/layout_dia/blob/master/src/images/Shapes.png as background picture
9. Implement `Send us  a message` block.
10. Implement `Contact us` block.
11. Implement the footer.

## Instructions
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
12. Create a Pull Request (PR) from your branch `develop` to branch `master` of original repo.
13. Replace `<your_account>` with your Github username in the
  [DEMO LINK](https://<your_account>.github.io/layout_dia/).
14. Copy `DEMO LINK` to the PR description.

> To update you PR repeat steps 7-11.

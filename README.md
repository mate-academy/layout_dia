# Eco cosmetics landing page
Implement landing page according to [Figma design](https://www.figma.com/file/Fz588JKGuPS2Bk21De4KE5/Brand-of-eco-cosmetics-_FE-students?node-id=21779%3A631&t=Gtk1Kj4TKq6BJit2-1) - Use BEM and SCSS
- The design 1440px
- Desktop 1280px
- Tablet 640px
- Mobile (> 320px)

1. Implement the header with `nav`.
1. Implement `Brand of eco-cosmetics and magic candles` block.
1. Implement `If you choose the gifts of nature and care about it’s - scroll down` block.
1. Implement `About our brand` block.
1. Implement `Shop` block:
  - implement tabs
  - implement slider
1. Implement `About the creators` block.
1. Implement `Ayurvedic Tooth Powder` block.
1. Implement `Contact us` block.
1. Implement footer.

## Fonts
Use `Sharp Sans No2 Medium` and `Avenir`, which you can find in fonts directory.


## Checklist for preparing a portfolio project for HR review

1. Don’t forget to add a title for the whole web page (it could be the name of your landing)
2. A landing page is implemented strictly according to the design in Figma
4. Links in the header and footer menus should lead to the corresponding blocks of the landing page
5. The speed of animations is the same throughout the landing page (for example, increasing when hovering or moving blocks when scrolling)
6. Placeholders in the forms suggest what to enter, and if there is a validation of the form, then it is clear in what format to enter the phone number
7. Make sure everything looks neat on mobile and without horizontal scrolling
8. Add favicon
9. Add a smooth scroll for the whole page
13. The user must have the opportunity to write 2-3 lines of text in the message field
14. It would be more realistic if the "shopping cart" button was active and clickable
15. Buttons “shop”, “to contact us”, “all products” must be with hover styles
16. All items in the shop section must have hover effects
17. All “learn more” buttons should also have hover styles
18. All the social icons in the footer should be clickable and open the social networks in a new tab
19. The phone number and mail in the footer must be clickable and when clicked, the browser must offer to call the specified number or write a letter to the specified mail.
20. The form shouldn’t accept incorrect data in a field with a phone number (for example, a number with a letter and there was no error), give this and all inputs a correct input type
21. The form shouldn’t submit empty
22. The "contact us" form should be automatically reset after submit and don’t show 404/405 errors after sending


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
12. Create a Pull Request (PR) from your branch `develop` to branch `master` of original repo.
13. Replace `<your_account>` with your Github username in the
  [DEMO LINK](https:Viktoriia-Vita.github.io/layout_dia/).
14. Copy `DEMO LINK` to the PR description.

> To update you PR repeat steps 7-11.

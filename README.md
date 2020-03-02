# Shooting Stars Background

---

Creating a module for a shooting star type background.

[Shooting Stars Demo](https://shooting-stars-demo.gradys.dev/)

---

### V0.4.0 — In-line styling
- Removed the *styled-component* line and move to pure in-line styling.

#### Known Bugs
- Creating lines results delay between page load and mounting onto DOM due to non-async function.

---

### V0.3.1 — Bug Fixes
- Fixed window resizing bug by using window event listener for resize.
- Added ability to use within static site builder, such as Gatsby.

#### Known Bugs
- Creating lines results delay between page load and mounting onto DOM due to non-async function.

---

### V0.3.0 — Performace Update
Big performace improvment due to changing styling to use inline styling.
Code went from `styled.div` to `styled.div.attrs`.

Moved the keyframes animation inside of the container for a small performace boost.

Was able to cut down the page loading time when the number of lines exceeded 500.
1000+ lines was not truly possible before, however is possible now. Would not recommend
going over 2500 lines currently due to performace reasons.

#### Known Bugs
- Resizing screen will not result in resizing bounds of lines.
- Zooming out in browser will result in seeing ending of line boundry.
- Creating lines results delay between page load and mounting onto DOM due to non-async function.

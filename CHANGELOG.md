## V0.5.2
.gitignore update


#### Known Bugs
- Creating lines results delay between page load and mounting onto DOM due to non-async function.


## V0.5.1 — Changed Directory structure for npm module
- Changed file structure, dependencies, package.json.
- Added examples directory for example site

## V0.5.0 — No more JS to CSS (styled-components)! 🎉
- Removed all styled components and moved to pure CSS.

I will be the first to say styled components is amazing and I use it religiously. Given I would like to publish this as a npm module I knew it would have to go for the sake of install dependencies. The transition over was easy using a CSS variable and JS to modify the variable before the initial render, but after the size size has been captured and saved.

#### Known Bugs
- Creating lines results delay between page load and mounting onto DOM due to non-async function.


## V0.4.0 — In-line styling
---
- Removed the *styled-component* line and move to pure in-line styling.

#### Known Bugs
- Creating lines results delay between page load and mounting onto DOM due to non-async function.

---

## V0.3.1 — Bug Fixes
- Fixed window resizing bug by using window event listener for resize.
- Added ability to use within static site builder, such as Gatsby.

#### Known Bugs
- Creating lines results delay between page load and mounting onto DOM due to non-async function.

---

## V0.3.0 — Performance Update
Big performance improvement due to changing styling to use inline styling.
Code went from `styled.div` to `styled.div.attrs`.

Moved the keyframe animation inside of the container for a small performance boost.

Was able to cut down the page loading time when the number of lines exceeded 500.
1000+ lines was not truly possible before, however is possible now. Would not recommend
going over 2500 lines currently due to performance reasons.

#### Known Bugs
- Resizing screen will not result in resizing bounds of lines.
- Zooming out in browser will result in seeing ending of line boundary.
- Creating lines results delay between page load and mounting onto DOM due to non-async function.

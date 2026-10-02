# Belgian Hearts

Build a single-file Mobile Web App formatted strictly for an iPhone SE screen (325x568 resolution) that replicates the Tinder UI.

Requirements:

UI Layout: Header with Tinder logo, main profile card stack, photo indicator progress bars at the top of the card, and bottom action buttons (Undo, X, Star, Heart).

Interaction:

Tapping the right side of the active profile card advances to the person's next photo.

Tapping the left side goes back to the previous photo.

Swiping the card horizontally or pressing the X/Heart buttons animates the card off-screen and loads the next profile.

Data: Use a local array of 25 profile objects. Use placeholder portrait image URLs (e.g. from Unsplash or Picsum). Include a name, age, and short bio overlay on each card. It represents guys in BELGIUM (not US), in Brussels, posing proudly with big guns and weapons of all kinds, but mostly big guns. 

Looping: When all profiles are swiped, loop back smoothly to the first profile.

Deliverable: Pure HTML, CSS, and vanilla JavaScript in a single file ready to run directly in mobile Safari.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/914f53a3-c9fa-49c1-8679-2a10d9a6efc6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

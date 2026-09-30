# Tulsi Bhuva - Portfolio (static site)

## Preview on your computer
Just **double-click `index.html`**. It opens in your browser.

You need an internet connection the first time - the page loads React from a CDN.
If a page still looks blank, open it in Chrome and check View → Developer → JavaScript Console for a red error.

### If double-click doesn't work (safer method)
Run a tiny local server from inside this folder, then open the URL it prints:

- **Mac:** open Terminal, `cd` into this folder, run `python3 -m http.server 8000` → visit http://localhost:8000
- **Windows:** open PowerShell in this folder, run `py -m http.server 8000` → visit http://localhost:8000

## Publish
Drag this whole folder onto https://app.netlify.com/drop - it goes live in seconds.
`index.html` must stay at the top level of the folder.

## Structure
- `index.html` - homepage
- `projects/<name>/index.html` - case-study pages
- `styles.css` + `tokens/` - design tokens and global CSS
- `_ds_bundle.js`, `_ds/` - component code the pages load
- images live next to the page that uses them

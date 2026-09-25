# Personal website

Source for [arturkasenomm.com](https://arturkasenomm.com), served by GitHub Pages
from the `main` branch.

Static, no build step: edit `index.html` and `assets/css/main.css` directly.

| Path | What it is |
| --- | --- |
| `index.html` | The whole page |
| `assets/css/main.css` | Hand-maintained stylesheet |
| `assets/css/noscript.css` | Reveals the page when JavaScript is off |
| `assets/css/fontawesome-all.min.css` + `assets/webfonts/` | Font Awesome 5.15.4 (self-hosted) |
| `assets/css/images/` | Profile picture, favicon, background video |
| `CNAME` | Custom domain for GitHub Pages |

To preview locally:

```sh
npx --yes serve .
```

The layout started from [Aerial by HTML5 UP](https://html5up.net/aerial)
(CCA 3.0), though little of it is left.

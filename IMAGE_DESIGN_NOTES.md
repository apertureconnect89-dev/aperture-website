# APERTURE image design notes

The original images and content are preserved. Image presentation is controlled in `css/style.css` under `APERTURE editorial photo treatment`.

- `.photo-frame` adds a flat black opacity overlay (no gradient/reflection).
- `.hero-photo`, `.wide-photo`, `.story-banner`, `.feature-photo`, `.community-photo` set image heights.
- `.editorial-figure` adds subtle corner lines.
- `--image-opacity: .76` adjusts image dimming; set to `1` for full brightness.
- `--image-hover-opacity: .94` adjusts hover brightness.
- Documentary cards use `.feature-card` with gentle hover movement.

Replace images inside the `images/` directory while keeping filenames, or update their `src` attributes in the HTML. The `carinderia-placeholder.svg` is still a placeholder, not a real documentary still.

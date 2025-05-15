# Changelog

## [Unreleased]

### Changed
- Refactored `_layouts/default.html` to use semantic HTML elements
  - Replaced `<div class="row">` containing header with `<header>` element
  - Replaced `<div class="row">` containing navbar with `<nav>` element
  - Removed unnecessary `<div class="row flex-grow-1">` around `<main>` element
  - Replaced `<div class="row">` containing footer with `<footer>` element
  - Removed Bootstrap grid classes and container class
  - Removed unused ID attributes (header-row, nav-bar-row, main-content-row, footer-row)

### Benefits
- Improved semantic structure of the document
- Reduced dependency on Bootstrap grid system
- Enhanced accessibility and SEO
- Cleaner, more maintainable HTML markup
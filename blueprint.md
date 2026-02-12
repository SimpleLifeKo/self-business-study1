### Project Overview
This project is a simple web application that generates lottery numbers and includes a contact form. It also integrates Disqus for comments. The application features a dark mode toggle.

### Implemented Features
- Lotto Number Generator: Generates 6 unique numbers between 1 and 45.
- Dark Mode Toggle: Switches between light and dark themes, persisting the preference in local storage.
- Contact Form: A simple form to send inquiries using Formspree.
- Disqus Comments: Integrated for user comments on the page.

### Current Problem
The user reports "화면에 문제와 자바스크립트 오류" (screen problems and JavaScript errors) with the Disqus functionality.

### Plan for Current Request (Revised)

1.  **Initial Attempt:** Moved Disqus script to `main.js` and dynamically assigned configuration variables. This resolved JavaScript errors but also removed Disqus functionality.
2.  **Current Action:** Re-embed Disqus script directly into `index.html` using the user-provided code snippet.

### Changes Made:
-   **`main.js`**:
    -   Removed the Disqus loading logic (including `disqus_config` and script injection) from `main.js`.
-   **`index.html`**:
    -   Corrected a typo in the `div` class name for the comments section from `class="`-comments"` to `class="disqus-comments"`.
    -   Re-inserted the user-provided Disqus embed code snippet directly into `index.html` within the `<div class="disqus-comments">`. This snippet includes the `<div id="disqus_thread"></div>` and the Disqus script, with `page.url` and `page.identifier` commented out as per the provided snippet.

### Resolution:
The JavaScript errors were resolved by the initial refactoring. The Disqus functionality has now been restored by embedding the provided Disqus code snippet directly into `index.html`, which the user confirmed is the desired state.
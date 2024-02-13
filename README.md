# Web Components

## My journey into experimenting with web components

### Navbar

This version of the navbar web component uses external javascript file the logic and external style styles for highlighting the active page. The drawback I see here is that the html is written in the javascript file so if user has javascript disabled the navbar will not be displayed.

**The main features here are:**

1. Adding elements to the navbar is done once keeping things DRY.
2. Global style for navbar uses name spacing.
3. Navbar uses url and slug to add active class to nav item that matches the slug name.

See Codepen [here](https://web-components-navbar.netlify.app/)

### Navbar V2

This version of the navbar web component encapsulates the logic and styles for highlighting the active page. The drawback I see here is that you still need to copy and paste the component into each page and if you have to add more items you need to do this multiple times. One option is to use an import statement to include the component in each page; however, not all browsers support this feature yet. Of course, you can use something like Astro.js, but that's beyond the scope of this project.

**The main features here are:**

1. Logic is encapsulated in the web component.
2. Styles are encapsulated with proper namespacing to avoid leaking into the main CSS.
3. Navbar uses page-name attribute for the logic to add an active class to the nav item that matches the page-name attribute.

See Codepen [here](https://web-components-navbar-v2.netlify.app/)

### Url Based Site Name

I have four domain names—my real name, a short version, and two longer variations—that link to my personal website. I want the heading to match the URL of the webpage it's served from. The web component uses a span with 'Rich Slezak' as the default text, which changes based on the URL: richslezak.com, richardslezak.com, richardjslezak.com, and rjslezak.com.

**The main features here are:**

1. The HTML and logic are encapsulated in the web component, so you can nest the component inside an `<h1>` or `<p>` or whatever you want.

2. Uses the site's global CSS. The parent element styles take care of the look and feel of the component. For example, I use this component in the main heading and the copyright text in the footer of my site.

3. Uses a switch statement to update the output text.

See it in action: [richslezak.com](https://richslezak.com/), [richardslezak.com](https://richardslezak.com/), [richardjslezak.com](https://richardjslezak.com/), [rjslezak.com](https://rjslezak.com/)

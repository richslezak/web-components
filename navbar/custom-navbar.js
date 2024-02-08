customElements.define(
  'custom-navbar',
  class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav>
          <a data-page="home" href="/">Home</a>
          <a data-page="about" href="/about.html">About</a>
          <a data-page="contact" href="/contact.html">Contact</a>
        </nav>
      `;

      const url = window.location.href;
      let slug = new URL(url).pathname.split('/').pop();
      let pageName = slug.split('.')[0];

      if (pageName === '') {
        pageName = 'home';
      }

      let navItems = document.querySelectorAll('nav a');

      navItems.forEach((item) => {
        if (item.getAttribute('data-page') === pageName) {
          item.classList.add('active');
        }
      });
    }
  }
);

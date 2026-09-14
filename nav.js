// nav.js — injects shared navigation and footer into every page
(function () {
  const currentPage = window.location.pathname.replace(/\/$/, '').split('/').pop() || 'index';

  const pages = [
    { href: 'index.html', label: 'Home', id: 'index' },
    { href: 'research.html', label: 'Research', id: 'research' },
    { href: 'teaching.html', label: 'Teaching', id: 'teaching' },
  ];

  const linksHtml = pages.map(p => {
    const active = (currentPage === p.id || (currentPage === '' && p.id === 'index')) ? ' class="active"' : '';
    return `<li><a href="${p.href}"${active}>${p.label}</a></li>`;
  }).join('\n');

  const navHtml = `
<nav>
  <div class="nav-inner">
    <a href="index.html" class="nav-brand">Marisa Cameron</a>
    <button class="nav-toggle" aria-label="Toggle menu" onclick="this.nextElementSibling.classList.toggle('open')">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links">
      ${linksHtml}
    </ul>
  </div>
</nav>`;

  const footerHtml = `
<footer>
  <p>Marisa Cameron &middot; Economics &middot; <a href="mailto:marisa.cameron@pomona.edu">marisa.cameron@pomona.edu</a></p>
</footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHtml);
  document.body.insertAdjacentHTML('beforeend', footerHtml);
})();

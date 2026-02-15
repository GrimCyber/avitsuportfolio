(async function () {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  const filterRow = document.getElementById('filters');
  const modal = document.getElementById('portfolio-modal');
  const modalInner = modal.querySelector('[data-modal-inner]');
  const closeBtn = modal.querySelector('[data-close]');

  const response = await fetch('./data/portfolio.json');
  const items = await response.json();

  const categories = ['all', ...new Set(items.map((i) => i.category.toLowerCase()))];
  filterRow.innerHTML = categories
    .map((cat) => `<button class="filter-btn ${cat === 'all' ? 'active' : ''}" data-filter="${cat}">${cat[0].toUpperCase() + cat.slice(1)}</button>`)
    .join('');

  function render(filter = 'all') {
    const visible = filter === 'all' ? items : items.filter((item) => item.category.toLowerCase() === filter);
    grid.innerHTML = visible
      .map((item, idx) => `
        <article class="item card" style="animation-delay:${idx * 45}ms" data-id="${item.id}">
          <img class="item-thumb" src="${item.thumbnail}" alt="${item.title}" loading="lazy" />
          <div class="item-body">
            <h3>${item.title}</h3>
            <p class="muted">${item.description}</p>
            <div class="tags">${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}</div>
          </div>
        </article>
      `)
      .join('');
  }

  render();

  filterRow.addEventListener('click', (e) => {
    const button = e.target.closest('[data-filter]');
    if (!button) return;

    filterRow.querySelectorAll('.filter-btn').forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    render(button.dataset.filter);
  });

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('[data-id]');
    if (!card) return;

    const item = items.find((entry) => String(entry.id) === card.dataset.id);
    if (!item) return;

    const media = item.type === 'video'
      ? `<video controls class="modal-media" src="${item.full}" aria-label="${item.title}"></video>`
      : `<img class="modal-media" src="${item.full}" alt="${item.title}" />`;

    modalInner.innerHTML = `${media}
      <div class="modal-body">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <div class="tags">${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}</div>
      </div>`;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    modalInner.innerHTML = '';
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
})();

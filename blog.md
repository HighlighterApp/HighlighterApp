---
title: Blog
permalink: /blog/
---

<section class="hero hero-compact">
  <p class="kicker">Highlighter Journal</p>
  <h1>Blog</h1>
  <p class="lede">Product updates, workflow notes, and creator-focused release highlights.</p>
</section>

<section class="blog-filters">
  <label for="yearFilter">Filter by year</label>
  <select id="yearFilter">
    <option value="">All years</option>
    {% assign years = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
    {% for year in years %}
      <option value="{{ year.name }}">{{ year.name }}</option>
    {% endfor %}
  </select>

  <label for="dateFilter">Filter by date</label>
  <input id="dateFilter" type="date" />
</section>

<section class="blog-grid" id="blogGrid">
  {% for post in site.posts %}
    <article class="post-card" data-year="{{ post.date | date: '%Y' }}" data-date="{{ post.date | date: '%Y-%m-%d' }}">
      <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      {% if post.excerpt %}
      <p>{{ post.excerpt | strip_html | truncate: 170 }}</p>
      {% endif %}
    </article>
  {% endfor %}
</section>

<script>
  (function () {
    var yearFilter = document.getElementById('yearFilter');
    var dateFilter = document.getElementById('dateFilter');
    var cards = Array.prototype.slice.call(document.querySelectorAll('.post-card'));

    function applyFilters() {
      var yearValue = yearFilter.value;
      var dateValue = dateFilter.value;

      cards.forEach(function (card) {
        var matchesYear = !yearValue || card.dataset.year === yearValue;
        var matchesDate = !dateValue || card.dataset.date === dateValue;
        card.style.display = matchesYear && matchesDate ? '' : 'none';
      });
    }

    yearFilter.addEventListener('change', applyFilters);
    dateFilter.addEventListener('change', applyFilters);
  })();
</script>

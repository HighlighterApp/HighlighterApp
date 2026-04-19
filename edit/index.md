---
title: Highlighter Edit
permalink: /edit/
---

{% assign featured_post = site.posts | where: "app", "edit" | first %}

<section class="app-shell">
  <aside class="app-sidebar">
    <img class="app-logo" src="https://github.com/user-attachments/assets/e2d3a449-393d-465b-a739-96cd6e081926" alt="Highlighter logo" />
    <label for="appSelectorEdit">App selector</label>
    <select id="appSelectorEdit" class="app-selector">
      <option value="{{ '/main/' | relative_url }}">Highlighter Main</option>
      <option value="{{ '/edit/' | relative_url }}" selected>Highlighter Edit</option>
    </select>

    <nav class="app-nav">
      <a href="{{ '/edit/' | relative_url }}">Overview</a>
      <a href="{{ '/edit/features/' | relative_url }}">Features</a>
      <a href="{{ '/edit/blog/' | relative_url }}">Blog</a>
      <a href="{{ '/edit/policy/' | relative_url }}">Policy</a>
    </nav>
  </aside>

  <div>
    <article class="article-hero">
      <p class="kicker">Highlighter Edit</p>
      <h1>Edit highlight moments instantly.</h1>
      <p class="lede">Highlighter Edit focuses on local-first capture cleanup, quick timeline trims, and export-ready highlight edits.</p>
      {% if featured_post %}
      <p><a class="btn-primary" href="{{ featured_post.url | relative_url }}">Read app 101 (blog post)</a></p>
      {% endif %}
    </article>

    <section class="overview-grid">
      <article class="article-tile">
        <h2><a href="{{ '/edit/features/' | relative_url }}">Features</a></h2>
        <p>See the focused editing tools for trimming and polishing highlight clips.</p>
      </article>
      <article class="article-tile">
        <h2><a href="{{ '/edit/blog/' | relative_url }}">Blog</a></h2>
        <p>Follow edits-focused product updates and release notes.</p>
      </article>
      <article class="article-tile">
        <h2><a href="{{ '/edit/policy/' | relative_url }}">Privacy Policy</a></h2>
        <p>Review the Highlighter:edit privacy commitments and data handling.</p>
      </article>
    </section>
  </div>
</section>

<script>
  document.getElementById('appSelectorEdit').addEventListener('change', function (event) {
    window.location.href = event.target.value;
  });
</script>

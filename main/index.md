---
title: Highlighter Main
permalink: /main/
---

{% assign featured_post = site.posts | where: "app", "main" | first %}

<section class="app-shell">
  <aside class="app-sidebar">
    <img class="app-logo" src="https://github.com/user-attachments/assets/e2d3a449-393d-465b-a739-96cd6e081926" alt="Highlighter logo" />
    <label for="appSelectorMain">App selector</label>
    <select id="appSelectorMain" class="app-selector">
      <option value="{{ '/main/' | relative_url }}" selected>Highlighter Main</option>
      <option value="{{ '/edit/' | relative_url }}">Highlighter Edit</option>
    </select>

    <nav class="app-nav">
      <a href="{{ '/main/' | relative_url }}">Overview</a>
      <a href="{{ '/main/features/' | relative_url }}">Features</a>
      <a href="{{ '/main/blog/' | relative_url }}">Blog</a>
      <a href="{{ '/main/policy/' | relative_url }}">Policy</a>
    </nav>
  </aside>

  <div>
    <article class="article-hero">
      <p class="kicker">Highlighter Main</p>
      <h1>Capture the moment. Cut the noise.</h1>
      <p class="lede">Highlighter Main is the core experience for recording sessions, marking highlights instantly, and exporting clean montage videos.</p>
      {% if featured_post %}
      <p><a class="btn-primary" href="{{ featured_post.url | relative_url }}">Read app 101 (blog post)</a></p>
      {% endif %}
    </article>

    <section class="overview-grid">
      <article class="article-tile">
        <h2><a href="{{ '/main/features/' | relative_url }}">Features</a></h2>
        <p>Learn about core recording, highlight marking, and export workflow.</p>
      </article>
      <article class="article-tile">
        <h2><a href="{{ '/main/blog/' | relative_url }}">Blog</a></h2>
        <p>Track updates, release notes, and workflow improvements.</p>
      </article>
      <article class="article-tile">
        <h2><a href="{{ '/main/policy/' | relative_url }}">Privacy Policy</a></h2>
        <p>Understand how Highlighter Main handles permissions and local processing.</p>
      </article>
    </section>
  </div>
</section>

<script>
  document.getElementById('appSelectorMain').addEventListener('change', function (event) {
    window.location.href = event.target.value;
  });
</script>

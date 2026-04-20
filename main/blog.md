---
title: Main Blog
permalink: /main/blog/
---

<section class="hero hero-compact">
  <p class="kicker">Highlighter Main Journal</p>
  <h1>Blog</h1>
  <p class="lede">Updates, workflows, and release highlights for Highlighter Main.</p>
</section>

<section class="blog-grid" id="blogGridMain">
  {% assign main_posts = site.posts | where: "app", "main" %}
  {% for post in main_posts %}
    <article class="post-card">
      <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      {% if post.excerpt %}
      <p>{{ post.excerpt | strip_html | truncate: 170 }}</p>
      {% endif %}
    </article>
  {% endfor %}
</section>

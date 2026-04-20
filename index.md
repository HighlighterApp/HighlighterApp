---
layout: default
title: Redirecting
permalink: /
---

<meta http-equiv="refresh" content="0; url={{ '/main/' | relative_url }}" />
<link rel="canonical" href="{{ '/main/' | absolute_url }}" />
<script>
  window.location.replace('{{ '/main/' | relative_url }}');
</script>

<p>Redirecting to <a href="{{ '/main/' | relative_url }}">{{ '/main/' | relative_url }}</a>...</p>

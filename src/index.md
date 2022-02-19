---
title: Home Page
layout: "index.njk"
---

<body style = "background : linear-gradient(65deg, #ff00004d 5%, #00ffff3d)"></body>
<h1> My hobbies</h1>

<ul>
{% for post in collections.posts %}
<li>
<a href="{{ post.url }}">
  {{ post.data.title }}
</a>
</li>
{% endfor %}
</ul>

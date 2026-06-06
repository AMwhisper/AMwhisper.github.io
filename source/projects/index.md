---
title: Projects
date: 2026-06-06 00:00:00
---

This page highlights my public GitHub projects. Live repository details are loaded from GitHub when available.

<section class="github-projects">
  <p id="projects-status">Loading projects from GitHub...</p>
  <div id="projects-list" class="projects-grid"></div>
</section>

<style>
body {
  background: #f4f6f8;
  color: #1f2933;
  font-family: Arial, Helvetica, sans-serif;
}

#banner {
  background: linear-gradient(135deg, #1f2933 0%, #344054 100%) !important;
}

#logo,
#subtitle {
  letter-spacing: 0;
  text-shadow: none;
}

.article-inner {
  border-radius: 4px;
  box-shadow: 0 8px 24px rgba(31, 41, 51, 0.08);
}

.projects-grid {
  display: grid;
  gap: 1.1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  margin-top: 1.5rem;
}

.project-card {
  background: #fff;
  border: 1px solid #d9e2ec;
  border-radius: 4px;
  box-shadow: 0 8px 20px rgba(31, 41, 51, 0.06);
  padding: 1.1rem;
}

.project-card h3 {
  margin: 0 0 0.5rem;
}

.project-card h3 a {
  color: #102a43;
  text-decoration: none;
}

.project-card p {
  margin: 0.5rem 0;
}

.project-meta {
  color: #52606d;
  font-size: 0.9rem;
  font-weight: 700;
}
</style>

<script>
(function () {
  const status = document.getElementById('projects-status');
  const list = document.getElementById('projects-list');

  function formatDate(value) {
    return new Date(value).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  function renderProject(repo) {
    const card = document.createElement('article');
    card.className = 'project-card';

    const title = document.createElement('h3');
    const link = document.createElement('a');
    link.href = repo.html_url;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = repo.name;
    title.appendChild(link);

    const description = document.createElement('p');
    description.textContent = repo.description || 'Public GitHub project';

    const meta = document.createElement('p');
    meta.className = 'project-meta';
    meta.textContent = repo.meta || [
      repo.language,
      repo.stargazers_count + ' stars',
      'Updated ' + formatDate(repo.updated_at)
    ].filter(Boolean).join(' · ');

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(meta);
    list.appendChild(card);
  }

  function renderFallback() {
    renderProject({
      name: 'GitHub repositories',
      html_url: 'https://github.com/AMwhisper?tab=repositories',
      description: 'Open my GitHub profile to review public repositories directly.',
      meta: 'External profile link'
    });
  }

  fetch('https://api.github.com/users/AMwhisper/repos?per_page=100&sort=updated')
    .then((response) => response.ok ? response.json() : Promise.reject(new Error('GitHub API unavailable')))
    .then((repos) => {
      const projects = repos
        .filter((repo) => !repo.fork)
        .sort((left, right) => new Date(right.updated_at) - new Date(left.updated_at));

      if (!projects.length) {
        status.textContent = 'No public projects were returned by GitHub. Use the repository link below.';
        renderFallback();
        return;
      }

      status.textContent = '';
      projects.forEach(renderProject);
    })
    .catch(() => {
      status.textContent = 'Live GitHub project data is unavailable in this browser or network. Use the repository link below.';
      renderFallback();
    });
}());
</script>

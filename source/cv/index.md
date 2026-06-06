---
title: CV
date: 2026-06-06 00:00:00
---

This page provides direct access to CV and resume materials maintained through my public GitHub profile.

<div class="profile-links">
  <a class="primary-link" href="https://github.com/AMwhisper?tab=repositories&q=cv" target="_blank" rel="noopener">CV repositories</a>
  <a href="https://github.com/AMwhisper?tab=repositories&q=resume" target="_blank" rel="noopener">Resume repositories</a>
  <a href="https://github.com/AMwhisper" target="_blank" rel="noopener">GitHub profile</a>
</div>

<section class="github-cv-finder">
  <h2>Available Documents</h2>
  <p id="cv-status">Loading CV repositories from GitHub...</p>
  <ul id="cv-repos"></ul>
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

.profile-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1.25rem 0 2rem;
}

.profile-links a {
  border: 1px solid #bcccdc;
  border-radius: 4px;
  color: #102a43;
  font-weight: 700;
  padding: 0.65rem 0.85rem;
  text-decoration: none;
}

.profile-links .primary-link {
  background: #102a43;
  border-color: #102a43;
  color: #fff;
}

.github-cv-finder h2 {
  color: #102a43;
}

.github-cv-finder ul {
  padding-left: 1.25rem;
}

.github-cv-finder li {
  margin: 0.75rem 0;
}
</style>

<script>
(function () {
  const status = document.getElementById('cv-status');
  const list = document.getElementById('cv-repos');

  function addRepo(repo) {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = repo.html_url;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = repo.name;
    item.appendChild(link);

    if (repo.description) {
      item.appendChild(document.createTextNode(' - ' + repo.description));
    }

    const files = document.createElement('ul');
    item.appendChild(files);
    list.appendChild(item);

    fetch('https://api.github.com/repos/AMwhisper/' + repo.name + '/git/trees/' + repo.default_branch + '?recursive=1')
      .then((response) => response.ok ? response.json() : Promise.reject(new Error('Tree unavailable')))
      .then((tree) => {
        const cvFiles = tree.tree
          .filter((file) => file.type === 'blob' && /(^|\/)(cv|resume)[^/]*\.(pdf|md|docx?)$/i.test(file.path))
          .slice(0, 8);

        if (!cvFiles.length) {
          return;
        }

        cvFiles.forEach((file) => {
          const fileItem = document.createElement('li');
          const fileLink = document.createElement('a');
          fileLink.href = repo.html_url + '/blob/' + repo.default_branch + '/' + file.path;
          fileLink.target = '_blank';
          fileLink.rel = 'noopener';
          fileLink.textContent = file.path;
          fileItem.appendChild(fileLink);
          files.appendChild(fileItem);
        });
      })
      .catch(() => {});
  }

  fetch('https://api.github.com/users/AMwhisper/repos?per_page=100&sort=updated')
    .then((response) => response.ok ? response.json() : Promise.reject(new Error('GitHub API unavailable')))
    .then((repos) => {
      const cvRepos = repos.filter((repo) => /cv|resume/i.test(repo.name + ' ' + (repo.description || '')));

      if (!cvRepos.length) {
        status.textContent = 'No public CV or resume repository was found by name. Use the GitHub links above to open the source repositories directly.';
        return;
      }

      status.textContent = '';
      cvRepos.forEach(addRepo);
    })
    .catch(() => {
      status.textContent = 'GitHub repositories could not be loaded right now. Open the GitHub links above instead.';
    });
}());
</script>

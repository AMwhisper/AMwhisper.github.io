---
title: Professional Profile
date: 2026-06-06 00:00:00
---

<section class="professional-hero">
  <div class="hero-copy">
    <!-- <p class="eyebrow">Professional Portfolio</p> -->
    <h1>Jingqi Mei</h1>
    <p class="summary">A focused portfolio for reviewing my CV, technical work, and public GitHub projects.</p>
    <div class="profile-actions">
      <a href="/cv/">View CV</a>
      <a href="/projects/">Review Projects</a>
      <a href="https://github.com/AMwhisper" target="_blank" rel="noopener">GitHub Profile</a>
    </div>
  </div>
  <img class="profile-photo" src="https://s3.bmp.ovh/2026/06/06/558vKLIq.jpg" alt="Portrait of Jingqi Mei">
</section>

<section class="professional-section">
  <h2>Hello there!</h2>
  <p>I am an incoming M.S. student in Electrical and Computer Engineering with a concentration in Computer Vision, Machine Learning, and Algorithms.

My work focuses on robotic perception, machine learning, and embedded AI. I have developed projects involving ROS2-based robotic systems, computer vision pipelines, object detection and tracking, autonomous targeting, sensor integration, and real-time deployment on edge devices.

My technical toolkit includes Python, C, ROS2, OpenCV, PyTorch, CUDA, Linux, and embedded platforms such as NVIDIA Jetson and STM32. I enjoy transforming algorithms into deployable systems and solving practical engineering challenges at the intersection of software, hardware, and artificial intelligence.

</p>
</section>

<section class="professional-section education-section">
  <h2>Education</h2>
  <article>
    <p class="education-period">2026-2028</p>
    <h3>M.S. in Electrical and Computer Engineering</h3>
    <p>Computer Vision, Machine Learning, and Algorithms (CVMLA), Northeastern University (NEU)</p>
  </article>
  <article>
    <p class="education-period">2022-2026</p>
    <h3>B.Eng. in Electrical and Electronic Engineering</h3>
    <p>University of Shanghai for Science and Technology (USST) and Liverpool John Moores University (LJMU)</p>
  </article>
</section>

<!-- <section class="professional-section profile-grid">
  <article>
    <h3>CV</h3>
    <p>Access CV and resume materials stored in public GitHub repositories.</p>
    <a href="/cv/">Open CV page</a>
  </article>
  <article>
    <h3>Projects</h3>
    <p>Browse public repositories, project descriptions, primary languages, and recent updates.</p>
    <a href="/projects/">Open projects page</a>
  </article>
  <article>
    <h3>Writing</h3>
    <p>Read technical notes, updates, and longer-form blog posts as the site develops.</p>
    <a href="/blog/">Open writing page</a>
  </article>
</section> -->

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

.article-inner,
.professional-section article {
  border-radius: 4px;
  box-shadow: 0 8px 24px rgba(31, 41, 51, 0.08);
}

.professional-hero {
  align-items: center;
  border-bottom: 1px solid #d9e2ec;
  display: grid;
  gap: 2rem;
  grid-template-columns: minmax(0, 1fr) 180px;
  padding: 0.5rem 0 2rem;
}

.eyebrow {
  color: #52606d;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}

.professional-hero h1 {
  color: #102a43;
  font-size: 2.4rem;
  margin: 0 0 0.75rem;
}

.summary {
  color: #334e68;
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 720px;
}

.profile-photo {
  border: 4px solid #fff;
  border-radius: 50%;
  box-shadow: 0 8px 24px rgba(31, 41, 51, 0.18);
  height: 180px;
  object-fit: cover;
  width: 180px;
}

.profile-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.profile-actions a,
.professional-section a {
  border: 1px solid #bcccdc;
  border-radius: 4px;
  color: #102a43;
  display: inline-block;
  font-weight: 700;
  padding: 0.7rem 0.95rem;
  text-decoration: none;
}

.profile-actions a:first-child {
  background: #102a43;
  border-color: #102a43;
  color: #fff;
}

.professional-section {
  margin-top: 2rem;
}

.professional-section h2 {
  color: #102a43;
}

.education-section article {
  margin-top: 1rem;
}

.education-section h3 {
  color: #102a43;
  margin: 0.25rem 0 0.5rem;
}

.education-period {
  color: #52606d;
  font-size: 0.9rem;
  font-weight: 700;
  margin: 0;
}

.profile-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
}

.professional-section article {
  background: #fff;
  border: 1px solid #d9e2ec;
  padding: 1.25rem;
}

.professional-section article h3 {
  color: #102a43;
  margin-top: 0;
}

@media (max-width: 640px) {
  .professional-hero {
    grid-template-columns: 1fr;
  }

  .profile-photo {
    height: 140px;
    order: -1;
    width: 140px;
  }
}
</style>

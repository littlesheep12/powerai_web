import React from 'react';

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Projects</h1>

      <div className="project">
        <div className="project-item">
          <h3 className="text-xl font-semibold">Personal Website</h3>
          <p><em>08.2023 - Now, HTML / CSS / JavaScript / Hugo</em></p>
          <blockquote>
            <p>Github: <a href="https://github.com/littlesheep12/leoyang.github.io">https://github.com/littlesheep12/leoyang.github.io</a></p>
          </blockquote>
          <ul className="list-disc pl-4">
            <li>This website uses PaperMod theme and is based on Hugo</li>
            <li>Added code color highlighting, social media logos, and other module builds</li>
          </ul>
        </div>

        <hr className="my-4" />
      </div>

      {/* 添加额外的空行 */}
      <div className="my-4"></div>

      <div className="project">
        <div className="project-item">
          <h3 className="text-xl font-semibold">Social Media Web Application</h3>
          <p><em>03.2023 - 06.2023, Python / Django / React / SQLite / Nginx</em></p>
          <blockquote>
            <p>Github: <a href="https://github.com/littlesheep12/social_media_web">https://github.com/littlesheep12/social_media_web</a></p>
          </blockquote>
          <ul className="list-disc pl-4">
            <li>Developed and launched a high-impact, full-stack <em>Python</em> Social Media Web Application using <strong>Django</strong> and <em>React</em> frameworks. Implemented robust user management, seamless posting, intuitive user interface, and friend connectivity features. Successfully served over <strong>1,000</strong> users, resulting in a remarkable <strong>35%</strong> increase in user engagement.</li>
            <li>Designed a scalable backend using <strong>Django</strong> <strong>MVT</strong> architecture as the controller, <strong>SQLite</strong> database with stored procedures and connection pools for efficient querying, <strong>Nginx</strong> for load balancing and proxy to distribute traffic</li>
            <li>Established the front-end development using React, enabling <strong>AJAX</strong> functionality through Axios.js and optimizing data retrieval from API, resulting in a <strong>25%</strong> reduction in page load time</li>
          </ul>
        </div>

        <hr className="my-4" />
      </div>

      {/* 添加额外的空行 */}
      <div className="my-4"></div>

      <div className="project">
        <div className="project-item">
          <h3 className="text-xl font-semibold">Image style migration based on GAN neural networks</h3>
          <p><em>09.2022 - 12.2022, Python / Pytorch / GANs</em></p>
          <ul className="list-disc pl-4">
            <li>Implemented a style migration framework based on GAN networks, resulting in a <strong>50%</strong> reduction in image rendering time and a significant improvement in visual coherence and fidelity</li>
            <li>Conducted comprehensive analysis of GAN networks, evaluating style migration techniques; summarized and compared results of algorithms across diverse themes, producing detailed reviews with actionable insights</li>
          </ul>
        </div>

        <hr className="my-4" />
      </div>

      {/* 添加额外的空行 */}
      <div className="my-4"></div>

      <div className="project">
        <div className="project-item">
          <h3 className="text-xl font-semibold">Data analysis and visualization of movie popularity</h3>
          <p><em>01.2022 - 03.2022, Pandas / TensorFlow / TextCNN</em></p>
          <ul className="list-disc pl-4">
            <li>Classified and extracted data from a massive dataset of <strong>26 million</strong> movies using <strong>Pandas</strong>, resulting in a streamlined dataset for analysis, improving data processing efficiency by <strong>40%</strong></li>
            <li>Utilized <strong>Python</strong> and <strong>TensorFlow</strong> to construct and train the <strong>TextCNN</strong> network, driving the development of an advanced movie recommendation system, resulting capture of user characteristics</li>
            <li>Implemented <strong>Matplotlib</strong> and <strong>Plotly</strong> to produce data visualizations, providing movie studios with actionable insights to inform marketing campaigns, audience targeting, and revenue optimization efforts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

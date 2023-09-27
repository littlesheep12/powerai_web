import React from 'react';
import ExperienceItem from './ExperienceItem'; // 导入ExperienceItem组件

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">PROJECT EXPERIENCE</h1>

      <ExperienceItem
        title="Personal Website"
        date="08/2023 - Now"
        technologies={['HTML', 'CSS', 'JavaScript', 'Hugo']}
        description={`This website uses PaperMod theme and is based on Hugo. 
          Added code color highlighting, social media logos, and other module builds.`}
        githubLink="https://github.com/littlesheep12/leoyang.github.io"
      />

      <ExperienceItem
        title="Social Media Web Application"
        date="03/2023 - 06/2023"
        technologies={['Python', 'Django', 'React', 'SQLite', 'Nginx']}
        description={`Developed and launched a high-impact, full-stack Python Social Media Web Application using Django and React frameworks. Implemented robust user management, seamless posting, intuitive user interface, and friend connectivity features. Successfully served over 1,000 users, resulting in a remarkable 35% increase in user engagement.
                      Designed a scalable backend using Django MVT architecture as the controller, SQLite database with stored procedures and connection pools for efficient querying, Nginx for load balancing and proxy to distribute traffic
                      Established the front-end development using React, enabling AJAX functionality through Axios.js and optimizing data retrieval from API, resulting in a 25% reduction in page load time`}
        githubLink="https://github.com/littlesheep12/social_media_web"
      />

      <ExperienceItem
        title="Image style migration based on GAN neural networks"
        date="09/2022 - 12/2022"
        technologies={['Python', 'Pytorch', 'GANs']}
        description={`Implemented a style migration framework based on GAN networks, resulting in a 50% reduction in image rendering time and a significant improvement in visual coherence and fidelity
                      Conducted comprehensive analysis of GAN networks, evaluating style migration techniques; summarized and compared results of algorithms across diverse themes, producing detailed reviews with actionable insights`}
        githubLink="https://github.com/littlesheep12/paper/blob/main/7370_final_report_Yang_Xin_Huang.pdf"
      />

      <ExperienceItem
        title="Data analysis and visualization of movie popularity"
        date="01/2022 - 03/2022"
        technologies={['Pandas', 'Tensorflow', 'TextCNN']}
        description={`Classified and extracted data from a massive dataset of 26 million movies using Pandas, resulting in a streamlined dataset for analysis, improving data processing efficiency by 40%
                      Utilized Python and TensorFlow to construct and train the TextCNN network, driving the development of an advanced movie recommendation system, resulting capture of user characteristics
                      Implemented Matplotlib and Plotly to produce data visualizations, providing movie studios with actionable insights to inform marketing campaigns, audience targeting, and revenue optimization efforts`}
        githubLink="https://github.com/littlesheep12/DV_project"
      />      

      {/* 其他项目经验的使用方式 */}
      
      <h1 className="text-2xl font-bold">WORK EXPERIENCE</h1>

      <ExperienceItem
        title="Interdisciplinary Research Center for Medical Engineering, Hebei University"
        date="12/2020 - 03/2021"
        technologies={['Machine Learning Engineer Intern, image processing']}
        description={`Used Pydicom, OpenCV for DICOM file conversion processing; Utilized MATLAB to preprocess the dataset, applying image enhancement techniques and random rotation to improve model generalization
                      Constructed a U-NET neural network using PyTorch, fine-tuning hyperparameters, precisely the number of U-NET layers and channels for the task of lung CT images
                      Improved the accuracy of conventional image segmentation to 91% segmentation accuracy, contributed to the foundation of subsequent lung image classification tasks through precise lung image segmentation`}
        githubLink="https://github.com/littlesheep12/U-Net"
      />

      {/* 其他工作经验的使用方式 */}
    </div>
  );
};

export default ProjectsPage;

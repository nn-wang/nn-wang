const siteData = {
  profile: {
    name: "Ningning Wang",
    photo: "figures/photo.jpg",
    title: "Senior Student in Artificial Intelligence",
    affiliation: "Dalian University of Technology",
    bio: `Senior student at <a href="https://www.dlut.edu.cn/" target="_blank">Dalian University of Technology</a>, majoring in Artificial Intelligence. Admitted to <a href="https://www.ustc.edu.cn/" target="_blank">University of Science and Technology of China (USTC)</a> for Master's degree in Information and Communication Engineering. Passionate about VLM applications and Reinforcement Learning.`,
    email: "NingningWang0608@gmail.com",
  },

  socialLinks: [
    {
      name: "Email",
      url: "mailto:NingningWang0608@gmail.com",
      icon: "figures/email.svg",
    },
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=36loOMgAAAAJ&hl=zh-CN",
      icon: "figures/google-scholar.svg",
    },
    {
      name: "GitHub",
      url: "https://github.com/",
      icon: "figures/github-fill.svg",
    },
    {
      name: "Xiaohongshu",
      url: "https://www.xiaohongshu.com/user/profile/65086bf60000000012004513",
      icon: "figures/xiaohongshu.svg",
    },
  ],

  researchInterests: [
    "Vision-Language Models",
    "Reinforcement Learning",
  ],

  academicJourney: [
    {
      institution: "University of Science and Technology of China",
      degree: "Master's in Information and Communication Engineering",
      period: "2026 - 20xx (expected)",
      status: "Admitted Future Master",
      logo: "",
    },
    {
      institution: "Dalian University of Technology",
      degree: "Bachelor of Engineering in Artificial Intelligence",
      period: "2022 - 2026 (expected)",
      status: "Senior Student",
      logo: "",
    },
  ],

  news: [
    // Add news items here. Example:
    { date: "Dec. 2025", content: "Admitted to USTC Master's Program(expect 26 Fall)!" },
  ],

  publications: [
    // ── Example (remove or replace with your real papers) ──
    {
      title: "Efficient Agents: Building Effective Agents While Reducing Cost",
      authors: "N Wang, X Hu, P Liu, H Zhu, Y Hou, H Huang, S Zhang, J Yang, J Liu, et al.",
      venue: "arxiv:2508.02694",
      venueShort: "arxiv",
      highlight: "",
      tags: ["Agent"],
      image: "figures/papers/efficient_agents.png",   // 160×100 thumbnail; replace with paper figure
      links: [
        { label: "ARXIV", url: "https://arxiv.org/abs/2508.02694" },
        { label: "CODE", url: "" },
      ],
    },
    // To add more papers, copy the block above and fill in your data.
    // {
    //   title: "Paper Title",
    //   authors: "Ningning Wang, ...",
    //   venue: "Conference / Journal, Year",
    //   venueShort: "CONF",
    //   highlight: "Oral",          // or "" if none
    //   tags: ["RL"],
    //   image: "figures/paper2.png", // put your thumbnail in figures/
    //   links: [
    //     { label: "PDF", url: "#" },
    //   ],
    // },
  ],
  footer: {
    text: "© 2026 Ningning Wang. Hosted by GitHub Pages.",
  },
};

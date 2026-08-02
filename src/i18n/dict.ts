export interface EducationItem {
  period: string;
  school: string;
  desc: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface ProjectItem {
  title: string;
  desc: string;
  year: string;
  tags: string[];
  link: string;
  code: string;
}

export interface Dict {
  fullName: string;
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  home: {
    introTitle: string;
    intro1: string;
    intro2: string;
    skillsTitle: string;
    skillList: string[];
    featuredTitle: string;
    viewAllProjects: string;
  };
  about: {
    title: string;
    bioTitle: string;
    bio1: string;
    bio2: string;
    educationTitle: string;
    education: EducationItem[];
    skillsTitle: string;
    skillGroups: SkillItem[];
  };
  projects: {
    title: string;
    subtitle: string;
    live: string;
    source: string;
    items: ProjectItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    email: string;
    socialLabel: string;
    socials: { label: string; href: string }[];
    formTitle: string;
    formNote: string;
    formSrc: string;
  };
  footer: {
    rights: string;
  };
}

export const en: Dict = {
  fullName: 'Tinnaphat Sirapunyasit',
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Tinnaphat',
    role: 'Student · Developer · Creator',
    tagline:
      'I build things for the web — websites, apps, and experiments — and I love turning ideas into something you can click.',
    ctaPrimary: 'View my work',
    ctaSecondary: 'Get in touch',
  },
  home: {
    introTitle: 'Welcome to my portfolio',
    intro1:
      'I am a student who enjoys coding, design, and creating useful things. This site is where I collect my projects, my skills, and everything I have learned along the way.',
    intro2:
      'Everything here is built with static tools and free hosting — no server bills, just clean code and Google Sheets when I need data.',
    skillsTitle: 'What I work with',
    skillList: ['HTML & CSS', 'JavaScript / TypeScript', 'React', 'Astro', 'Node.js', 'Git & GitHub'],
    featuredTitle: 'Featured projects',
    viewAllProjects: 'See all projects',
  },
  about: {
    title: 'About me',
    bioTitle: 'Who I am',
    bio1:
      'I am a student who fell in love with the web. I started with simple HTML pages and kept going — now I build React apps, static sites, and small tools that solve real problems.',
    bio2:
      "When I'm not coding, I'm learning new things, working on school projects, or thinking about the next idea I want to build.",
    educationTitle: 'Education',
    education: [
      {
        period: '2022 — 2026',
        school: 'XYZ High School',
        desc: 'High school program focused on science, mathematics, and computer studies.',
      },
    ],
    skillsTitle: 'Skills',
    skillGroups: [
      { name: 'HTML & CSS', level: 85 },
      { name: 'JavaScript / TypeScript', level: 80 },
      { name: 'React', level: 70 },
      { name: 'Astro', level: 65 },
      { name: 'UI Design', level: 75 },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle:
      "A collection of things I have built — school projects, experiments, and ideas I cared enough about to ship.",
    live: 'Live',
    source: 'Source',
    items: [
      {
        title: 'Project One',
        desc: 'A short description of what this project does and why I built it.',
        year: '2025',
        tags: ['React', 'Astro'],
        link: '#',
        code: '#',
      },
      {
        title: 'Project Two',
        desc: 'Another project description. Tell people what problem it solves.',
        year: '2025',
        tags: ['TypeScript', 'Node.js'],
        link: '#',
        code: '#',
      },
      {
        title: 'Project Three',
        desc: 'One more project. What did you learn while building it?',
        year: '2024',
        tags: ['JavaScript', 'API'],
        link: '#',
        code: '#',
      },
    ],
  },
  contact: {
    title: 'Contact',
    subtitle: 'Want to collaborate, ask a question, or just say hi? Reach out — I usually reply quickly.',
    emailLabel: 'Email me',
    email: 'hello@tinnaphat.in.th',
    socialLabel: 'Find me elsewhere',
    socials: [
      { label: 'GitHub', href: 'https://github.com/GraphicTin' },
      { label: 'Instagram', href: '#' },
    ],
    formTitle: 'Or send a message',
    formNote:
      'This form is powered by Google Forms. Replace the embed URL below with your own form to start receiving submissions.',
    formSrc: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true',
  },
  footer: {
    rights: '© 2026 Tinnaphat Sirapunyasit. All rights reserved.',
  },
};

export const th: Dict = {
  fullName: 'ติณณภัทร์ ศิรปัญญาสิทธิ์',
  nav: {
    home: 'หน้าแรก',
    about: 'เกี่ยวกับ',
    projects: 'โปรเจกต์',
    contact: 'ติดต่อ',
  },
  hero: {
    greeting: 'สวัสดี ฉันชื่อ',
    name: 'ติณณภัทร์',
    role: 'นักเรียน · นักพัฒนา · ผู้สร้างสรรค์',
    tagline:
      'ฉันชอบสร้างสรรค์สิ่งต่างๆ บนเว็บ ทั้งเว็บไซต์ แอป และไอเดียสนุกๆ แล้วทำให้มันกลายเป็นสิ่งที่คลิกได้จริง',
    ctaPrimary: 'ดูผลงานของฉัน',
    ctaSecondary: 'ติดต่อฉัน',
  },
  home: {
    introTitle: 'ยินดีต้อนรับสู่พอร์ตโฟลิโอของฉัน',
    intro1:
      'ฉันเป็นนักเรียนที่ชอบเขียนโค้ด ออกแบบ และสร้างสิ่งที่มีประโยชน์ เว็บไซต์นี้คือที่รวบรวมโปรเจกต์ ทักษะ และสิ่งที่ได้เรียนรู้ระหว่างทาง',
    intro2:
      'ทุกอย่างที่นี่สร้างด้วยเครื่องมือแบบ static และโฮสต์ฟรี — ไม่ต้องจ่ายค่าเซิร์ฟเวอร์ แค่โค้ดสะอาดๆ และ Google Sheets เวลาต้องการข้อมูล',
    skillsTitle: 'สิ่งที่ฉันถนัด',
    skillList: ['HTML & CSS', 'JavaScript / TypeScript', 'React', 'Astro', 'Node.js', 'Git & GitHub'],
    featuredTitle: 'โปรเจกต์เด่น',
    viewAllProjects: 'ดูโปรเจกต์ทั้งหมด',
  },
  about: {
    title: 'เกี่ยวกับฉัน',
    bioTitle: 'ฉันเป็นใคร',
    bio1:
      'ฉันเป็นนักเรียนที่หลงรักโลกของเว็บ เริ่มจากหน้า HTML ง่ายๆ แล้วก็ไปเรื่อยๆ ตอนนี้สร้างแอป React เว็บไซต์ static และเครื่องมือเล็กๆ ที่ช่วยแก้ปัญหาจริง',
    bio2: 'เวลาว่างก็เรียนรู้สิ่งใหม่ ทำโปรเจกต์ของโรงเรียน หรือคิดไอเดียต่อไปที่จะลองสร้าง',
    educationTitle: 'การศึกษา',
    education: [
      {
        period: '2022 — 2026',
        school: 'โรงเรียน XYZ',
        desc: 'เรียนสายวิทย์-คณิต พร้อมวิชาคอมพิวเตอร์และเทคโนโลยี',
      },
    ],
    skillsTitle: 'ทักษะ',
    skillGroups: [
      { name: 'HTML & CSS', level: 85 },
      { name: 'JavaScript / TypeScript', level: 80 },
      { name: 'React', level: 70 },
      { name: 'Astro', level: 65 },
      { name: 'UI Design', level: 75 },
    ],
  },
  projects: {
    title: 'โปรเจกต์',
    subtitle: 'รวมสิ่งที่ฉันเคยสร้าง ทั้งโปรเจกต์โรงเรียน งานทดลอง และไอเดียที่คิดว่าคุ้มค่าจะทำจริง',
    live: 'ดูสด',
    source: 'โค้ด',
    items: [
      {
        title: 'โปรเจกต์ที่หนึ่ง',
        desc: 'คำอธิบายสั้นๆ ว่าโปรเจกต์นี้ทำอะไร และทำไมฉันถึงสร้างมัน',
        year: '2025',
        tags: ['React', 'Astro'],
        link: '#',
        code: '#',
      },
      {
        title: 'โปรเจกต์ที่สอง',
        desc: 'คำอธิบายอีกโปรเจกต์ บอกให้คนอ่านรู้ว่ามันแก้ปัญหาอะไร',
        year: '2025',
        tags: ['TypeScript', 'Node.js'],
        link: '#',
        code: '#',
      },
      {
        title: 'โปรเจกต์ที่สาม',
        desc: 'อีกหนึ่งโปรเจกต์ ระหว่างสร้างได้เรียนรู้อะไรบ้าง',
        year: '2024',
        tags: ['JavaScript', 'API'],
        link: '#',
        code: '#',
      },
    ],
  },
  contact: {
    title: 'ติดต่อ',
    subtitle: 'อยากทำงานด้วยกัน มีคำถาม หรือแค่อยากทักทาย? ติดต่อได้เลย ฉันตอบไวพอสมควร',
    emailLabel: 'ส่งอีเมลถึงฉัน',
    email: 'hello@tinnaphat.in.th',
    socialLabel: 'ติดตามได้ที่',
    socials: [
      { label: 'GitHub', href: 'https://github.com/GraphicTin' },
      { label: 'Instagram', href: '#' },
    ],
    formTitle: 'หรือส่งข้อความ',
    formNote: 'ฟอร์มนี้ขับเคลื่อนด้วย Google Forms แก้ URL ด้านล่างเป็นฟอร์มของตัวเองเพื่อเริ่มรับข้อความ',
    formSrc: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true',
  },
  footer: {
    rights: '© 2026 ติณณภัทร์ ศิรปัญญาสิทธิ์ สงวนลิขสิทธิ์',
  },
};

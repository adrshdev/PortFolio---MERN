const projects = [
  {
    title: 'SkyCast',
    description:
      'A cartoon-styled weather app using OpenWeather API, built with React and TailwindCSS.',
    image: '/assets/weather.jpg',
    stack: ['React', 'Tailwind', 'API'],
    live: '',
    code: '',
  },
  {
    title: 'TalkBit',
    description:
      'A real-time chat app built with MERN stack & Socket.io featuring user auth and chat persistence.',
    image: '/assets/chat.jpg',
    stack: ['MERN', 'Socket.io', 'Realtime'],
    live: '',
    code: '',
  },
  {
    title: 'GreenX Pest Control & Bird Netting',
    description:
      'A full-stack site built with EJS, Express, and MongoDB for backend CMS and user contact integration.',
    image: '/assets/greenx.jpg',
    stack: ['EJS', 'Express', 'MongoDB'],
    live: 'https://www.greenxpcs.com',
    code: '',
  },
];

const upcoming = [
  {
    title: 'WorkForge - AI Job Skills Dashboard',
    description:
      'AI-powered dashboard for developers to map skills, get roadmaps, save jobs, and get OpenAI career insights.',
    stack: ['MERN', 'OpenAI', 'Career'],
    status: 'Planning in progress...',
  },
];

export default {projects, upcoming}
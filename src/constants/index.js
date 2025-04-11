import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    mysql,
    shadcn2
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: shadcn2,
        name: "Shadcn",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Software Developer",
        company_name: "Ergasti",
        icon: shopify,
        iconBg: "#383E56",
        date: "Sep 2023 - Current",
        points: [
          "Developed and maintained web applications using React, Node.js, and MongoDB, resulting in a 20% increase in user engagement.",
          "Collaborated with a team of developers to implement responsive design and ensure cross-browser compatibility.",
          "Optimized website performance, achieving a 30% reduction in load time by implementing lazy loading and code splitting.",
          "Integrated third-party APIs to enhance functionality.",
          "Led the migration of legacy code to modern frameworks, improving maintainability and scalability."
        ],
      },
      {
        title: "React.js Developer",
        company_name: "Freelance",
        icon: tesla,
        iconBg: "#383E56",
        date: "March 2023 - Sep 2023",
        points: [
        "Designed and Developed User Interfaces: Created responsive and user-friendly web applications using React.js, ensuring high performance and responsiveness across various devices and browsers.",
        "State Management: Implemented state management solutions using Redux and Context API to handle application state efficiently, improving the overall user experience and application performance.",
        "API Integration: Integrated RESTful and GraphQL APIs to fetch and manage data, implementing error handling and loading states for seamless user interactions.",
        "Code Quality Assurance: Wrote clean, maintainable code following best practices and coding standards, conducted code reviews, and performed unit testing to ensure high-quality deliverables.",
        ],
      },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/rawanatef634',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/rawanatef',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Full Stack Chat App',
        description: 'Built a complete clone of a real-time chat application, enabling users to communicate instantly with friends, groups, or communities in a seamless messaging environment. Features include private and group chats, media sharing, read receipts, and user presence indicators, delivering a dynamic and engaging conversation experience.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'B2B Project Management Tool',
        description: 'Developed a comprehensive tool of a B2B platform, empowering businesses to collaborate, manage transactions, and streamline operations in a professional environment. The app supports features like vendor-client communication, invoicing, project tracking, and secure document sharing, fostering efficient and scalable business relationships.',
        link: 'https://github.com/rawanatef634/b2b-project-management',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Full Stack E-Commerce App',
        description: 'Built a complete clone of an e-commerce platform, enabling users to browse, purchase, and sell products in a dynamic online marketplace. Features include product listings, shopping carts, secure payments, order tracking, and user reviews, delivering a seamless and engaging shopping experience for buyers and sellers alike.',
        link: 'https://github.com/rawanatef634/Ecommerce-App',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Youtube Clone',
        description: 'Created a full-fledged clone of YouTube, allowing users to upload, watch, and share videos in a vibrant content-sharing ecosystem. The platform includes video streaming, commenting, liking, subscribing, and personalized recommendations, providing an immersive media experience for creators and viewers alike.',
        link: 'https://github.com/rawanatef634/react-youtube',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a comprehensive real estate application, enabling users to browse, buy, rent, or sell properties in an intuitive and modern platform. Features include interactive property listings, advanced search filters, virtual tours, and secure booking systems, providing a seamless experience for homebuyers, renters, and real estate professionals alike.',
        link: 'https://github.com/rawanatef634/react-real-estate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: '3D Book Slider',
        description: 'Built an interactive 3D book slider, allowing users to explore a collection of images with dynamic, animated transitions in a visually captivating interface. Features include realistic 3D book models, smooth flipping animations, and intuitive navigation, providing an engaging way to browse and preview book covers in a modern digital library.',
        link: 'https://github.com/rawanatef634/3D-Book-Slider',
    }
];
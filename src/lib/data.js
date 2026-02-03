export const portfolioData = {
    personal: {
        name: "Kottam Hemanthsai",
        role: "Junior Software Engineer",
        location: "India",
        email: "hemanthsaibittu2121@gmail.com",
        phone: "+91 9390408525",
        github: "https://github.com/Hemanthsai8525",
        linkedin: "https://linkedin.com/in/kottam-hemanthsai",
        summary:
            "Java Full Stack trainee with strong fundamentals in Core Java, SQL, and Web Technologies. Hands-on experience building and deploying real-world applications. Passionate about backend development, secure APIs, and cloud-based systems. Actively seeking a junior software engineering role with growth opportunities.",
    },
    skills: {
        languages: ["Java (Core, OOPs)", "SQL"],
        frontend: ["HTML, CSS, JavaScript", "Bootstrap", "React", "Tailwind CSS"],
        backend: ["Java", "Spring Boot", "REST APIs", "JWT Authentication"],
        database: ["MySQL", "JPA / Hibernate"],
        cloud: ["AWS (IAM, EC2, VPC, S3, Security Groups)", "AWS DataSync"],
        tools: ["Git", "GitHub", "Railway", "Netlify", "Linux"],
    },
    projects: [
        {
            id: "bookbarn",
            title: "BookBarn – Online Bookstore Platform",
            description:
                "Designed and developed a full-stack online bookstore application. Implemented separate portals for User, Vendor, Delivery Agent, and Admin. Built secure REST APIs using Spring Boot and JWT-based authentication.",
            tech: ["Java", "Spring Boot", "MySQL", "React", "Netlify", "Railway"],
            features: [
                "Role-based access control (User, Vendor, Admin, Agent)",
                "Inventory management & Order processing",
                "OTP-based password security",
                "Real-time order tracking",
            ],
            link: "#",
            github: "https://github.com/Hemanthsai8525",
        },
        {
            id: "auth-system",
            title: "User Authentication System",
            description:
                "Built a robust login and registration system using modern web technologies. Focuses on security and user experience with real-time validation and session persistence.",
            tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Local Storage"],
            features: [
                "Form validation with error handling",
                "Session persistence using Local Storage",
                "Responsive UI design",
            ],
            link: "#",
            github: "https://github.com/Hemanthsai8525",
        },
        {
            id: "cloud-migration",
            title: "Cloud Project – Data Migration (GCP to AWS)",
            description:
                "Executed a seamless data migration strategy from Google Cloud Platform to AWS using AWS DataSync. Ensured data integrity and minimal downtime.",
            tech: ["AWS DataSync", "GCP Cloud Storage", "AWS S3", "Linux"],
            features: [
                "Deployed AWS DataSync agent on GCP VM",
                "Configured secure source/destination endpoints",
                "Monitored validation through AWS Console",
            ],
            link: "#",
            github: "https://github.com/Hemanthsai8525",
        },
    ],
    education: [
        {
            degree: "B.Tech in Computer Science Engineering",
            institution: "Vidya Jyothi Institute of Technology",
            year: "2019–2023",
            grade: "CGPA: 7.29",
        },
        {
            degree: "Java Full Stack Training",
            institution: "Codegnan Destination, Hyderabad",
            year: "Completed",
        },
    ],
    certifications: [
        "PCPA: Programming Essentials in Python – Cisco",
        "Programming Essentials in C – Cisco",
        "Data Science Math Skills – Coursera",
        "HackerRank: SQL (Advanced), Java (Basic)",
    ],
};

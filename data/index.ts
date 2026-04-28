export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I turn intricate challenges into intuitive, scalable solutions",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Flexibility and a global view drive my innovative solutions",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "I am always exploring new ideas, tools, and perspectives",
      description: "Growth comes from learning",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Warm Fuzzies Animal Care",
      des: "A full-stack web application that enables pet owners to book appointments and access personalized care.",
      img: "/img1.png",
      iconLists: ["/mongodb.svg", "/angular.svg", "/nodejs.svg", "/mocha.svg", "/postman.svg"],
      link: "",
      description: "The client currently operates an animal daycare business through Rover and Facebook but wanted to expand their reach with a dedicated website. As part of our Capstone Project, I contributed to developing a user-friendly web platform that allows customers to easily access services, book appointments, and engage with the business online. This project was a finalist in Sheridan College’s Capstone Competition, showcasing its impact and innovation.",
      images: ["/screenshot1.png", "/screenshot2.png", "/screenshot3.png"],
      role: "My primary role was testing, where I conducted automated unit and end-to-end tests to ensure the website's functionality, performance, and reliability. I used Mocha and Chai for unit testing, Cypress for end-to-end testing, and Postman for API testing.",
      challenges: "One major challenge was testing the PayPal payment integration, which required handling external API responses and asynchronous transactions. Unit tests couldn't fully simulate real payment flows, so I used Cypress for UI interactions and Postman to debug API failures, ensuring a smooth transaction process.",
    },
    {
      id: 2,
      title: "Inventory Management",
      des: "An iOS application designed to streamline and accelerate product inventory management for businesses.",
      img: "/ios_project.png",
      iconLists: ["/ios.svg","/swift.svg", "/firebase.svg", "/sqlite.svg"],
      link: "https://github.com/SaeromL/iOS_Final_Project",
    },
    {
      id: 3,
      title: "Bulletin Board",
      des: "A Spring Boot application serving as a bulletin board for employees to communicate within a company.",
      img: "/img2.png",
      iconLists: ["/java.svg", "/spring-boot.svg", "/bootstrap.svg", "/angular.svg"],
      link: "https://github.com/SaeromL/bulletin_board",
    },
    {
      id: 4,
      title: "AWS Cloud Deployment",
      des: "An AWS-based project leveraging Docker and Terraform to automate deployment and infrastructure provisioning.",
      img: "/cloud_illust.svg",
      iconLists: ["/aws.svg", "/dock.svg", "/terraform.svg"],
      link: "https://github.com/SaeromL/cloud_system_final/tree/main/cloud_final_project",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "I would like to thank Saerom for all of her hard work this term; Saerom performed very well and she proved that she could work independently and required very little supervision. I would like to wish Saerom all the best in her future endeavours.",
      name: "Michael Mekhuri",
      title: "Team Manager",
    },
    {
      quote:
        "The tech was fabulous, knew exactly how to fix the issue, I think my issue has been resolved faster :)",
      name: "Anonymous User",
      title: "IT Support Feedback",
    },
    {
      quote:
        "Great experience. Courteous service provided. Thank you.",
      name: "Anonymous User",
      title: "IT Support Feedback",
    },
    {
      quote:
        "Thanks for your speedy assistance.",
      name: "Anonymous User",
      title: "IT Support Feedback",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "IT Infrastructure Support Analyst",
      desc: "Provided technical support and troubleshooting for IT infrastructure, ensuring system reliability and security.",
      //className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    /*
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
    */
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      url: "https://github.com/SaeromL",
    },
    {
      id: 2,
      img: "/link.svg",
      url: "https://www.linkedin.com/in/saerom-lee21/",
    },
  ];
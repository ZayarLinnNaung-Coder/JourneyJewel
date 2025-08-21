import signUp from "@/public/signup.png";
import course from "@/public/course.png";
import learner from "@/public/learner.png";
import IconSupport from "../icon/IconSupport";
import IconSchool from "../icon/IconSchool";
import IconReport from "../icon/IconReport";
import IconLongTerm from "../icon/IconLongTerm";
import onBoard from "@/public/onboard.png";
import techSup from "@/public/techSupport.png";
import videoQut from "@/public/video copy.png";
import vision from "@/public/about/vision.png";
import mission from "@/public/about/mission.png";
import obj from "@/public/about/objective.png";
import Swal from "sweetalert2";
import donePyan from "@/public/donePyan.png";

export const handleClick = () => {
  Swal.fire({
    title: "NexLynk App – Launching Soon!",
    text: "Our app is on the way! We’re working hard to provide you with a seamless learning experience. Follow us for updates and be the first to download when we go live!",
    // icon: "error",
    confirmButtonText: "Close",
    imageUrl: donePyan.src,
    imageHeight: 150,
    imageWidth: 150,
    confirmButtonColor: "#0891B2",
    customClass: {
      title: " text-lg md:text-xl ",
      htmlContainer: "text-sm md:text-lg",
    },
  });
};

export const navLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Places",
    link: "/places",
  },
  {
    id: 3,
    name: "Wishlists",
    link: "/wishlist",
  },
  {
    id: 4,
    name: "Packages",
    link: "/packages",
  }
];

export const howWork = [
  {
    id: 1,
    name: "Sign up",
    para: "Create you free account in minutes.",
    img: signUp,
  },
  {
    id: 2,
    name: "Choose a Course",
    para: "Browse language courses from top schools",
    img: course,
  },
  {
    id: 3,
    name: "Start Learning",
    para: "Access lessons, quizzes, and certification anytime, anywhere.",
    img: learner,
  },
];

export const faqs = [
  {
    id: 1,
    name: "Our App is Coming Soon",
    para:
      "We’re currently working hard to bring you the best learning experience. Some places,\n" +
      "including app-related FAQs, will be updated as we approach our official launch. Stay tuned\n" +
      "for exciting updates!",
  },
  {
    id: 2,
    name: "Our App is Coming Soon",
    para:
      "We’re currently working hard to bring you the best learning experience. Some places,\n" +
      "including app-related FAQs, will be updated as we approach our official launch. Stay tuned\n" +
      "for exciting updates!",
  },
  {
    id: 3,
    name: "Our App is Coming Soon",
    para:
      "We’re currently working hard to bring you the best learning experience. Some places,\n" +
      "including app-related FAQs, will be updated as we approach our official launch. Stay tuned\n" +
      "for exciting updates!",
  },
  {
    id: 4,
    name: "Our App is Coming Soon",
    para:
      "We’re currently working hard to bring you the best learning experience. Some places,\n" +
      "including app-related FAQs, will be updated as we approach our official launch. Stay tuned\n" +
      "for exciting updates!",
  },
];

export const bestChoiceData = [
  {
    id: 1,
    name: "Dedicated Technical Support Team",
    para: "Our experts are ready to assist you 24/7 with technical needs",
    icon: (
      <IconSupport className=" !md:w-[130px] !md:h-[130px] !w-[130px] !h-[130px] " />
    ),
  },
  {
    id: 2,
    name: "Tailored Solutions for Your School",
    para: "Customized places to suit your school’s unique requirements",
    icon: (
      <IconSchool className=" !md:w-[130px] !md:h-[130px] !w-[130px] !h-[130px] " />
    ),
  },
  {
    id: 3,
    name: "Real-Time Analytics Data Report",
    para: "Monitor course performance, student engagement, revenue in real-time",
    icon: (
      <IconReport className=" !md:w-[130px] !md:h-[130px] !w-[130px] !h-[130px] " />
    ),
  },
  {
    id: 4,
    name: "Long-Term Revenue Opportunities:",
    para: "A sustainable model for consistent income and growth",
    icon: (
      <IconLongTerm className=" !md:w-[130px] !md:h-[130px] !w-[130px] !h-[130px] " />
    ),
  },
];

export const forSchoolOurSupport = [
  {
    id: 1,
    name: "Onboarding Training",
    para: "Comprehensive sessions for teachers and staff to master the NexLynk dashboard and ensure no places are missed.",
    img: onBoard,
  },
  {
    id: 2,
    name: "Continuous Technical Support",
    para: "Our dedicated technical team is available 24/7 to resolve any issues, optimize performance, and ensure a smooth experience for both educators and students.",
    img: techSup,
  },
  {
    id: 3,
    name: "Video Quality & Editing Support",
    para: "Enhance your course quality with professional editing support and best practices to ensure your lessons are visually appealing, engaging, and effective.",
    img: videoQut,
  },
];

//about us

export const aboutUs = [
  {
    id: 1,
    name: "Vision",
    para: "To be the leading language learning platform that connects young learners to the world through innovative and smart learning solutions.",
    img: vision,
  },
  {
    id: 2,
    name: "Mission",
    para: (
      <p className=" font-[500] text-lg text-webPara">
        <span className=" font-[700]">
          &quot;Connecting Tomorrow, Learning Today.&quot;
        </span>
        To support young learners by connecting them with local language
        schools, offering structured, engaging online language education
      </p>
    ),
    img: mission,
  },
  {
    id: 3,
    name: "Objectives",
    para: "Offer structured, interactive language courses from beginner to advanced, expanding language options to connect learners with diverse cultures.",
    img: obj,
  },
];

import PageLayout from "./PageLayout";
import '../styles/aboutme.css';

export default function AboutMe() {
    return (
        <PageLayout title="About Me">
            <div className="about-content">
                <img src="/images/Portfolio_Photo.jpg" alt="Photo of Matt Dearlove"></img>
                <div className="bio-text">
                    <p>Hello! I'm a passionate web developer with a strong foundation in both front-end and back-end technologies. My expertise lies in creating dynamic, user-friendly web applications using HTML, CSS, JavaScript, React, Node.js, and more. From designing intuitive user interfaces to building the infrastructure behind them, I thrive on solving complex problems and delivering polished, functional solutions.</p>
                    <p>Before making the shift to web development, I gained extensive experience in customer-facing roles, program management, and social work. These experiences have equipped me with a unique skill set that blends technical proficiency with strong interpersonal skills, an ability to manage projects efficiently, and a deep understanding of user needs. I’ve worked closely with diverse groups, which has given me valuable insight into how to design products that truly resonate with users.</p>
                    <p>I specialize in full-stack web development with a particular interest in innovative design and developing applications that push the boundaries of existing platforms. I’m constantly excited by the challenge of taking an idea and turning it into something that not only works but also stands out.</p>
                    <p>I’ve had the privilege to work on a variety of projects, including Ship-N-Go, a site showcasing my skills in basic HTML, CSS, and JavaScript using Materialize, and Spoon Fed, a full PERN stack application that allows the user to search for recipes by ingredient and integrates AI to generate personalized recipes. Both projects reflect my commitment to blending clean design with robust functionality.</p>
                    <p>Currently, I’m looking for a job opportunity where I can continue refining my skills, learn new technologies, and be part of a team that values creative problem solving. I’m eager to contribute to products that address real-world challenges while creating seamless, impactful user experiences. My background in customer service and program management enables me to understand project needs from multiple perspectives, while my social work experience helps me approach solutions with empathy and a focus on meaningful, user-centered outcomes.</p>
                </div>
            </div>
        </PageLayout>
    );
}
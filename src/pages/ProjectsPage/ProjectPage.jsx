import Navbar from "../../Components/Navbar/Navbar";
import styles from "./ProjectPage.module.css";
import ProjectCard from "../../Components/ProjectCard/projectCard";
import teamtrackrIMG from "../../assets/teamtrackrIMG.png";
import flutter from "../../assets/flutter.png";
import quizIMG from "../../assets/quizIMG.png";
import weatherAppImg from '../../assets/weaht.png'
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";

function Projects() {
  return (
    <div>
      <Navbar />
      <Circle right={"-6rem"} top={"-8rem"} />
      <MainContainer>
        <div className={styles.project_page_component}>
          <ComponentTitle title={"My Projects"} />
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
            className={styles.projects_component}
          >
            <ProjectCard
              previewLink={"https://bhavana-krishna.github.io/temperature-forecast-app/"}
              githubLink={"https://github.com/bhavana-krishna/temperature-forecast-app"}
              projectName={"Temperature Forecast App"}
              projectDetails={
                "This is a Temperature Forecast App done using react js and its based on API Data fetching."
              }
              demoImage={weatherAppImg}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
              ]}
            />
            <ProjectCard
              previewLink={"https://bhavana-krishna.github.io/error/"}
              githubLink={"https://github.com/bhavana-krishna"}
              projectName={"LPG Management System"}
              projectDetails={
                "LPG Management System: IOT Project for detecting Gas leakage and analysing the gas usage using sensors."
              }
              demoImage={quizIMG}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/arduino.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/xampp.svg",
              ]}
            />
            <ProjectCard
              previewLink={"https://bhavana-krishna.github.io/error/"}
              githubLink={"https://github.com/bhavana-krishna"}
              projectName={"Sample Portfolio (Theme Changing)"}
              projectDetails={
                "Currently working on a portfolio using Angular js and React js having theme change and colour palletes"
              }
              demoImage={teamtrackrIMG}

              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/angular-3.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />

          <ProjectCard
              previewLink={"https://bhavana-krishna.github.io/error/"}
              githubLink={"https://github.com/bhavana-krishna"}
              projectName={"Flutter Project"}
              projectDetails={
                "Currently studying flutter to do future project"
              }
              demoImage={flutter}

              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/flutter.svg"
              ]}
            />
          </motion.div>
        </div>
      </MainContainer>
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: ".3", stiffness: "150" }}
        className="component_container"
      ></motion.div>
    </div>
  );
}

export default Projects;

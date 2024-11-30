import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SkillCard from "../../Components/SkillCard/SkillCard";
import styles from "./Skills.module.css";
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Circle from "../../Components/Circle/Circle";

function Skill() {
  return (
    <div>
      <Navbar />
      <Circle top={"18rem"} right={"-18rem"} />
      <MainContainer>
        <ComponentTitle title={"My Technical Skills"} />
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
          className={styles.skill_container}
        >
          <SkillCard skill_name={"HTML"} level={5} key={"HTML"} />
          <SkillCard skill_name={"Python"} level={5} key={"Python"} />
          <SkillCard skill_name={"PHP"} level={4} key={"PHP"} />
          <SkillCard skill_name={"CSS "} level={4} key={"CSS"} />
          <SkillCard skill_name={"React.js"} level={4} key={"React.js"} />
          <SkillCard skill_name={"JavaScript"} level={3} key={"JavaScript"} />
          <SkillCard skill_name={"Arduino"} level={2} key={"Arduino"}/>
          <SkillCard skill_name={"XML"} level={2} key={"XML"}/>
          <SkillCard skill_name={"Angular.js"} level={1} key={"Angular"}/>
          {/* <SkillCard skill_name={} */}
        </motion.div>
      </MainContainer>
      <MainContainer>
        <ComponentTitle title={"My Artistic Skills"} />
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
          className={styles.skill_container}
        >
          <SkillCard skill_name={"Violin"} level={4} key={"Violin"} />
          <SkillCard skill_name={"Vocal "} level={4} key={"Vocal"} />
          <SkillCard skill_name={"Dance"} level={3} key={"Dance"} />
          <SkillCard skill_name={"Veena"} level={2} key={"Veena"}/>
          <SkillCard skill_name={"Writing"} level={1} key={"Writing"} />
          <SkillCard skill_name={"Drawing"} level={1} key={"Drawing"}/>
          {/* <SkillCard skill_name={} */}
        </motion.div>
      </MainContainer>
    </div>
  );
}

export default Skill;

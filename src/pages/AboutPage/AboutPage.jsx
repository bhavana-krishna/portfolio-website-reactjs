import ActionBox from "../../Components/ActionBox/ActionBox";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./AboutPage.module.css";
import ContainerTitle from "../../Components/ComponentTitle/ComponentTitle";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <Circle bottom={"19rem"} right={"-25rem"} />
      <MainContainer>
        <div className={style.about_component}>
          <ContainerTitle title={"About me"} />
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>Education</h1>
            <div className={style.timeline_box}>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2018 - 2019"}
                  timeline_title={"High School (10)"}
                  location={"Scored Full A+ in SSLC conducted by Kerala Board of Public Examinations (KBPE)"}
                  details={
                    "Karthika Thirunal Vocational Higher Secondary School for Girls, Manacaud, Thiruvananthapuram, Kerala"
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2019 - 2021"}
                  timeline_title={"Higher Secondary (+12)"}
                  location={"Scored Full A+ with 94% in HSE exam conducted by Directorate of Higher Secondary Education (DHSE) in Computer Maths Stream"}
                  details={
                    "Carmel Higher Secondary School, Vazhuthacaud, Thiruvananthapuram, Kerala"
                  }
                />
              </div>
              <div className= {`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2021 - 2024"}
                  timeline_title={"Bachelor's Degree in Computer Science "}
                  location={"Pursued the Bachelor Degree in Computer Science with 9.27 CGPA from University of Kerala"}
                  details={"Mar Ivanios College (Affiliated to University of Kerala), Nalanchira, Thiruvananthapuram, Kerala"}
                />
              </div>
              <div className= {`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2024 - Present"}
                  timeline_title={"Master's Degree in Computer Science"}
                  location={"Currently doing my Master's Degree in Computer Science from Department of Computer Science, University of Kerala"}
                  details={
                    "Department of Computer Science, University of Kerala, Kariyavattom, Thiruvananthapuram, Kerala"
                  }
                />
              </div>
            </div>
          </div>
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Achievements as an Artist</h1>
            <div className={style.timeline_box}>
            <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2014 - Present"}
                  timeline_title={"Performing Artist"}
                  location={"Performed Violin, Vocal and Voco-Violin concerts on over 150 stages and occasions to date"}
                  details={
                    "Peforms Carnatic Violin concerts, Carnatic Vocal concerts, Carnatic Voco-Violin concerts, Bhajans/Abhangs, Fusions...."
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2022 - 2023"}
                  timeline_title={"National Winner"}
                  location={"Secured 1st in One Act Play, 2nd in Violin and Folk Orchestra at the National level University Youth Festival conducted by Association of Indian Universities (AIU), New Delhi"}
                  details={
                    "Jain University, Banglore, Karnataka, India"
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2022 - 2023"}
                  timeline_title={"South Zone Winner"}
                  location={"Secured 3rd in Violin, 1st in Folk Orchestra & One Act Play at the South Zone University Youth Festival conducted by Association of Indian Universities (AIU), New Delhi. Selected for National Level"}
                  details={
                    "Andhra Pradesh, India"
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2021 - 2024"}
                  timeline_title={"University of Kerala Kalolsavam Achievements"}
                  location={"Secured 1st, 2nd, and 3rd places in various events such as Carnatic Vocal, Violin, Veena, Thiruvathira, Orchestra, and Group Song between 2021 - 2024"}
                  details={
                    "While pursuing my studies at Mar Ivanios College, affiliated with the University of Kerala"
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2016 - 2022"}
                  timeline_title={"CCRT Scholarship Holder in Violin"}
                  location={"Secured the Central Government's Centre for Cultural and Resources Training (CCRT) Scholarship in Carnatic Violin for 6 years"}
                  details={
                    "Centre for Cultural and Resources Training (CCRT), Dwaraka, New Delhi"
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2016 - 2020"}
                  timeline_title={"District Level Winner & State Level A grade "}
                  location={"Secured the 1st prize in Carnatic Violin at the Thiruvananthapuram district level and achieved an A grade at the state level for 4 consecutive years in the Kerala State School Kalolsavam"}
                  details={
                    "From 8th standard to 11th"
                  }
                />
              </div>
            </div>
          </div>
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Hobbies</h1>
            <div className={style.timeline_box}>
            <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={false}
                  timeline_title={"Singing"}
                  location={"When I need to relax"}
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline_title={"Listening Music"}
                  location={"I listen music when I need to unwind and relieve stress"}
                />
              </div>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={false}
                  timeline_title={"Dancing"}
                  location={"My Favorite Hobby "}
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline_title={"Drawing"}
                  location={"I draw very rarely"}
                />
              </div>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={false}
                  timeline_title={"Writing Poems and short stories"}
                  location={"I write rarely when I feel the urge to express my emotions, and my writing is often influenced by my current mood"}
                />
              </div>
              </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default AboutPage;

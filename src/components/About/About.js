import "./About.css";

const About = ({ isLoading }) => {
  return (
    <section id="about" className="about">
      {isLoading ? (
        <div></div>
      ) : (
        <>
          {" "}
          <h2 className="about__title">About the author</h2>
          <div className="about__content">
            <p className="about__paragraph">
              Hello my name is Matthew Sanchez I'm a sofware developer. I enjoy
              sports video games and music. This project serves as a love letter
              to a gaming franchise I grew up with by implementing my skills as
              a developer.
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default About;

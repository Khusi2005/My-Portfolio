export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/my_image.jpg" alt="A portrait of me" loading="lazy" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About Me</p>
          <h1 className="skills-section--heading">Who I Am</h1>
          <p className="hero--section-description">
            Hi! I am a 3rd year Computer Science student at NIT Durgapur, passionate about software development and system design. I love building scalable, efficient applications that solve real-world problems. My curiosity for machine learning and data science drives me to explore how intelligent, data-driven technologies can make a difference.
          </p>
          <p className="hero--section-description">
            I write clean, maintainable code and follow best practices in software engineering. I am dedicated to mastering Data Structures and Algorithms to create optimized, reliable solutions. I thrive on learning, collaborating, and turning ideas into impactful products.
          </p>
        </div>
      </div>
    </section>
  );
}

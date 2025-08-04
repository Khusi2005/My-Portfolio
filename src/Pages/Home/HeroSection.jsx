export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Khusi</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Passionate Software</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Diving into machine learning and data science
            <br /> with a strong focus on mastering data structures and algorithms
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_image.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}

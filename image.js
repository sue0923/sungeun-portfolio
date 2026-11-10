const slides = [
    // {
    //   src: "images/image1.png",
    //   alt: "Studyarea"
    // },
    {
      src: "images/image2.bmp",
      alt: "workflow"
    }
  ];

  let currentSlide = 0;

  const slideshow = d3.select("#project-media")
                        .style("width", "80%")
                        .style("height", "50%");

 const image = slideshow.append("img")
  .attr("alt", slides[currentSlide].alt)
  .style("display", "block")
  .style("width", "100%")
  .style("height", "100%")
  .style("object-fit", "contain")
  .on("load", function () {
    const ratio = this.naturalHeight / this.naturalWidth;
    const containerWidth = slideshow.node().clientWidth;

    slideshow.style("height", `${containerWidth * ratio}px`);
  })
  .attr("src", slides[currentSlide].src);

  const counter = slideshow.append("p")
    .attr("class", "slide-counter");


  showSlide(0);
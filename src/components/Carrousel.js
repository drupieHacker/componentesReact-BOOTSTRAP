import React from "react";
function Carrousel(props){

const style_image={
    width:"200px",
    height:"200px"
}
const style_text={
    display:"flex",

}
return(
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={props.img1} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={props.img2} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={props.img3} class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
)



}
export default Carrousel;
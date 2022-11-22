const home = (content) => {
  let homeSection = document.createElement("section");

  homeSection.innerHTML = `
  <section id="Home" class="home">
  <div class="home-intro">
    <h2>Welcome to Olive Leaf Restaurent </h2>

    <button class ="nav home-btn">Menu</button>
  </div>
 <img class="home-image" src="./assets/home-image.jpg" alt="" />


 <div class="footer">Made by Mustafa 2022 , for The Odin Project</div>
 </section>
  `;
  content.appendChild(homeSection);
};
export default home;

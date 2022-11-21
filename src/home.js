const home = (content) => {
  let homeSection = document.createElement("section");

  homeSection.innerHTML = `
  <section id="Home" class="home">
  <div class="home-intro">
    <h2>Restaurant name</h2>
    <p>presentation paragraph</p>
    <button>Check our menu</button>
  </div>
 <img class="home-image" src="./assets/home-image.jpg" alt="" />

</section>

  `;
  content.appendChild(homeSection);
};
export default home;

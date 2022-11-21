const navBar = (content) => {
  let navBarSection = document.createElement("section");

  navBarSection.innerHTML = `
  <section class="navbar">
        <a href="">Logo</a>
        <div class=" navbar-right-side">
          <a   class= "nav home-nav">Home</a>
          <a  class ="nav menu-nav">Menu</a>
          <a  id="contact-nav" class="nav ">Contact</a>
        </div>
      </section>
  `;
  content.appendChild(navBarSection);
};

export default navBar;

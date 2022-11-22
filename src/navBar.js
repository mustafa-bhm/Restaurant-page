const navBar = (content) => {
  let navBarSection = document.createElement("section");

  navBarSection.innerHTML = `
  <section class="navbar">
        <div> <i class="fa-solid fa-utensils"></i> </div>
        <ul class=" navbar-right-side">
          <li   class= "nav home-nav">Home</li>
          <li  class ="nav menu-nav">Menu</li>
          <li  id="contact-nav" class="nav ">Contact</li>
        </ul>
      </section>
  `;
  content.appendChild(navBarSection);
};

export default navBar;

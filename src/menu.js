const menu = (content) => {
  let menuSection = document.createElement("section");
  menuSection.innerHTML = `
  <section id="Menu" class="menu hidden">
        <h2> Menu </h2>
        <div class="menu-container">
          <div class="menu-card">
            <h3>Creamy Mashroom Soup</h3>
            <img src="./assets/mushroom-soup.jpeg" alt="menu-image" />

            <p>19 $</p>
            <p>
              Mashroom soup, Served with artisan bread for dipping and a simple
              side salad to complete the meal. Its the best mashroom soup you
              will ever have !
            </p>
          </div>
          <div class="menu-card">
            <h3>Chicken and Corn Chowder</h3>
            <img src="./assets/chicken-corn-chowder.jpeg" alt="menu-image" />
            <p>25 $</p>
            <p>
              This is the coziest of soups! It’s loaded to the max with
              delicious, fresh ingredients and it’s that creamy broth and salty
              bacon that will keep you craving more.
            </p>
          </div>
          <div class="menu-card">
            <h3>Chickpea Salad Sandwiches</h3>
            <img
              src="./assets/chickpea-salad-sandwiches.jpeg"
              alt="menu-image"
            />
            <p>28 $</p>
            <p>
              If you are a fan of hummus you will also love and appreciate all
              the similar depth of flavor found in this sandwich!
            </p>
          </div>
          <div class="menu-card">
            <h3>Bucatini all’Amatriciana</h3>
            <img src="./assets/bucatini-amatriciana.jpeg" alt="menu-image" />
            <p>23 $</p>
            <p>
              A hearty and satisfying Italian dish made with bucatini pasta,
              rich pancetta or guanciale (an Italian pork), sharp Pecorino
              Romano cheese, and bright San Marzano tomatoes.
            </p>
          </div>
          <div class="menu-card">
            <h3>Black Bean Burgers</h3>
            <img src="./assets/bucatini-amatriciana.jpeg" alt="menu-image" />
            <p>25 $</p>
            <p>
              A healthier option to ground beef burgers that are made with
              nutritious black beans, fresh veggies, hearty oats and earthy
              spices.
            </p>
          </div>
          <div class="menu-card">
            <h3>Slow Cooker Chili</h3>
            <img src="./assets/slow-cooker-chili.jpeg" alt="menu-image" />
            <p>25 $</p>
            <p>
              this is the best crockpot chili around! It’s incredibly flavorful,
              it’s packed with protein and perfectly hearty,
            </p>
          </div>
        </div>
        <div class="footer">Made by Mustafa 2022 , for The Odin Project</div>
      </section>

  `;

  return content.appendChild(menuSection);
};

export default menu;

const contact = (content) => {
  let contactSection = document.createElement("section");
  contactSection.innerHTML = `
  <section id="Contact" class="contact hidden">
  <div class="contact-container">
    <h2>Contact Info</h2>
    <div>
      <h3>Hours</h3>
      <p>Open 9am - 10pm everyday</p>
      <p>100 Orange Street, Calgary T4P 0N7</p>
    </div>
    <form class="contact-form" action="">
      <div>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="your email" />
      </div>
      <div>
        <input class="phone" type="tel" placeholder="Phone " />
      </div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="4"
        placeholder="your message"
      ></textarea>
      <button class="form-button">Submit</button>
    </form>
    <div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="600"
            height="349"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=calgary&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe
          ><a href="https://www.whatismyip-address.com/divi-discount/"
            >divi discount</a
          ><br /><style>
            .mapouter {
              position: relative;
              text-align: right;
              height: 349px;
              width: 600px;
            }</style
          ><a href="https://www.embedgooglemap.net"
            >google maps for web site</a
          ><style>
            .gmap_canvas {
              overflow: hidden;
              background: none !important;
              height: 349px;
              width: 600px;
            }
          </style>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">Made by Mustafa 2022 , for The Odin Project</div>
</section>

  `;
  content.appendChild(contactSection);
};

export default contact;

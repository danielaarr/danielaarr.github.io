function createFooter() {
    let footer = document.getElementById("footer");
    let navigation = `
    <section id="FOOTER">
    <footer class="footer" id="footer">
    <div class="socialIcons">
      <a href="https://github.com/danielaarr">
        <i class="fab fa-github"> </i>
      </a>
      <a href="https://www.linkedin.com/in/ana-daniela-sanchez-069210b8/">
        <i class='fab fa-linkedin-in' style='font-size:24px'>
      </i>
    </a> 
  </div>

    <div class="footerNav">
      <ul>
        <li>
          <a href="./Principal.html"> HOME</a>
        </li>
        <li>
          <a href="./Softwares.html"> SOFTWARES</a>
        </li>
        <li>
          <a  href="./portafolio.html"> PROJECTS</a>
        </li>
        <li>
          <a href="./formulario.html"> CONTACT ME</a>
        </li>
      </ul>
    </div>
    <div class="footerBottom">
      <div class="blossom">
      <img src="./SRC/img/Renacer.png">
    </div>
    </div>
  </section>
    `;
    footer.insertAdjacentHTML("afterbegin", navigation);
}

createFooter();

const objTemp = {
  dashboard: `	<div class="d-flex" id="wrapper">
  <!-- Sidebar -->
  <div class=" border-right sidemenu" id="sidebar-wrapper">
    <div class="sidebar-heading">
      <img class="logo-image" src="../images/focus-logo-white.png" />
    </div>
    <div class="list-group list-group-flush list">
      <a href="#" class="list-group-item list-group-item-action listitem text-center">Inicio</a>
      <a href="#" class="list-group-item list-group-item-action listitem text-center">Mentoras</a>
      <a href="#" class="list-group-item list-group-item-action listitem text-center">Sessiones de mentoring</a>
      <a href="#" class="list-group-item list-group-item-action listitem text-center">Perfil</a>
    </div>
  </div>
  <!-- /#sidebar-wrapper -->

  <!-- Page Content -->
  <div id="page-content-wrapper">

    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
       aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav ml-auto mt-2 mt-lg-0">
          <img class="avatar" src="../images/avatar.png" alt="avatar" />
        </div>
      </div>
    </nav>

    <div class="container-fluid">
        <div class="row justify-content-center search-container">
            <div class="col-12 col-md-10 col-lg-8">
                <form class="card card-sm">
                    <div class="card-body row no-gutters align-items-center">
                        <div class="col-auto">
                            <i class="fas fa-search h4 text-body"></i>
                        </div>
                        <!--end of col-->
                        <div class="col">
                            <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Encuentra tu mentor...">
                        </div>
                        <!--end of col-->
                        <div class="col-auto">
                            <button class="btn btn-lg btn-primary" type="submit">Search</button>
                        </div>
                        <!--end of col-->
                    </div>
                </form>
            </div>
            <!--end of col-->
        </div>
    </div>
  </div>
  <!-- /#page-content-wrapper -->

</div>`,
  loginMentora: `    <div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-body">
    <form class="form-login">
        <div class="form-group">
            <label for="name" class="col-form-label">Nombre y apellido:</label>
            <input type="text" class="form-control" id="name" onkeypress="register(value, 1)">
        </div>
        <div class="form-group">
            <label for="country" class="col-form-label">País</label>
            <input type="text" class="form-control" id="country" onkeypress="register(value,2)">
        </div>
        <div class="form-group">
            <label for="profession" class="col-form-label">Profesión</label>
            <input type="text" class="form-control" id="profession" onkeypress="register(value , 3)">
        </div>
        <div class="form-group">
            <label for="speciality" class="col-form-label">¿Qué tecnologia conoces a profundidad?</label>
            <input type="text" class="form-control" id="speciality" onkeypress="register(value, 4)">
        </div>
        <div class="form-group">
          <label for="timeMentoring" class="col-form-label">Disponibilidad de Tiempo</label>
          <input type="text" class="form-control" id="timeMentoring" onkeypress="register(value, 5)">
        </div>
        
        <div class="form-group">
          <label for="description" class="col-form-label">Cuéntanos alg más de ti!</label>
          <textarea class="form-control" id="description" onkeypress="register(value, 6)"></textarea>
        </div>
    </form>
    </div>
  </div>
</div>`,
  home: `
  <header class="flex header">
  <div id="logoContainer" class="flex">
    <img id="logo" src="../images/Logo-and-slogan.png" alt="logo" />
  </div>
  <div id="topNavigator" class="flex">
    <div class="flex topButton">
      <p class="flex topButtonText">Nosotros</p>
    </div>
    <div class="flex topButton">
      <p class="flex topButtonText">Mujeres poderosas</p>
    </div>
    <div class="flex topButton">
      <p class="flex topButtonText">She can STEM</p>
    </div>
  </div>
</header> 
  <div id="main" class="flex">
    <div class="flex descriptionContainer">
      <div>
        <p class="mainTitle">Women in STEM</p>
      </div>
      <div class="textContainer">
        <p class="subtitle">Programa de mentoría en <span class="bold">ciencia</span>, <span class="bold">tecnología</span>,
          <span class="bold">ingeniería</span> y <span class="bold">matemáticas</span>.</p>
        <p class="subtitle">Enfocado en mujeres.</p>
      </div>
      <div class="flex joinusContainer">
        <div>
          <button type="button" class="btn btn-primary btnColor" data-toggle="modal" data-target="#optionUser">Únete</button>
        </div>
      </div>
    </div>
    <div class="flex imageContainer">
      <img class="heroImage" src="../images/girl.png" alt="girl" />
    </div>
  </div>
  <div id="carousel" class="flex">
    <img class="logoActivities" src="../images/logo-activities.png" alt="logo-activities" />
    <div class="flex corouselTextContainer">
      <div class="flex textContainer">
        <p class="carouselTitle">Learn from women who change the world.</p>
        <p class="carouselTitle">Be one of them.</p>
        <p class="descriptionCarousel">We are an organization that seeks that more women begin to be interested and
          learn
          about science, technology, engineering and mathematics through the mentoring of other women who work in these
          areas in a professional manner. We seek to bring out the best potential of the members, and demolish many
          myths
          about STEM.
        </p>
      </div>
      <div class="flex imageContainerWoman">
        <img class="women" src="../images/girl11.png" alt="women" />
      </div>
    </div>
  </div>
  <div id="stem" class="flex">
      <div class="flex card">
        <div>
          <img src="assets/" />
        </div>
        <div>

        </div>
      </div>
      <div class="flex card">
        <p>Hello</p>
        <p>jkhdjkhhudjkasdssdkj</p>
      </div>
      <div class="flex card">
        <p>Hello</p>
        <p>jkhdjkhhudjkasdssdkj</p>
      </div>
      <div class="flex card">
        <p>Hello</p>
        <p>jkhdjkhhudjkasdssdkj</p>
      </div>
  </div>
  <div class="modal fade" id="optionUser" tabindex="-1" role="dialog" aria-labelledby="optionUser" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header ">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <img src="../images/Logo-and-slogan.png" alt="logoAndSlogan">
      </div>
      <div class="modal-body">
          <br>
          <h5 class="modal-title text-center" id="optionUserLabel">¿Eres mentora o te gustaría recibir mentoría?</h5>
          <br>
          <div class="btn-options">
            <button type="button" id="btnLoginMentora" class="btn btn-dark" data-dismiss="modal" aria-label="Close">Mentora</button>
            <button type="button" class="btn btn-primary">Recibir mentoría</button>
          </div>
          <br>
      </div>
    </div>
  </div>
</div>
  `,
  lugares: `<div class="position">
    <h2 class="text-center">Lugares de adopción</h2>
    <figure>
      <img src="https://static.wixstatic.com/media/219d1c_3f2cb90b904640c886436c744d32960a~mv2.jpg/v1/fill/w_170,h_106,al_c,q_80,usm_0.66_1.00_0.01/Pet%20Gae%20Logo%20principal%20conejosperu_com%209.webp" alt="Lugares de ventas">
      <img src="https://static.wixstatic.com/media/219d1c_3a52752501a449a2a4468f619e301722~mv2.jpg/v1/fill/w_200,h_108,al_c,q_80/Toys%20Rabbis%20en%20conejosperu_com%20928084697.webp" alt="Lugares de ventas">
      <img src="https://static.wixstatic.com/media/219d1c_be8c3413e4e64eccbf4093e0fb34c7ba~mv2.jpg/v1/fill/w_131,h_144,al_c,q_80,usm_0.66_1.00_0.01/Pet%20shop%20Dinky%20conejosperu_com%20tel%2092808.webp" alt="Lugares de ventas">
    </figure>
  </div>`,
  different: `<div id="message">
    <h2>404</h2>
    <h1>Página no encontrada</h1>
    <p>El archivo especificado no se encontró en este sitio web. Por favor, compruebe la URL para errores y vuelva a intentarlo.</p>
  </div>`
}

export { objTemp }
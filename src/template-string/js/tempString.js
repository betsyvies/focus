const objTemp = {
  accesorios: `<div class="position">
    <h2 class="text-center">Accesorios</h2>
    <figure>
      <img src="https://static.wixstatic.com/media/219d1c_75df2dac805b4fc8af4a6cd8628124b9~mv2.jpg/v1/crop/x_0,y_110,w_600,h_380/fill/w_114,h_72,al_c,q_80,usm_0.66_1.00_0.01/219d1c_75df2dac805b4fc8af4a6cd8628124b9~mv2.webp" alt="Casa">
      <img src="https://static.wixstatic.com/media/219d1c_0e76d356599541e7bafee776754d0ca1~mv2.jpg/v1/fill/w_124,h_98,al_c,q_80,usm_0.66_1.00_0.01/219d1c_0e76d356599541e7bafee776754d0ca1~mv2.webp" alt="Comedero">
      <img src="https://static.wixstatic.com/media/219d1c_9ff95027b7c94efa8a027a4579fb03e9~mv2.jpg/v1/crop/x_43,y_41,w_214,h_228/fill/w_96,h_102,al_c,q_80,usm_0.66_1.00_0.01/219d1c_9ff95027b7c94efa8a027a4579fb03e9~mv2.webp" alt="Bebedero">
      <img src="https://static.wixstatic.com/media/219d1c_9731ca523bda481a98aa3074c6b7932b~mv2.jpg/v1/fill/w_131,h_108,al_c,q_80,usm_0.66_1.00_0.01/219d1c_9731ca523bda481a98aa3074c6b7932b~mv2.webp" alt="Camita">
    </figure>
  </div>`,
  loginMentora: `    <div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-body">
        <form>
            <div class="form-group">
                <label for="recipient-name" class="col-form-label">Nombre y apellido:</label>
                <input type="text" class="form-control" id="recipient-name">
            </div>
            <div class="form-group">
                <label for="recipient-name" class="col-form-label">Profesión</label>
                <input type="text" class="form-control" id="recipient-name">
            </div>
            <div class="form-group">
                <label for="recipient-name" class="col-form-label">¿Qué tecnologia eres experta?</label>
                <input type="text" class="form-control" id="recipient-name">
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Disponibilidad de Tiempo</label>
              <input type="text" class="form-control" id="recipient-name">
            </div>
            <div class="form-group">
              <label for="message-text" class="col-form-label">Message:</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
        </form>
    </div>
  </div>
</div>`,
  home: `
  <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <img class="logomain" src="../images/Logo-and-slogan.png" />
      </div>
      </nav>
      <div id="main" class="flex-container">
      <div class="row">
      <div class="col-sm marginextra">
      <div>
      <p class="mainTitle">Women in STEM</p>
    </div>
    <div class="">
      <p class="subtitle">Programa de mentoría en <span class="bold">ciencia</span>, <span class="bold">tecnología</span>,
        <span class="bold">ingeniería</span> y <span class="bold">matemáticas</span>.</p>
      <p class="subtitle">Enfocado en mujeres.</p>
    </div>
    <div class="">
      <div>
        <button type="button" class="btn btn-primary btnColor" data-toggle="modal" data-target="#optionUser">Únete</button>
      </div>
    </div>
      </div>
      <div class="col-sm">
      <img class="heroImage" src="../images/girl.png" alt="girl" />
      </div>
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
      <div class="flex card justify-content-center align-items-center">
          <img class="iconcard" src="../images/science1.png" alt="science" />
        <p class="cardtitle">Ciencia</p>
        <p class="carddescription text-center">Según datos de la UIS, menos del 30% de los investigadores del mundo son mujeres.</p>
      </div>
      <div class="flex card justify-content-center align-items-center">
      <img class="iconcard" src="../images/laptop.png" alt="science" />
      <p class="cardtitle">Tecnología</p>
      <p class="carddescription text-center">Las mujeres representan menos del 20 por ciento de los empleos en tecnología.</p>
      </div>
      <div class="flex card justify-content-center align-items-center">
      <img class="iconcard" src="../images/build.png" alt="science" />
      <p class="cardtitle">Ingeniería</p>
      <p class="carddescription text-center">Las encuestas indican que el 11% de la fuerza laboral de ingeniería es femenina</p>
      </div>
      <div class="flex card justify-content-center align-items-center">
      <img class="iconcard" src="../images/math123.png" alt="science" />
      <p class="cardtitle">Matemáticas</p>
      <p class="carddescription text-center">El porcentaje de doctorados en matemática y estadística obtenidos por mujeres en realidad cayó del 29,6% al 28,5%.</p>
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
  </div>
  
  `,
  dashboard: `
    <div class="d-flex" id="wrapper">
		<!-- Sidebar -->
		<div class=" border-right sidemenu" id="sidebar-wrapper">
			<div class="sidebar-heading">
				<img class="logo-image" src="../../images/focus-logo-white.png" />
			</div>
			<div class="list-group list-group-flush list">
				<a href="#" class="list-group-item list-group-item-action listitem text-center">Inicio</a>
				<a href="#" class="list-group-item list-group-item-action listitem text-center">Mentoras</a>
				<a href="#" class="list-group-item list-group-item-action listitem text-center">Sessiones de mentoring</a>
				<a href="#" class="list-group-item list-group-item-action listitem text-center">Perfil</a>
				<a href="#" class="list-group-item list-group-item-action listitem text-center">Cerrar sesión</a>
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
						<img class="avatar" src="../../images/avatar.png" alt="avatar" />
					</div>
				</div>
			</nav>

			<div class="container-fluid">
					
			</div>
		</div>
		<!-- /#page-content-wrapper -->

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
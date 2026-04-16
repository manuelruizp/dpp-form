  document.getElementById("estadoProyecto").addEventListener("change", function () {
        const value = this.value;
        const section = document.getElementById("seccionConstruccion");

        if (value === "construccion" || value === "construido") {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });

      let contadorEdificaciones = 0;

      function agregarEdificacion() {
        contadorEdificaciones++;

        const container = document.getElementById("edificacionesContainer");

        const html = `
            <div class="card mb-3 p-3">
                <h6>Edificación ${contadorEdificaciones}</h6>

                <div class="row g-2">
                    <div class="col-md-6">
                        <input class="form-control" placeholder="Altura planos">
                    </div>
                    <div class="col-md-6">
                        <input class="form-control" placeholder="Altura existente">
                    </div>
                </div>

                <select class="form-select mt-2">
                    <option>Coincide?</option>
                    <option>Si</option>
                    <option>No</option>
                </select>

                <textarea class="form-control mt-2" placeholder="Notas"></textarea>

                <button type="button" class="btn btn-sm btn-danger mt-2" onclick="this.parentElement.remove()">Eliminar</button>
            </div>
        `;

        container.insertAdjacentHTML("beforeend", html);
      }

      const franjaSi = document.getElementById("franjaSi");
      const franjaNo = document.getElementById("franjaNo");
      const franjaContenido = document.getElementById("franjaContenido");

      franjaSi.addEventListener("change", () => {
        franjaContenido.style.display = "block";
      });

      franjaNo.addEventListener("change", () => {
        franjaContenido.style.display = "none";
      });

      // Auto calcular cumplimiento
      const distanciaInput = document.getElementById("distanciaPleamar");
      const cumpleSelect = document.getElementById("cumpleFranja");

      distanciaInput.addEventListener("input", () => {
        const valor = parseFloat(distanciaInput.value);

        if (!isNaN(valor)) {
          if (valor >= 60) {
            cumpleSelect.value = "si";
          } else {
            cumpleSelect.value = "no";
          }
        }
      });

      const edifSi = document.getElementById("edifSi");
      const edifNo = document.getElementById("edifNo");
      const descripcion = document.getElementById("descripcionEdificaciones");

      edifSi.addEventListener("change", () => {
        descripcion.style.display = "block";
      });

      edifNo.addEventListener("change", () => {
        descripcion.style.display = "none";
      });

      const distanciaRios = document.getElementById("distanciaRios");
      const cumpleRios = document.getElementById("cumpleRios");

      distanciaRios.addEventListener("input", () => {
        const valor = parseFloat(distanciaRios.value);

        if (!isNaN(valor)) {
          if (valor >= 30) {
            cumpleRios.value = "si";
          } else {
            cumpleRios.value = "no";
          }
        } else {
          cumpleRios.value = "";
        }
      });

      const playaSi = document.getElementById("playaSi");
      const playaNo = document.getElementById("playaNo");
      const playaContenido = document.getElementById("accesoPlayaContenido");

      playaSi.addEventListener("change", () => {
        playaContenido.style.display = "block";
      });

      playaNo.addEventListener("change", () => {
        playaContenido.style.display = "none";
      });
import React from "react";

function Signup() {
  return (
    <div>
      <form>
        <h2>Registrate</h2>
        <input name="email" type="email" placeholder="Correo Electronico" />
        <br />
        <input name="name" type="text" placeholder="Nombre" />
        <br />
        <input name="lastName" type="text" placeholder="Apellidos" />
        <br />
        <input name="password" type="password" placeholder="Contraseña" />
        <br />
        <input name="phones" type="phone" placeholder="Numero de telefono" />
        <br />
        <input name="companyid" type="" placeholder="Nombre de la compañia" />
        <br />
        <input
          name="jobTittle"
          type=""
          placeholder="Pesto dentro de la empresa"
        />
        <br />
        <select name="solutionTypeid" placeholder="Solucion">
          <option>Tipo de solucion</option>
          <option value="1">Marketing</option>
          <option value="2">Ventas</option>
          <option value="4">Otro</option>
        </select>
        <br />
        <label>¿Cuantos empleados manejas?</label>
        <select name="answersid" type="" placeholder="respuestas">
          <option>Respuesta</option>
          <option value="1">Respuesta 1</option>
        </select>
        <br />
        <select name="planid" type="" placeholder="plan">
          <option>Tipo de plan</option>
          <option value="1">Basico mensual 100MXN</option>
          <option value="2">Basico anual 1000MXN</option>
          <option value="3">Premium mensual 150MXN</option>
          <option value="4">Premium anual 1500MXN</option>
        </select>
        <br />
        <input name="country" type="" placeholder="ciudad" />
        <br />
        <button type="submit" value="Submit">
          Registrar
        </button>
      </form>
    </div>
  );
}

export default Signup;

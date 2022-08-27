import React, { useState } from "react";
import AlertError from "./AlertError";

const Form = () => {
  const [nombres, setNombres] = useState("");
  const [correo, setCorreo] = useState("");
  const [celular, setCelular] = useState("");
  const [fecha, setFecha] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación Formulario
    if ([nombres, celular, correo, fecha].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    // Limpiar nuestro Formulario
    setNombres("");
    setCorreo("");
    setCelular("");
    setFecha("");

    // Ejercico finalizado
    okModal();
  };

  // Modal de exito!
  const okModal = () => {
    Swal.fire({
      title: "Ejercicio Completado!",
      icon: "success",
      confirmButtonText: "Aceptar 😎",
    });
  };

  return (
    <>
      <div className="md:w-1/2 lg:w-2/5 mx-5">
        {/* Inicia el Formulario */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        >
          <div className="mb-5">
            <label
              htmlFor="nombres"
              className="block text-gray-700 uppercase font-bold"
            >
              😎 Nombres
            </label>
            <input
              id="nombres"
              type="text"
              placeholder="Nombres"
              className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="nombres"
              className="block text-gray-700 uppercase font-bold"
            >
              📱Celular
            </label>
            <input
              id="celular"
              type="number"
              placeholder="Celular"
              className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="nombres"
              className="block text-gray-700 uppercase font-bold"
            >
              📧 Correo
            </label>
            <input
              id="correo"
              type="email"
              placeholder="Correo"
              className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="fecha"
              className="block text-gray-700 uppercase font-bold"
            >
              🥳 Cumpleaños
            </label>
            <input
              id="fecha"
              type="date"
              className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>

          <input
            type="submit"
            className="bg-blue-600 w-full p-3 text-white uppercase font-bold rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
            value="Enviar"
          />
        </form>
      </div>

      <div className="md:w-1/2 lg:w-2/5 mx-5">
      {error && (
        <AlertError>
          <p>Todos los campos son obligatorios</p>
        </AlertError>
      )}
        <div className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 uppercase">
          <div className="mb-5">
            <b>😎 Nombres:</b> {nombres}
          </div>
          <div className="mb-5">
            <b>📱 Celular:</b> {celular}
          </div>
          <div className="mb-5">
            <b>📧 Correo:</b> {correo}
          </div>
          <div className="mb-5">
            <b>🥳 Cumpleaños:</b> {fecha}
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

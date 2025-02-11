import React from "react";
import { confirmarAsistencia, verUbicacion } from "../utils/index.js";

function Invitation() {
  const handleVerUbicacion = () => verUbicacion();
  const handleConfirmarAsistencia = () => confirmarAsistencia();

  return (
    <div className="max-w-lg bg-[#f9f0e7] p-6 rounded-lg shadow-2xl text-center">
      <img src="Pooh_invitation.png" alt="Invitación de Pooh" className="w-full mt-4" />
      <div className="buttons flex justify-center p-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleVerUbicacion}
        >
          VER UBICACIÓN
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleConfirmarAsistencia}
        >
          CONFIRMAR ASISTENCIA
        </button>
      </div>
    </div>
  );
}

export default Invitation;

import React from "react";
import "../css/flipcard.css"; // Asegúrate de importar el CSS personalizado

export const FlipCard = ({ title, img, description, link, languages }) => {
  return (
    <div className=" card-side card-compact bg-base-100 shadow-xl opacity-25 hover:opacity-100 transition duration-500">
      <div className=" ">
        <img src={img} alt={title} className="object-fill  h-48 w-96" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="">
          <div className="badge badge-outline">Descripción</div>
          <p className="pt-1">{description}</p>
        </div>
        <div className="">
          <dev className="badge badge-outline">Lenguajes</dev>
          <p className="pt-1">{languages}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Ver</button>
        </div>
      </div>
    </div>
  );
};

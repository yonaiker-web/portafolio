import React from "react";
import "../css/flipcard.css"; // Asegúrate de importar el CSS personalizado

export const FlipCard = ({ title, img, description, link, languages }) => {
  return (
    <div className=" card-side card-compact bg-base-100 shadow-xl opacity-25 hover:opacity-100 transition duration-120">
      <div className=" ">
        <img src={img} alt={title} className="object-fill  h-48 w-96" />
      </div>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>

        <div>
          <div className="font-semibold">Descripción</div>
          <p className="pt-1 text-gray-600">{description}</p>
        </div>
        <div>
          <div className="flex items-center">
            <p className="font-semibold">Lenguajes</p>
          </div>
          <p className="pt-1">{languages}</p>
        </div>
        <div className="card-actions justify-end">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary">Ver</button>
            </a>
          ) : (
            <button className="btn btn-primary" disabled>
              Ver
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

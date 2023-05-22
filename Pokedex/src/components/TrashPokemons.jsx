import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import Swal from "sweetalert2";

export const TrashPokemons = () => {

    const handleSelect = (e) => {
      const checkForTrash = document.querySelectorAll("#checkForTrash");
      checkForTrash.forEach(element => {
        element.classList.toggle("none");
        const card = document.querySelector(`#${element.value}`);
        if (element.checked && !card.classList.contains("none")) {
          Swal.fire({
            title: 'Estas seguro de continuar?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo/s'
          }).then((result) => {
            if (result.isConfirmed) {
              card.classList.add("none");
              Swal.fire(
                'Eliminado!',
                'El/los Pokemon/s fueron eliminados correctamente.',
                'success'
              );
            }
          })
        }
      })
      
    }

  return (
    <div className='trashContainer'>
      <button className='trash' onClick={handleSelect}><FontAwesomeIcon icon={faTrashCan}/></button>
    </div>
  )

}

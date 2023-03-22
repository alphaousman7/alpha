import React from 'react'

export default function Inscriptionfunc() {
  return (//mt fais decendre enbas de 20px on a pas besoin de poste et methode car c'est a javascrip de gerer les renvoie
    <div>
      
      <div className='container'>
        <form action='' className='mx-auto mt-20' method='post'>
          <div className='text-3xl text-info'>
            <h1>Veuillez vous inscrire s'il vous plait </h1>
          </div>
          
          <div>
              <label htmlFor='' className='text-success'>Nom</label>
              <input type='text' className='form-control'/>
          </div>
          <div>
              <label htmlFor=''>telephone</label>
              <input type='tel' className='form-control'/>
          </div>
          <div>
              <label htmlFor=''>Email</label>
              <input type='mail' className='form-control'/>
          </div>
          <div>
              <label htmlFor=''>Mot de passe</label>
              <input type='pasword' className='form-control'/>
          </div>
          <div>
              <label htmlFor=''>Proffession</label>
              <input type='text' className='form-control'/>
          </div>
          <button className='btn btn-outline-success btn-block mt-2 form-control'>Validation ...--</button>

        </form>
      </div>
    </div>
  )
}

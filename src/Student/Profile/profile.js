import React from 'react'
import Button from 'react-bootstrap/Button';
//import { Image } from 'react-bootstrap'    <div>
//<Image  src="https://www.creavea.com/produits/82320-l/image-3d-divers-zen-n2-30-x-30-cm-l.jpg" alt='tu v mettre aussi limage de lecole'/>
//</div>
export default function Profileeleve() {
  return (//row : ligne le div premier est premi colonne de 6cm et lotr le 2colne
    <div className='flex container'>
        
      <div className=' bg-orange-300 mx-auto w-45 container   rounded-2xl  m-3 mg-5 p-3'>
         <h5 className=' text-xl font-bold my-2 text-center underline '>Voici votre ptofile eleve chez GSPTL</h5>
                <div >
                <img className='mx-auto'  src='logo192.png'  />
                <div className=''> 
                <Button className='form-control border-b'  variant="success "  size="lg">
       Modifier le profile
      </Button>
                </div>
      </div>



          <div className='flex my-2 justify-content-between border-b'>
            <h3 className=' font-bold'>Nom</h3>
            <p>Ndg</p>
          </div>
          
          <div className=' flex my-2  justify-content-between border-b'>
            <h3 >Prenom</h3>
            <p>Ndg</p>
          </div>

            <div className=' flex  my-2 justify-content-between border-b'>
            <h3>Telephone</h3>
            <p>Ndg</p>
            </div>

            <div className='flex  my-2  justify-content-between border-b'>
            <h3>Classe</h3>
            <p>Ndg</p>
            </div>

      </div>
      <div  className='col-lg-6 m-3 border-2 '>
            <form action='' className=' w-45 border m-3 mg-5 bg-light border-1 rounded-2xl '>
                <div className='my-4 font-bold bg-red-300 col-lg-12 form-control '>
                    <label htmlFor='' className='mx auto'><h6>Ton code</h6></label>
                        <input className='form-control ' type="text" placeholder='Met le code ici si tu es dans la classe'/>
                  <div className=''> 
                    <Button className='form-control c p-3 m-1 my-3'  variant="success "  size="lg">Valide</Button>
                </div>
        </div> 
            </form>
      </div>
    </div>
  )
}

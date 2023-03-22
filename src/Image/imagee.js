import React,  {Fragment, useState ,useEffect} from 'react';//on import les fragm, usestate,useeffet aussi
import axios from 'axios' ;//'installe axios pour pouvoir faire notre requette avec le api

export default function Imagefonction() {
  const [data, setData]=useState([]);//ocupon nous de useef,on va metre data qui sera aliment par setdata
  //on vas creer le useefect  qui vas avoir le comportment similaire a componentdidMunt et componentdidUpdate
useEffect(()=> {//on fait useefect pour aller recuperer les donn" dans app
   const fetchData= async () =>{  //qui vas aller prendre les donnée dans le site donc on la mis dans une function pour pouvoir l'utiliser apre
   const result = await axios( //on va mettre aussi le esultat dans une constant d
    'https://jsonplaceholder.typicode.com/posts', //donc ces ici quon va coller url du site dans les ' 'et la , 
   );
   //en dessous on va utilise setdant  donc on va metre result le resutat dans nos donne 
     setData(result.data);
     console.log("mise a jour");//donc il affiche sil est mise ajour

  }; //en dessous on va faire le fetchdata
  fetchData(); //fechet data cercera les donné 
  console.log("mise a jour");//donc il affiche sil s'il trouve les donné lui il trouve setdata met a jour
  //en tout on a lancé la fonc fetchdata:pour aller chercher les donne; ensuite on a mis nos donné dans notre date
//en fin ocupons nous de notre frangment qui sera afficher
},[])//le tableau evite de ne pas avoir une boucle infie donc un seul appel dans le console
console.log(data);//c'est obliger dz le mettre

//donc on peu les metre dans un ul ou il fait ceque tuveu
  return (//on cree un ruturn dans la balise frag; on retourne li avec une clee a chaque fois 
    <Fragment>
      <ul>
        { data.map(item=>(<li key={item.id}>
         <div className='flex col-end-3'>{item.body} </div>
        <div className=' bg-red-600 font-tex'>{item.title}</div>
        </li>))}
      </ul>
    </Fragment>
  )//on appel valeur courante item.  
}

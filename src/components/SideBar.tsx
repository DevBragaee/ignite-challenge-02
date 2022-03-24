import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";

import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface ISideBarProps {
  selectedGenreId: number;
  handleClickButton(id: number): void;
}

/*  O componente Sidebar recebe como parameto os objetos javascript"selectedGeneroId" e a funcao "handleClickButton", perceba  o termo "ISideBarProps"
que Orienta a aplicacao  quanto ao formato(typagem) desses parametros recebidos   */
export function SideBar({
  selectedGenreId,
  handleClickButton,
}: ISideBarProps)
   //Inicio das  Intrucoes da funcao(do componente "Sidebar")
 {
   // Atribuindo  o Hook "useState" a variavel genres e retorna uma Array 
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  //  Aqui o Hook "useEffect"(uma funcao tambem,pra variar)
  /* Muito  importante: note que a funcao recebe como parametros,uma outra funcao(callback.no caso uma arrayfunction) e 
  uma array de depencias que informa qd essa funcao serar executada, perceba pelo simbolo de "[]" 
  note que interessante: A funcao "useEffetct ela nao tem de forma "explicita  instrucoes ,ela só recebe parametros ,as intrucoes do que deve ser feito ,está na ArrowFunction
  no caso Serar execultado só uma vez*/
  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);


  // Retorno do componente "SideBar"
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}
import { useEffect, useState } from "react";
import { api } from "../services/api";

import '../styles/header.scss'

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }

interface IContentProps {
    selectedGenreId: number;
  }
  
export function Header ({ selectedGenreId }: IContentProps) {
   
    const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  
    
   
      
      useEffect(() => {
      api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
        setSelectedGenre(response.data);
      })
    }, [selectedGenreId]);
    return(
        
        <header>
             <div className="container">
        <span className="header" >Categoria:<span> {selectedGenre.title}</span></span>
            </div>
        </header>
        
    
)
    }

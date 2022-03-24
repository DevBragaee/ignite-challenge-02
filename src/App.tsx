

import { useState } from 'react';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { Header } from './components/Header';
import './styles/global.scss';

export function App() {
  // estado que serar compartilhado como props para os componets
  const [selectedGenreId, setSelectedGenreId] = useState(1);
     // funcao responsavel pela mudanca de estado
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar  selectedGenreId={selectedGenreId} handleClickButton={handleClickButton} />
      <Content selectedGenreId={selectedGenreId}  />
      <Header  selectedGenreId={selectedGenreId} />
    </div>
  )
}
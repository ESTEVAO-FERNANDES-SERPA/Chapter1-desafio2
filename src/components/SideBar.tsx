import { Button } from "./Button";

interface SideBarProps {
    genres: GenreResponseProps[];
    handleClickButton: (genre: number) => void;
    selectedGenre: GenreResponseProps;
}

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }

export function SideBar({genres, handleClickButton, selectedGenre}: SideBarProps) {
    

  return (
    <>
      <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenre.id === genre.id}
          />
        ))}
      </div>

      </nav>
    </>
  )
}
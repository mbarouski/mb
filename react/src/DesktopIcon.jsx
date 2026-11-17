import { useRef, useState } from 'react';

// Windows-like desktop icon: click selects (ctrl+click adds to selection),
// double click opens the link, clicking the name of a selected icon "renames" it.
export default function DesktopIcon({ name, image, link, selected, onSelect }) {
  const [renaming, setRenaming] = useState(false);
  const nameClickedBefore = useRef(false);
  const inputRef = useRef(null);

  function handleNameClick() {
    if (nameClickedBefore.current && !renaming) {
      setRenaming(true);
      // focus after React renders the input
      requestAnimationFrame(() => inputRef.current?.focus());
    }
    nameClickedBefore.current = true;
  }

  function finishRename() {
    if (!renaming) return;
    if (inputRef.current.value !== name) {
      alert('Permission denied');
    }
    setRenaming(false);
  }

  return (
    <button
      className={`desktop-icon${selected ? ' desktop-icon--selected' : ''}`}
      title="Double click to open"
      onClick={(event) => onSelect(event.ctrlKey)}
      onDoubleClick={() => window.open(link, '_blank')}
    >
      <img src={image} alt="" />
      {renaming ? (
        <input
          ref={inputRef}
          type="text"
          defaultValue={name}
          onBlur={finishRename}
          onKeyUp={(event) => event.key === 'Enter' && finishRename()}
        />
      ) : (
        <p onClick={handleNameClick}>{name}</p>
      )}
    </button>
  );
}

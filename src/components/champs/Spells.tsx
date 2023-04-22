import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { blue } from '@mui/material/colors';
import { passiveImage, spellsImage } from 'helpers/apis';
import { useState, useEffect } from 'react';

type propsSpells = {
  passive: string,
  spellQ: string,
  spellW: string,
  spellE: string,
  spellR: string,
  descriptionP: string,
  descriptionQ: string,
  descriptionW: string,
  descriptionE: string,
  descriptionR: string,
  passiveName:string,
  nameQ:string
  nameW:string
  nameE:string
  nameR:string
}

export default function Spells({ 
  passive, spellQ, spellW, spellE, spellR, descriptionP, descriptionQ, descriptionW, descriptionE, descriptionR, passiveName, nameQ, nameW, nameE, nameR }
  : propsSpells) {

  const [currentDescription, setCurrentDescription] = useState(descriptionP)
  const [currentName, setCurrentName] = useState(passiveName)  
  const [key, setKey] = useState('PASSIVE')

  const handleDescription = (des: string, name:string, key: string) => {
    setCurrentDescription(des)
    setCurrentName(name)
    setKey(key)
  }

  useEffect(() => {
    setCurrentDescription(descriptionP)
    setCurrentName(passiveName)
  }, [descriptionP, passiveName])

  return (
    <>
      <Stack direction="row" spacing={3}>
        <Avatar sx={{ bgcolor: blue[50] }} variant="rounded" className={currentDescription === descriptionP ? "selected" : 'not_selected' } >
          <img src={`${passiveImage}${passive}`} alt='passive' onClick={() => handleDescription(descriptionP, passiveName, 'PASSIVE')} />
        </Avatar>
        <Avatar sx={{ bgcolor: blue[50] }} variant="rounded" className={currentDescription === descriptionQ ? "selected" : 'not_selected' } >
          <img src={`${spellsImage}${spellQ}`} alt='spellQ' onClick={() => handleDescription(descriptionQ, nameQ, 'Q')} />
        </Avatar>
        <Avatar sx={{ bgcolor: blue[50] }} variant="rounded" className={currentDescription === descriptionW ? "selected" : 'not_selected' }>
          <img src={`${spellsImage}${spellW}`} alt='spellW' onClick={() => handleDescription(descriptionW, nameW, 'W')} />
        </Avatar>
        <Avatar sx={{ bgcolor: blue[50] }} variant="rounded" className={currentDescription === descriptionE ? "selected" : 'not_selected' }>
          <img src={`${spellsImage}${spellE}`} alt='spellE' onClick={() => handleDescription(descriptionE, nameE, 'E')} />
        </Avatar>
        <Avatar sx={{ bgcolor: blue[50] }} variant="rounded" className={currentDescription === descriptionR ? "selected" : 'not_selected' }>
          <img src={`${spellsImage}${spellR}`} alt='spellR' onClick={() => handleDescription(descriptionR, nameR, 'R')} />
        </Avatar>
      </Stack>
      <h6 className='spells-name'>{currentName} <span className='spells-name_key'>{key}</span></h6>
      <p className='spells-description' dangerouslySetInnerHTML={{ __html: currentDescription }} />
    </>
  );
}
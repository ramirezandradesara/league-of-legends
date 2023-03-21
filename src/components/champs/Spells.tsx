import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { blue } from '@mui/material/colors';
import { passiveImage, spellsImage } from 'helpers/apis';
import { useState, useEffect } from 'react';

type propsSpells = { passive: string, spellQ: string, spellW: string, spellE: string, spellR: string, descriptionP: string, descriptionQ: string, descriptionW: string, descriptionE: string, descriptionR: string  }


export default function Spells({ passive, spellQ, spellW, spellE, spellR, descriptionP, descriptionQ, descriptionW, descriptionE, descriptionR }
  : propsSpells) {

  const [currentDescription, setCurrentDescription] = useState(descriptionP)
  const handleDescription = (des: string) => {
    setCurrentDescription(des)
  }

  useEffect(() => {
    setCurrentDescription(descriptionP)
  }, [descriptionP])
  

  return (
    <>
      <Stack direction="row" spacing={3}>
        <Avatar sx={{ bgcolor: blue[50] }} variant="rounded">
          <img src={`${passiveImage}${passive}`} alt='passive' onClick={() => handleDescription(descriptionP)} />
        </Avatar>
        <Avatar sx={{ bgcolor: blue[50] }} variant="rounded">
          <img src={`${spellsImage}${spellQ}`} alt='spellQ' onClick={() => handleDescription(descriptionQ)} />
        </Avatar>
        <Avatar sx={{ bgcolor: blue[50] }} variant="rounded">
          <img src={`${spellsImage}${spellW}`} alt='spellW' onClick={() => handleDescription(descriptionW)} />
        </Avatar>
        <Avatar sx={{ bgcolor: blue[50] }} variant="rounded">
          <img src={`${spellsImage}${spellE}`} alt='spellE' onClick={() => handleDescription(descriptionE)} />
        </Avatar>
        <Avatar sx={{ bgcolor: blue[50] }} variant="rounded">
          <img src={`${spellsImage}${spellR}`} alt='spellR' onClick={() => handleDescription(descriptionR)} />
        </Avatar>
      </Stack>
      {/* <p className='spells-description' >{currentDescription}</p> */}
      <p className='spells-description' dangerouslySetInnerHTML={{__html: currentDescription}} />
    </>
  );
}
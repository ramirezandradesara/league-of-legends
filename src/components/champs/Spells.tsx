import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { blue } from '@mui/material/colors';
import { passiveImage, spellsImage } from 'helpers/apis';

export default function Spells({ passive, spellQ, spellW, spellE, spellR }
  : { passive: string, spellQ: string, spellW: string, spellE: string, spellR: string }) {
console.log(`${spellsImage}${spellQ}`);

  return (
    <>
      <Stack direction="row" spacing={3}>
        <Avatar sx={{ bgcolor: blue[50] }} variant="rounded">
          <img src={`${passiveImage}${passive}`} alt='passive' />
        </Avatar>
        <Avatar sx={{ bgcolor: blue[50]  }} variant="rounded">
          <img src={`${spellsImage}${spellQ}`} alt='spellQ' />
        </Avatar>
        <Avatar sx={{ bgcolor: blue[50]  }} variant="rounded">
          <img src={`${spellsImage}${spellW}`} alt='spellW' />
        </Avatar>
        <Avatar sx={{ bgcolor: blue[50]  }} variant="rounded">
          <img src={`${spellsImage}${spellE}`} alt='spellE' />
        </Avatar>
        <Avatar sx={{ bgcolor: blue[50]  }} variant="rounded">
          <img src={`${spellsImage}${spellR}`} alt='spellR' />
        </Avatar>
      </Stack>
    </>
  );
}
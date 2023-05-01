import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { setChamps } from 'redux/states';
import { AppDispatch } from 'redux/store';
import { getChamps } from 'service/getAllChamps'
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

const tags = ["All", "Support", "Tank", "Fighter", "Mage", "Assassin", "Marksman"]

export function ChampsFilter() {
  const dispatch = useDispatch<AppDispatch>();
  const [champsByFilter, setChampsByFilter] = React.useState([])
  const [filter, setFilter] = React.useState('All')
  const [input, setInput] = React.useState('')

  React.useEffect(() => {
    getChamps().then(data => setChampsByFilter(Object.values(data)));
  }, [])

  React.useEffect(() => {
    const filterByTag = () => {
      if (filter === 'All') {
        const newChamps = champsByFilter.filter((champ: any) => champ.id.toLowerCase().includes(input.toLowerCase()))
        return dispatch(setChamps(newChamps))
      } else {
        const newChamps = champsByFilter.filter((champ: any) => champ.tags.includes(filter)
          && champ.id.toLowerCase().includes(input.toLowerCase()))
        return dispatch(setChamps(newChamps))
      }
    };
    filterByTag()
  }, [champsByFilter, dispatch, filter, input])


  const StyledButtonGroup = styled(ButtonGroup)({
    // change the button group dividers color
    '& .MuiButtonGroup-grouped:not(:last-of-type)': {
      borderRight: '1.5px solid #6759e8'
    },
    '& .css-m97oia-MuiButtonBase-root-MuiButton-root:hover': {
      textDecoration: 'inherent'
    },
  });

  return (
    <Box sx={{ marginBottom: '35px', width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', flexWrap: "wrap", alignItems: 'flex-end', justifyContent: 'center', marginBottom: '20px', width: '100%', }}>
        <OutlinedInput
          onChange={(e) => setInput(e?.target?.value)}
          placeholder='Search champion'
          type='text'
          sx={{ color: 'white', fontFamily: "bold-lol", border: '1px solid white', width: { md: '50%', xs: '80%' } }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </Box>

      <StyledButtonGroup variant="text" aria-label="text button group" size="large"
        sx={{
          display: 'flex',
          flexWrap: "wrap",
          justifyContent: 'center',
        }}
      >
        {tags.map(tag => (
          <Button onClick={() => setFilter(tag)}
            key={tag} sx={{
              color: '#fff',
              fontFamily: "bold-lol",
              textDecoration: filter === tag && "underline solid #6759e8",
              textUnderlineOffset: '5px',
              textDecorationThickness: '3px'
            }}>
            {tag}
          </Button>
        ))}
      </StyledButtonGroup>
    </Box >
  );
}

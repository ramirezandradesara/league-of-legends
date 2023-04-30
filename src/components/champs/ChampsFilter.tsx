import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { setChamps } from 'redux/states';
import { AppDispatch } from 'redux/store';
import { getChamps } from 'service/getAllChamps'
import { styled } from '@mui/material/styles';

const tags = ["All", "Support", "Tank", "Fighter", "Mage", "Assassin", "Marksman"]

export function ChampsFilter() {
  const dispatch = useDispatch<AppDispatch>();
  const [champsByFilter, setChampsByFilter] = React.useState([])

  function filterByTag(tag: string) {
    if (tag === 'All') {
      return dispatch(setChamps(champsByFilter))
    } else {
      const newChamps = champsByFilter.filter((champ: any) => champ.tags.includes(tag))
      return dispatch(setChamps(newChamps))
    }
  };

  React.useEffect(() => {
    getChamps().then(data => setChampsByFilter(Object.values(data)))
  }, [])

  const StyledButtonGroup = styled(ButtonGroup)({
    // change the button group dividers color
    '& .MuiButtonGroup-grouped:not(:last-of-type)': {
      borderColor: "white"
    }
  });

  return (
    <Box sx={{ marginBottom: '35px' }}>
      <StyledButtonGroup variant="text" aria-label="text button group" size="large"
        sx={{
          display: 'flex',
          flexWrap: "wrap",
          justifyContent: 'center',
        }}>
        {tags.map(tag => (
          <Button onClick={() => filterByTag(tag)}
            key={tag} sx={{
              color: '#fff',
              borderColor: '#fff',
              fontFamily: "bold-lol",
              minWidth: '200px',
            }}>
            {tag}
          </Button>
        ))}
      </StyledButtonGroup>
    </Box >
  );
}

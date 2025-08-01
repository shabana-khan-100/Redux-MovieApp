import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { getProductsByCategory } from '../../api/products';
export default function SelectorComponent({name,value}) {
  const dispatch= useDispatch()
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    dispatch(getProductsByCategory(event.target.value))
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          label="Age"
          onChange={handleChange}
        >
          {value.length>0 &&  value.map((val ) => 
            <MenuItem value={val.name}>{val.name}</MenuItem>
          )}
         
        </Select>
      </FormControl>
    </Box>
  );
}

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

// Define provinces and divisions data
const provinces = [
  'Northern', 'North Central', 'Eastern', 'Uva', 'North Western',
  'Western', 'Central', 'Southern', 'Sabaragamuwa'
];

const divisionsByProvince = {
  Northern: ['Jaffna', 'Kilinochchi', 'Mullaitivu', 'Vavuniya'],
  'North Central': ['Anuradhapura', 'Polonnaruwa'],
  Eastern: ['Ampara', 'Batticaloa', 'Trincomalee'],
  Uva: ['Badulla', 'Moneragala'],
  'North Western': ['Puttalam', 'Kurunegala'],
  Western: ['Colombo', 'Gampaha', 'Kalutara'],
  Central: ['Kandy', 'Matale', 'Nuwara Eliya'],
  Southern: ['Galle', 'Hambantota', 'Matara'],
  Sabaragamuwa: ['Kegalle', 'Ratnapura'],
};

export default function Dropdown() {
  const [selectedProvince, setSelectedProvince] = React.useState(null);
  const [selectedDivision, setSelectedDivision] = React.useState(null);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300 }}>
      {/* Province Selection */}
      <Autocomplete
        value={selectedProvince}
        onChange={(event, newProvince) => {
          setSelectedProvince(newProvince);
          setSelectedDivision(null); // Reset division selection when province changes
        }}
        options={provinces}
        renderInput={(params) => (
          <TextField {...params} label="Select Province" variant="outlined" />
        )}
      />

      {/* Division Selection */}
      <Autocomplete
        value={selectedDivision}
        onChange={(event, newDivision) => {
          setSelectedDivision(newDivision);
        }}
        options={selectedProvince ? divisionsByProvince[selectedProvince] : []}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField {...params} label="Select Division" variant="outlined" />
        )}
        sx={{ width: 300 }}
        disabled={!selectedProvince} // Disable until a province is selected
      />
    </Box>
  );
}

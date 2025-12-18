import { MenuItem, Select } from '@mui/material';

export default function SelectField({
  id,
  value,
  onChange,
  options,
}: {
  id: string;
  value: string;
  onChange: (value: string | 'domestic' | 'foreign' | 'female' | 'male' | '') => void;
  options: string[];
}) {
  return (
    <Select
      inputProps={{
        id,
      }}
      size="small"
      variant="filled"
      disableUnderline
      sx={{
        color: 'white',
        height: 36,
        borderRadius: '6px',
        '& .MuiSvgIcon-root': {
          color: 'white',
        },
        '& .MuiFilledInput-input': {
          paddingTop: '8px',
          paddingBottom: '8px',
          fontSize: {
            xs: '0.75rem',
            md: '0.875rem',
          },
          lineHeight: {
            xs: '1.25rem',
            md: '1.5rem',
          },
        },
      }}
      displayEmpty
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <MenuItem value="" disabled>
        -
      </MenuItem>
      {options.map((i: string, index: number) => {
        return (
          <MenuItem key={`${i}_${index}`} value={i}>
            {i}
          </MenuItem>
        );
      })}
    </Select>
  );
}

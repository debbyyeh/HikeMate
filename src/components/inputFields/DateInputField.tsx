import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

export default function DateInputField({
  label,
  setDate,
  date,
}: {
  label: string;
  setDate: (date: string) => void;
  date: Dayjs | null;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label.toUpperCase()}
        onChange={(date) => {
          setDate(date?.toISOString()!);
        }}
        slotProps={{
          textField: {
            variant: 'outlined',
            sx: {
              '& .MuiSvgIcon-root': {
                color: 'white',
              },
            },
            InputProps: {
              sx: {
                color: 'white',
                border: '1px solid #4b5563',
                borderRadius: '6px',
                height: 36,
              },
            },
            InputLabelProps: {
              sx: {
                color: 'white',
                marginTop: `${date ? '0' : '-10px'}`,
                '&.Mui-focused': {
                  marginTop: '0px',
                  color: 'white',
                },
              },
            },
          },
        }}
        value={date}
        format="YYYY/MM/DD"
      />
    </LocalizationProvider>
  );
}

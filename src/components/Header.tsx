import LanguageIcon from '@mui/icons-material/Language';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useRef, useState } from 'react';
import { setLanguage } from '../i18n/index';
import { locales } from '../i18n/setting';

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="w-1/2 mx-auto">
      <div className="text-label01 text-offWhite">Login</div>
      <div className="flex justify-end" ref={langRef}>
        <IconButton onClick={() => setMenu(!menu)}>
          <LanguageIcon sx={{ color: '#fff' }} />
        </IconButton>
        <Menu
          open={menu}
          onClose={() => setMenu(false)}
          anchorEl={langRef.current}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {locales.map((lang) => {
            return (
              <MenuItem
                key={`${lang.label}`}
                onClick={() => {
                  setLanguage(lang.value);
                  setMenu(false);
                }}
              >
                {lang.short}
              </MenuItem>
            );
          })}
        </Menu>
      </div>
    </div>
  );
};

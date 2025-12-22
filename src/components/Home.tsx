import LanguageIcon from '@mui/icons-material/Language';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import { useNavigate } from '@tanstack/react-router';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { setLanguage } from '../i18n/index';
import { locales } from '../i18n/setting';
import FormField from './inputFields/FormField';
import { useAuthStore } from './useAuthStore';

export const Home = () => {
  const checkAuth = useAuthStore((x) => x.setIsFirstTime);
  const navigate = useNavigate();
  //TODO: call API to use email to search database to see if there has records
  const { t } = useTranslation();
  const [menu, setMenu] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
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
      <FormField label="email" id="email" />
      <Button
        onClick={() => {
          checkAuth(true);
          navigate({ to: '/register' });
        }}
      >
        {t('ENTER')}
      </Button>
    </>
  );
};

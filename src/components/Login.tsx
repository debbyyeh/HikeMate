import { Button } from '@mui/material';
import { useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import FormField from './inputFields/FormField';

export const Login = () => {
  const navigate = useNavigate();
  //TODO: call API to use email to search database to see if there has records
  const { t } = useTranslation();
  return (
    <div className="w-1/2 mx-auto">
      <FormField label="email" id="email" />
      <Button
        onClick={() => {
          navigate({ to: '/register' });
        }}
      >
        {t('ENTER')}
      </Button>
    </div>
  );
};

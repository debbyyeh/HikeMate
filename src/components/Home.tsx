import { Button } from '@mui/material';
import { useNavigate } from '@tanstack/react-router';
import FormField from './inputFields/FormField';
import { useAuthStore } from './useAuthStore';

export const Home = () => {
  const checkAuth = useAuthStore((x) => x.setIsFirstTime);
  const navigate = useNavigate();
  //call API to use email to search database to see if there has records

  return (
    <>
      <FormField label="email" id="email" />
      <Button
        onClick={() => {
          checkAuth(true);
          navigate({ to: '/register' });
        }}
      >
        ENTER
      </Button>
    </>
  );
};

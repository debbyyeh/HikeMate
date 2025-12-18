import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import FormField from './inputFields/FormField';

export const Login = () => {
  const form = useForm({
    mode: 'onChange',
    resolver: zodResolver(
      z.object({
        name: z.string(),
        email: z
          .string()
          .min(1)
          .refine((value) => {
            return /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
          }),
      })
    ),
    defaultValues: {
      name: '' as string,
      email: '' as string,
    },
  });

  const onDone = () => {
    handleSubmit((data) => {
      console.log({ data });
    })();
  };

  const { setValue, handleSubmit } = form;
  return (
    <div className="min-h-[400px] flex flex-col justify-center">
      <FormField
        id="name"
        label="name"
        onChange={(e: any) => {
          setValue('name', e.target.value);
        }}
      />
      <div className="mt-4">
        <FormField
          id="email"
          label="email"
          onChange={(e: any) => {
            setValue('email', e.target.value);
          }}
        />
      </div>
      <button className="mt-4" onClick={onDone}>
        登入
      </button>
    </div>
  );
};

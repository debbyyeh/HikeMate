import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Divider, useMediaQuery } from '@mui/material';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import cities from '../data/city.json';
import DateInputField from './inputFields/DateInputField';
import FormField from './inputFields/FormField';
import SelectField from './inputFields/SelectField';

export const Register = () => {
  // 如果有資料就顯示舊資料
  const [district, setDistrict] = useState<string[]>([]);
  const cityLists = cities.map((city) => city.cityName);
  const mobile = useMediaQuery('(max-width: 768px)');

  const form = useForm({
    mode: 'onChange',
    resolver: zodResolver(
      z.object({
        name: z.string().min(1),
        email: z
          .string()
          .min(1)
          .refine((value) => /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)),
        gender: z.string().min(1),
        city: z.string().min(1),
        birth: z.string().min(1),
        districtValue: z.string().min(1),
        idNumber: z.number().min(1),
        nationality: z.string().min(1),
        address: z.string().min(1),
        contactPerson: z.string().min(1),
        contactTel: z.number().min(1),
      })
    ),
    defaultValues: {
      name: '' as string,
      email: '' as string,
      gender: '' as string,
      city: '' as string,
      birth: '' as string,
      districtValue: '' as string,
      idNumber: 0 as number,
      nationality: '' as string,
      address: '' as string,
      contactPerson: '' as string,
      contactTel: 0 as number,
    },
  });

  const { handleSubmit, setValue, trigger, watch, formState } = form;
  const { isValid } = formState;
  const city = watch('city');
  const gender = watch('gender');
  const nationality = watch('nationality');
  const birth = watch('birth');
  const districtValue = watch('districtValue');

  const onSave = async () => {
    if (!isValid) return;

    handleSubmit(
      (data) => {
        console.log({ data });
      },
      (error) => {
        console.log({ error });
      }
    )();
  };

  useEffect(() => {
    if (!city) return;
    const selectedCity = cities.find((c) => c.cityName === city);
    if (selectedCity) {
      setDistrict(selectedCity.townList);
    }
  }, [city]);

  return (
    <div className="w-1/2 mx-auto">
      <FormField
        id="name"
        label="name"
        onChange={(value) => {
          setValue('name', value);
          trigger('name');
        }}
      />
      <div className="mt-2">
        <FormField
          id="email"
          label="email"
          onChange={(value) => {
            setValue('email', value);
            trigger('email');
          }}
        />
      </div>
      <div className="flex justify-between mt-2 gap-2">
        <DateInputField
          label="Birth"
          date={birth ? dayjs(birth) : null}
          setDate={(value) => {
            if (value) {
              setValue('birth', value);
              trigger('birth');
            }
          }}
        />
        <FormField id="gender" label="gender" labelLen={60}>
          <SelectField
            id="gender"
            value={gender}
            onChange={(value) => {
              setValue('gender', value as 'MALE' | 'FEMALE');
              trigger('gender');
            }}
            options={['MALE', 'FEMALE']}
          />
        </FormField>
      </div>

      <div className={`flex my-2 ${mobile ? 'justify-between' : ' '} gap-2`}>
        <FormField id="city" label="city" labelLen={mobile ? 30 : 80}>
          <SelectField
            id="city"
            value={city}
            onChange={(value) => {
              setValue('city', value);
              trigger('city');
            }}
            options={cityLists}
          />
        </FormField>
        <FormField id="District" label="District" labelLen={mobile ? 60 : 80}>
          <SelectField
            id="District"
            value={districtValue}
            onChange={(value) => {
              setValue('districtValue', value);
              trigger('districtValue');
            }}
            options={district}
          />
        </FormField>
      </div>
      <FormField
        id="address"
        label="address"
        showLabel={false}
        onChange={(e) => {
          setValue('address', e);
          trigger('address');
        }}
      />
      <div className="flex flex-col md:flex-row justify-between mt-2 mb-4 gap-2">
        <FormField id="nationality" label="nationality" labelLen={100} isMobile={mobile}>
          <SelectField
            id="nationality"
            value={nationality}
            onChange={(value) => {
              setValue('nationality', value as 'domestic' | 'foreign');
              trigger('nationality');
            }}
            options={['Domestic', 'Foreign']}
          />
        </FormField>
        <div className="grow">
          <FormField
            id="idNumber"
            label="ID-number"
            showLabel={false}
            onChange={(e) => {
              setValue('idNumber', Number(e));
              trigger('idNumber');
            }}
          />
        </div>
      </div>
      <Divider className="bg-gray-600" />
      <div>
        <div className="my-2 text-left text-offWhite">Emergency Contact</div>
        <FormField
          id="contactPerson"
          label="Contact Person"
          showLabel={false}
          labelLen={130}
          onChange={(e) => {
            setValue('contactPerson', e);
            trigger('contactPerson');
          }}
        />
      </div>
      <div className="mt-2">
        <FormField
          id="contactTel"
          label="Contact Tel."
          showLabel={false}
          labelLen={130}
          onChange={(e) => {
            setValue('contactTel', Number(e));
            trigger('contactTel');
          }}
        />
      </div>
      <Button
        className="text-offWhite"
        sx={{ marginTop: '20px' }}
        variant="contained"
        onClick={onSave}
        disabled={!isValid}
      >
        建立資料
      </Button>
    </div>
  );
};

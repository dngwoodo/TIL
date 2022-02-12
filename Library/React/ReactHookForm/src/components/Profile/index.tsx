import { forwardRef } from 'react';

import {
  useForm,
  SubmitHandler,
  UseFormRegister, useFormContext, FormProvider,
} from 'react-hook-form';

import _ from 'lodash';

interface IFormValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

const Input = forwardRef<
  HTMLInputElement,
  {
    id: string;
    label: string;
    defaultValue: string;
    ariaInvalid: boolean;
    required: boolean;
  } & ReturnType<UseFormRegister<IFormValues>>
  >(({
    id, label, defaultValue, required, ariaInvalid,
    name, onChange, onBlur,
  }, ref) => (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        defaultValue={defaultValue}
        required={required}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        aria-invalid={ariaInvalid}
      />
    </div>
  ));

function DeepNest() {
  console.log('DeepNest rendering');
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <Input
        id="phone-number"
        label="휴대 전화"
        ariaInvalid={!!errors.phoneNumber}
        {...register('phoneNumber', { required: { value: true, message: '휴대 전화를 입력해주세요.' } })}
        required={false}
        defaultValue=""
      />
      <p role="alert">{errors?.phoneNumber?.message}</p>
    </div>
  );
}

export default function Profile() {
  console.log('Profile rendering');
  const methods = useForm<IFormValues>();

  // errors가 있을 경우 onSubmit 함수는 실행되지 않는다.
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    // { name: 'example', onBlur: fn, onChange: fn, ref: fn }
    // console.log(register('example'));

    console.log(data);
  };

  // { firstName: { message: '', ref: input, type: 'required'} }
  // console.log(errors);

  const { handleSubmit, formState: { errors }, register } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="first-name"
          label="First Name"
          defaultValue=""
          {...register('firstName', { required: { value: true, message: 'First Name is required' } })}
          ariaInvalid={!!errors.firstName}
          required
        />
        <p role="alert">{errors?.firstName?.message}</p>

        <Input
          id="last-name"
          label="Last Name"
          defaultValue=""
          {...register('lastName', { required: { value: true, message: 'Last Name is required' } })}
          ariaInvalid={!!errors.firstName}
          required={false}
        />
        <p role="alert">{_.get(errors, 'lastName.message')}</p>

        <DeepNest />

        <button type="submit">제출</button>
      </form>
    </FormProvider>
  );
}

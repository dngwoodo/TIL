import { forwardRef, useContext } from 'react';

import {
  useForm,
  SubmitHandler,
  UseFormRegister,
} from 'react-hook-form';

import _ from 'lodash';
import ProfileContext from '../../context/profile/ProfileContext';

interface IFormValues {
  firstName: string;
  lastName: string;
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

export default function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();
  const {
    firstName,
    lastName,
    handleChangeProfile,
  } = useContext(ProfileContext)!;

  // errors가 있을 경우 onSubmit 함수는 실행되지 않는다.
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    // { name: 'example', onBlur: fn, onChange: fn, ref: fn }
    // console.log(register('example'));

    _.forEach(data, (value, key) => {
      handleChangeProfile({ name: key, value });
    });

    console.log(data);
  };

  // { firstName: { message: '', ref: input, type: 'required'} }
  // console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="first-name"
        label="First Name"
        defaultValue={firstName}
        {...register('firstName', { required: { value: true, message: 'First Name is required' } })}
        ariaInvalid={!!errors.firstName}
        required
      />
      <p role="alert">{errors?.firstName?.message}</p>

      <Input
        id="last-name"
        label="Last Name"
        defaultValue={lastName}
        {...register('lastName', { required: { value: true, message: 'Last Name is required' } })}
        ariaInvalid={!!errors.firstName}
        required={false}
      />
      <p role="alert">{_.get(errors, 'lastName.message')}</p>

      <button type="submit">제출</button>
    </form>
  );
}

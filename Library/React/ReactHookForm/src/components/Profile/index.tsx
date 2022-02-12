import { forwardRef } from 'react';

import {
  Path, SubmitHandler, useForm, UseFormRegister,
} from 'react-hook-form';

interface IFormValues {
  'First Name': string;
  Age: number;
}

type InputProps = {
  id: string;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
}

function Input({
  id, label, register, required,
}: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...register(label, { required })} />
    </div>
  );
}

const Select = forwardRef<
  HTMLSelectElement,
  {
    id: string;
    label: string;
  } & ReturnType<UseFormRegister<IFormValues>>
  >(({
    id, onChange, onBlur, name, label,
  }, ref) => (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </div>
  ));

export default function Profile() {
  const {
    register,
    handleSubmit,
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    // { name: 'example', onBlur: fn, onChange: fn, ref: fn }
    // console.log(register('example'));

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 1. label 값을 name값으로 사용해서 자식에서 register를 실행시킨다. */}
      <Input id="first-name" label="First Name" register={register} required />

      {/* 2. forwardRef를 이용해서 register의 리턴값을 넘겨준다. */}
      <Select id="age-select" label="Age" {...register('Age')} />

      <button type="submit">제출</button>
    </form>
  );
}

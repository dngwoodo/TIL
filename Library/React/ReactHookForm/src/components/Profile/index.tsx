import { SubmitHandler, useForm } from 'react-hook-form';

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other'
}

type FormInput = {
  firstName: String;
  gender: GenderEnum;
}

export default function Profile() {
  const {
    register,
    handleSubmit,
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    // { name: 'example', onBlur: fn, onChange: fn, ref: fn }
    // console.log(register('example'));

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="first-name">First Name</label>
        <input id="first-name" {...register('firstName')} />
      </div>

      <div>
        <label htmlFor="gender-select">Gender Selection</label>
        <select id="gender-select" {...register('gender')}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
      </div>

      <button type="submit">제출</button>
    </form>
  );
}

import { useForm } from 'react-hook-form';

export default function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (
    data: { [x: string]: any; },
  ) => {
    // { name: 'example', onBlur: fn, onChange: fn, ref: fn }
    // console.log(register('example'));

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {/* useForm이라는 훅에 input을 등록 */}
        <input
          defaultValue="test"
          {...register('example')}
        />
      </div>
      <br />
      <div>
        {/* required라는 검증을 포함 */}
        <input {...register('exampleRequired', { required: true })} />
        {errors.exampleRequired && <p style={{ color: 'red', margin: 0 }}>This field is required</p>}
      </div>
      <br />
      <button type="submit">제출</button>
    </form>
  );
}

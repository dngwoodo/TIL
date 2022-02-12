import { useState } from 'react';

export default function useProfile() {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
  });

  const handleChangeProfile = ({ name, value }: {name: string, value: string}) => {
    setProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { firstName, lastName } = profile;

  return {
    firstName,
    lastName,
    handleChangeProfile,
  };
}

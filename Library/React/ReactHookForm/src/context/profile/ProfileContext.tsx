import { createContext } from 'react';

type ProfileContextValues = {
  firstName: string;
  lastName: string;
  // eslint-disable-next-line no-unused-vars
  handleChangeProfile: ({ name, value }: { name: string, value: string }) => void;
}

const ProfileContext = createContext<ProfileContextValues | null>(null);

export default ProfileContext;

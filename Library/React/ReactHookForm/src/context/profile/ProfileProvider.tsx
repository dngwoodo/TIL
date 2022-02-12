import { ReactElement, useMemo } from 'react';

import ProfileContext from './ProfileContext';
import useProfile from './useProfile';

type Props = {
  children: ReactElement;
}

export default function ProfileProvider({ children }: Props) {
  const { firstName, lastName, handleChangeProfile } = useProfile();
  // ProfileProvider가 리랜더링 되었을때 하위 컴포넌트들의 리랜더링을 막아준다.
  const value = useMemo(() => ({
    firstName,
    lastName,
    handleChangeProfile, // useCallback을 안해주고 depth에 넣으면 계속 리랜더링 됨.
  }), [firstName, lastName]);

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
}

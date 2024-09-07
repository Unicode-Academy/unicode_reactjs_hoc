export const withAuthentication = <T,>(
  WrapComponent: React.ElementType,
  unAuthenticate: React.ElementType
) => {
  return (props: T) => {
    const isAuth = false;
    if (!isAuth) {
      const ComponentUnAuthenticate = unAuthenticate;
      return <ComponentUnAuthenticate />;
    }
    return <WrapComponent {...props} />;
  };
};

const loginService = {
  login: async ({ username, password }: any): Promise<any> => {
    console.log('Calling service with params: ', username, password);
    return new Promise((resolve) => {
      setTimeout(
        resolve.bind(null, {
          data: {
            fullName: 'Logged User',
            accessToken: 'adsojjadsojadosjadosjoasdojadsojadsjo',
          },
        }),
        2000,
      );
    });
  },
  setJwt: (jwt: string) => {
    localStorage.setItem('jwt', jwt);
  },
  getJwt: () => {
    const item = localStorage.getItem('jwt');
    return item ?? undefined;
  },
  clearJwt: () => {
    localStorage.clear();
  },
  isAuthenticated: () => loginService.getJwt(),
};

export default loginService;

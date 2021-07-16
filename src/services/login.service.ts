const loginService = {
    signin: (cb: any) => {
        setTimeout(cb, 100);
    },
    signout: (cb: any) => {
        setTimeout(cb, 100);
    },
    setJwt: (jwt:string) => {
        localStorage.setItem('jwt', jwt);
    },
    getJwt: () => {
        const item = localStorage.getItem('jwt');
        return item ?? undefined;
    },
    clearJwt: () => {
        localStorage.clear();
    },
    isAuthenticated: () => {
        return loginService.getJwt();
    }
}

export default loginService;

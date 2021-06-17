const logout = () => {
  localStorage.removeItem("token");
};

const login = () => {
  localStorage.setItem("token", "logged");
};

const isUserLogged = () => {
  return !!localStorage.getItem("token");
};

export default { logout, login, isUserLogged };

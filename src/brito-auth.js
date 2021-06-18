const logout = () => {
  localStorage.removeItem("token");
};

const login = () => {
  localStorage.setItem("token", "logged");
};

export default { logout, login };

const get_token = () => {
  JSON.parse(localStorage.getItem('mmpc_auth'));
};

const set_token = (data) => {
  localStorage.setItem('mmpc_auth', data);
};

export { get_token, set_token };

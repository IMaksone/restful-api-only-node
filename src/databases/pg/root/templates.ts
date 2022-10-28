import { templateQueryType } from "_types";

export const getAllUsers: templateQueryType = () => ({
  query: "SELECT * FROM users;",
  params: [],
});

export const addUser: templateQueryType = (props) => ({
  //query: `INSERT INTO users (login, password, token) VALUES ('${props.login}', '${props.password}', '${props.token}');`,
  query: `INSERT INTO users (login, password, token)
          SELECT '${props.login}', '${props.password}', '${props.token}'
          WHERE NOT EXISTS (SELECT 1 FROM users WHERE login='${props.login}');`,
  params: [],
});

export const updateUserPassword: templateQueryType = (props) => ({
  query: `UPDATE users SET password = '${props.password}' WHERE login = '${props.login}';`,
  params: [],
});

export const removeUser: templateQueryType = (props) => ({
  query: `DELETE FROM users WHERE login = '${props.login}';`,
  params: [],
});

export default { getAllUsers, addUser, updateUserPassword };

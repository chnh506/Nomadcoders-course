export const join = (req, res) => res.send("Join");

export const login = (req, res) => res.send("Login");

export const logout = (req, res) => res.send("Log Out");

export const see = (req, res) => {
  return res.send(`See User #${req.params.id}`);
} 

export const edit = (req, res) => res.send("Edit User");

export const remove = (req, res) => res.send("Delete User");

import * as usersDao from "./users-dao.js";

let curUser;

const AuthController = (app) => {
    const register = async (req, res) => {
        const username = req.body.username;
        console.log(req.body);
        const user = usersDao.findUserByUsername(username);
        if (user) {
          res.sendStatus(409);
          return;
        }
        const newUser = usersDao.createUser(req.body);
        //req.session["currentUser"] = newUser;
        curUser = newUser;
        console.log(curUser);
        res.json(newUser);
      };
     
      const login = async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const user = usersDao.findUserByCredentials(username, password);
        if (user) {
          req.session["currentUser"] = user;
          res.json(user);
        } else {
          res.sendStatus(404);
        }
      };
     
      const profile = async (req, res) => {
        //console.log(curUser);
        const currentUser = curUser;
        if (!currentUser) {
          res.sendStatus(404);
          return;
        }
        res.json(currentUser);
      };
     
      const logout = async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
      };
     
 const update   = (req, res) => {const userId = curUser;
 const updatedUser = usersDao.updateUser(userId, req.body);
 if (!updatedUser) {
   res.sendStatus(404);
   return;
 }
 //req.session["currentUser"] = updatedUser;
 curUser = updatedUser;
 res.json(updatedUser);
};

 app.post("/api/users/register", register);
 app.post("/api/users/login",    login);
 app.post("/api/users/profile",  profile);
 app.post("/api/users/logout",   logout);
 app.put ("/api/users",          update);
};
export default AuthController;
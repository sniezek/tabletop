import EditView from "./components/EditView.jsx";

const EditRoute = store => ({
  path: "/users/edit",
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const LoginView = require("./components/EditView").default;
      cb(null, LoginView);
    }, "edit");
  }
});


export default EditRoute;

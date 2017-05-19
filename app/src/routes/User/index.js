const EditRoute = store => ({
    path: "/users/edit",
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const EditView = require("./components/EditView").default;
            cb(null, EditView);
        }, "edit");
    }
});

const ProfileRoute = store => ({
    path: "/users/*",
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const ProfileView = require("./components/ProfileView").default;
            cb(null, ProfileView);
        });
    }
});

export { EditRoute, ProfileRoute };

/**
 * Created by ja on 07.05.17.
 */
import achievementsView from "./components/AchievementsView.jsx";

const achievementsRoute = store => ({
    path: "/achievements",
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const AchievementsView = require("./components/AchievementsView").default;
            cb(null, AchievementsView);
        }, "achievements");
    }
});


export default achievementsRoute;

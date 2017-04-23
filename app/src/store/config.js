export const SET_MAP_VIEW_ACTIVE = "SET_MAP_VIEW_ACTIVE";

export const setMapViewActive = payload => ({
    type: SET_MAP_VIEW_ACTIVE,
    payload
});

const initialState = {
    mapView: true
};

export default function configReducer(state = initialState, { type, payload }) {
    if (type === SET_MAP_VIEW_ACTIVE) {
        return {
            ...state,
            mapView: payload
        };
    }

    return state;
}

import axiox from "axios";
export const FETCH_TRIPS_SUCCESS = "FETCH_TRIPS_SUCCESS";
export const FETCH_TRIPS_FAILED = "FETCH_TRIPS_FAILED";
export const ADD_TRIP_SUCCESS = "ADD_TRIP_SUCCESS";
export const ADD_TRIP_FAILED = "ADD_TRIP_FAILED";
export const EDIT_TRIP_SUCCESS = "EDIT_TRIP_SUCCESS";
export const EDIT_TRIP_FAILED = "EDIT_TRIP_FAILED";
export const DELETE_TRIP_SUCCESS = "DELETE_TRIP_SUCCESS";
export const DELETE_TRIP_FAILED = "DELETE_TRIP_FAILED";

export const fetchTrips = () => {
  return async dispatch => {
    try {
      let response = await axiox.get(`http://localhost:3000/api/v1/trips`);
      let trips = response.data;
      return dispatch({
        type: FETCH_TRIPS_SUCCESS,
        payload: trips
      });
    } catch (error) {
      dispatch({
        type: FETCH_TRIPS_FAILED,
        payload: error
      });
    }
  };
};

export const addTrip = trip => {
  return async dispatch => {
    try {
      let response = await axiox.post(`http://localhost:3000/api/v1/trips`, {
        user_id: 1,
        ...trip
      });
      return dispatch({
        type: ADD_TRIP_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ADD_TRIP_FAILED,
        payload: error
      });
    }
  };
};

export const editTrip = (trip, tripId, history) => {
  console.log("THE TRIP YOOO", trip);

  return async dispatch => {
    try {
      let response = await axiox.put(
        `http://localhost:3000/api/v1/trips/${tripId}`,
        trip
      );
      dispatch({
        type: EDIT_TRIP_SUCCESS,
        payload: response.data
      });
      history.goBack();
    } catch (error) {
      dispatch({
        type: EDIT_TRIP_FAILED,
        payload: error
      });
    }
  };
};

export const deleteTrip = (tripId, history) => {
  return async dispatch => {
    try {
      await axiox.delete(`http://localhost:3000/api/v1/trips/${tripId}`);
      dispatch({
        type: DELETE_TRIP_SUCCESS,
        payload: tripId
      });
      history.goBack();
    } catch (error) {
      dispatch({
        type: DELETE_TRIP_FAILED,
        payload: error
      });
    }
  };
};

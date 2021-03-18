export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE"

export const addFeature = (id) => {
  console.log("feature", id);
  return {
    type: ADD_FEATURE,
    payload: id,
  };
};

export const removeFeature = (feature) => {
  console.log("feature", feature);
  return {
    type: REMOVE_FEATURE,
    payload: feature
  }
}

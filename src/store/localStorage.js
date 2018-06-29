export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("auth");
    if (serializedState == null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

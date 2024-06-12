export let accessToken = "";
export const setAccessToken = (at: string) => {
  accessToken = at;
};
export const getAccessToken = () => {
  return accessToken;
};

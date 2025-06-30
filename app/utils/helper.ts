export const saveToken = (accessToken: string, refreshToken: string) => {
  localStorage.setItem(LOCAL_STORAGE_ITEM.ACCESS_TOKEN, accessToken);
  localStorage.setItem(LOCAL_STORAGE_ITEM.REFRESH_TOKEN, refreshToken);
};

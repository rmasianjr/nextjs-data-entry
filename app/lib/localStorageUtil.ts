export const localStorageUtil = {
  saveData(key: string, data: any) {
    const existingData = JSON.parse(localStorage.getItem(key) || "[]");
    existingData.unshift(data);
    localStorage.setItem(key, JSON.stringify(existingData));
  },

  getData(key: string) {
    return JSON.parse(localStorage.getItem(key) || "[]");
  },

  clearData(key: string) {
    localStorage.removeItem(key);
  },
};

export function useLocalStorage(key: string) {
  const setItem = (value: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  function getItem() {
    try {
      const item = window.localStorage.getItem(key);
      if (typeof item !== "object") {
        return item;
      }

      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.log(error);
    }
  }

  function removeItem() {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }

  return { setItem, getItem, removeItem };
}

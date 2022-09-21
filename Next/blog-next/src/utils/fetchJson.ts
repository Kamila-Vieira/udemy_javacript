export const fetchJson = async <T>(URL: string): Promise<T> => {
  try {
    const rawData = await fetch(URL);
    const jsonData = await rawData.json();

    return jsonData;
  } catch (error) {
    return null;
  }
};

export const fetchJson = async <T>(URL: string): Promise<T> => {
  const rawData = await fetch(URL);
  const jsonData = await rawData.json();

  return jsonData;
};

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://api.geoapify.com/v1/geocode/reverse";
export const getAddress = async ({ latitude, longitude }) => {
  const response = await fetch(
    `${API_URL}?lat=${latitude}&lon=${longitude}&apiKey=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Error fetching address");
  }
  const data = await response.json();
  if (!data.features.length) {
    throw new Errow("Fetching data are empty");
  }
  return data;
};

import { BASE_URL } from "../../../utils/constant";
export const getProduct = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error("Product fetched not completed");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

import { ApiResponse } from "@/types/product";

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

export async function getProductsData(): Promise<ApiResponse> {
  if (!API_URL) {
    throw new Error("There is no API_URL");
  }
  if (!API_KEY) {
    throw new Error("There is no API_KEY");
  }
  const res = await fetch(API_URL, {
    headers: {
      "x-api-key": API_KEY,
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return data;
}

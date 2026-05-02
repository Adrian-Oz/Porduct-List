import { Image, Product } from "@/types/product";

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

export async function getProducts(): Promise<Product[]> {
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
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return data.products;
}

export async function getLogo(): Promise<Image> {
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
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return data.logo;
}

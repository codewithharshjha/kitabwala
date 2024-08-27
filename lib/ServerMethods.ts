
import { headers } from "next/headers";

export async function isSellerUser(email:string) {
  const res = await fetch(`/api/sellerUser`, {
    cache: "no-cache",
    headers: headers(),
    body:email
  });
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  const response = await res.json();
  console.log(response?.data)
  return response?.data;
}


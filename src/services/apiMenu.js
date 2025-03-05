import supabase from "./supabase";
export const getMenu = async () => {
  const { data: menu, error } = await supabase.from("menu").select("*");
  if (error) {
    throw new Error("Error while fetching data");
  }
  return menu;
};

export const createOrder = async (newOrder) => {
  const { data, error } = await supabase
    .from("order")
    .insert([
      {
        customer: newOrder.customer,
        email: newOrder.email,
        phone: newOrder.phone,
        cart: newOrder.cart,
        price: newOrder.price,
        position: newOrder.position,
      },
    ])
    .select();
  if (error) {
    console.error("Error inserting order:", error);
  }
  return data;
};

import supabase from "./supabase";
const getMenu = async () => {
  const { data: menu, error } = await supabase.from("menu").select("*");
  if (error) {
    throw new Error("Error while fetching data");
  }
  return menu;
};

export default getMenu;

"use server";

export async function editProfile(formData: FormData) {
  const name = formData.get("name");
  const username = formData.get("username");

  console.log({
    name,
    username,
  });

  return true;
}

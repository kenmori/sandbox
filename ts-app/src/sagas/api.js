export async function api(url, opts) {
  const res = await fetch(`${url}`, opts);
  console.log(res, "res in api");
  const data = await res.json();
  console.log(data, "data in api");
  return { data, status: res.status };
}
export let defaultHeaderOption = {
  "Content-Type": "application/json; charset=UTF-8"
};

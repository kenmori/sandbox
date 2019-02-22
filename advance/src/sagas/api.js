export default function api(url, opts) {
  return fetch(`http://localhost:3000/${url}`, opts).then(function(resp) {
    let json = resp.json();
    if (resp.status >= 200 && resp.status < 300) {
      return json;
    } else {
      return json.then(Promise.reject.bind(Promise));
    }
  });
}

export let getHeaderOption = {
  headers: { "Content-Type": "application/json; charset=UTF-8" },
  method: "GET",
  mode: "cors"
};

export let postHeaderOption = {
  headers: { "Content-Type": "application/json; charset=UTF-8" },
  method: "POST",
  mode: "cors"
};

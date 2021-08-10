// FIXME:value在models里面的search也没用到呀
export function getListsFromAPI(value) {
  return fetch('/api/getLists?value=' + value)
    .then(res => res.json())
    .catch(err => console.log(err));
}

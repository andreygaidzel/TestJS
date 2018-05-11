async function sendFetch() {
  let data = [];

  const requestFirst = async () => {
    const response = await get(3);
    const json = await response.json();
    data = data.concat(Common.getArray(json));
  };

  const requestSecond = async () => {
    const response = await get(Common.getRandom(5, 10));
    const json = await response.json();
    data = data.concat(Common.getArray(json));
    Common.dataGrid(data);
  };

  function get(count) {
    return fetch(`https://randomuser.me/api?results=${count}`);
  }

  await requestFirst();
  await requestSecond();
}
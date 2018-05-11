function sendPromise() {
  let data = [];

  get(3)
    .then(result => {
      data = data.concat(Common.getArray(result));

      return get(Common.getRandom(5, 10))
    })
    .then(result => {
      data = data.concat(Common.getArray(result));
      Common.dataGrid(data);
    });

  function get(count) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', `https://randomuser.me/api?results=${count}`, true);
      xhr.send();
      xhr.onload = function () {
        if (xhr.status !== 200) {
          console.log(xhr.status + ': ' + xhr.statusText);
        } else {
          resolve(JSON.parse(xhr.responseText));
        }
      }
    })
  }
}
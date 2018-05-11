function sendCallback() {
  let data = [];

  get(3, result => {
    data = data.concat(Common.getArray(result));

    get(Common.getRandom(5, 10), result => {
      data = data.concat(Common.getArray(result));
      Common.dataGrid(data);
    });
  });

  function get(count, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://randomuser.me/api?results=${count}`, true);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status !== 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
      } else {
        callback(JSON.parse(xhr.responseText));
      }
    }
  }
}
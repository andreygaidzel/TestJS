class Common
{
  static dataGrid(data)
  {
    let listDiv = document.getElementById('list');
    let total = document.getElementById('total');
    listDiv.innerHTML = "";
    total.innerHTML = "";
    let ul = document.createElement('ul');
    let span = document.createElement('span');
    span.innerHTML = data.length + ' users in total';
    total.appendChild(span);

    for (let i = 0; i < data.length; ++i) {
      let li = document.createElement('li');
      li.innerHTML = data[i];
      ul.appendChild(li);
    }
    listDiv.appendChild(ul);
  }

  static getRandom(min, max) {
    max++;
    return Math.floor(Math.random() * (max - min) + min);
  }

  static getArray(data)
  {
    let array = [];

    for (let i = 0; i < data.results.length; i++)
    {
      array[i] = data.results[i].name.first + ' ' + data.results[i].name.last;
    }

    return array;
  }
}

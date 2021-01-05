

function DataTable(config, data) {

  const tableHTML = `
    <table>
    <thead>
    <tr>
      <th>№</th>
      <th>Имя</th>
      <th>Фамилия</th>
      <th>Возраст</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>1</td>
      <td>Вася</td>
      <td>Петров</td>
      <td>12</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Вася</td>
      <td>Васечкин</td>
      <td>15</td>
    </tr>
    </tbody>
  </table>
    `

  const parentElement = document.querySelector(config.parent),
    columnsNames = config.columns.map(col => col.title),
    columnsValues = config.columns.map(col => col.value);

  const table = createTableElement('table', createTableHead(columnsNames))
  table.append(createTableBody(columnsValues, data))

  console.log(table);
  console.log(config.parent);

  parentElement.append(table);
}

function createTableElement(elementName = 'td', content) {
  const element = document.createElement(elementName);
  if ((content.length !== undefined) && !(typeof content === 'string')) {// iterable but ot a string
    content.forEach(item => element.append(item));
  } else {
    element.append(content);
  }
  return element;
}


function createTableHead(columnsNames) {
  columnsNames.unshift('№');
  const tdArr = columnsNames.map(item => {
    return createTableElement('th', item);
  }),
    trHead = createTableElement('tr', tdArr);
  console.log('arr', tdArr);
  return createTableElement('thead', trHead);
}

function createTableBody(columnsValues, data) {
  const tableBodyTrs = [];
  data.forEach((dataItem, index) => {
    const tableBodyTds = [];
    tableBodyTds.push(createTableElement('td', index + 1));
    columnsValues.forEach(colProp => {
      tableBodyTds.push(createTableElement('td', dataItem[colProp]));
    })
    tableBodyTrs.push(createTableElement('tr', tableBodyTds));
  })
  return createTableElement('tbody', tableBodyTrs);
}

const config1 = {
  parent: '#usersTable',
  columns: [
    { title: 'Имя', value: 'name' },
    { title: 'Фамилия', value: 'surname' },
    { title: 'Возраст', value: 'age' },
  ]
};

const users = [
  { id: 30050, name: 'Вася', surname: 'Петров', age: 12 },
  { id: 30051, name: 'Вася', surname: 'Васечкин', age: 15 },
];

DataTable(config1, users);

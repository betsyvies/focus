/*
  Utilizando From Data
 */

const getKeys = (data, elem, index) => {
  let arrItem = []
  Object.values(data)
    .filter((item, i) => index === i)
    .map((item) => {
        return arrItem.push(item)
    })

  return { name: elem, value: arrItem[0] }
}

const fromData = data => {
  const arr = []
  Object.keys(data).map((elem, index) => arr.push(getKeys(data, elem, index)))

  let newData = new FormData();
  arr.map(elem => newData.append(elem.name, elem.value))

  return newData
}

const routes = (route, id) => {
  if (id === '') var newRoute = `/${route}`
  else {
    if (typeof id === 'object') Object.values(id).length > 1 ? newRoute = `/${route}/${id.comp}/${id.desk}` : newRoute = `/${route}${id.idTemp}`
    else newRoute = `/${route}/${id}`
  }
  return newRoute
}

const nameTempl = (data, name, id, method) => {
  if (data !== undefined) {
    let valOne = []
    let valCero = []
    let arrName = []

    if (method !== 'post') {
      data
      .filter(e => e._id !== id)
      .map(e => e.name === name ? valOne.push('1') : valCero.push('0'))
    }
    
    data.map(e => e.name === name ? valOne.push('1') : valCero.push('0'))

    if (valOne[0] === '1') arrName.push('other')
    else arrName.push(name)

    return arrName[0]
  } else return name
}

export { fromData, routes, nameTempl }
const fetchSimulation = (dataBase, tiempo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(dataBase);
          reject(new Error('Problemas haciendo el fetch'))
        }, tiempo)
      })
  }

export default fetchSimulation

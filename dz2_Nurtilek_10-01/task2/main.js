function getUsers(onSuccess) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
       // имитация разрешения и отклонения в асинхронном API
         if (onSuccess) {
            resolve([
               { id: 1, name: 'Пётр' },
               { id: 2, name: 'Фёдор' },
               { id: 3, name: 'Егор' },
            ])
         } else {
         reject('Ошибка получения данных!')
         }
      }, 1000)
   })
}
getUsers(onSuccess)

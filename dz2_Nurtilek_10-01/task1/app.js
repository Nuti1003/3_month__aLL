let numbers = [1,2,3,4,5]
for(let i = 0; i < numbers.length; i++) {
setTimeout(() => {
   console.log("Индекс цифры:" + i)
}, (i + 1) * 3000);
}

const getUsers = (onSuccess) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (onSuccess) {
            resolve ([
               { id: 1, name: "Пётр" },
               { id: 2, name: "Федор" },
               { id: 3, name: "Егор" }
            ]);
         }else {
            reject("Ошибка получения данных");
         }
      }, 1000);
   });
}
getUsers(true)
   .then((data) => {
      console.log(data, "<<<<<");
   })
   .catch((err) => {
      console.log("ERROR", err);
   })
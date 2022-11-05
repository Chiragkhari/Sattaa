export function getGameData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 2,
        status: "Inactive",
        time: 30,
        green: 1,
        voilet: 2,
        red: 3,
        number: 12,
      });
    }, 3000);
  });
}


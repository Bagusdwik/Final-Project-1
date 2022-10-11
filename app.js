function getprom(number) {
  return new Promise((resolve, reject) => {
    if (number == 1) {
      resolve("Number 1");
    } else {
      reject("Number 2");
    }
  });
}

async function test() {
  console.log(await getprom(1));
  console.log("test");
}

test();
console.log("tes 1t");

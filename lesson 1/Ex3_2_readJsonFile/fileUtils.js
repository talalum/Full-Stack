const Jfile = require("jsonfile");

exports.getPersByStreet = async (street) => {
  let data = await Jfile.readFile("./persons.json");
  let liveInThisStreet = data.persons.filter((p) => p.Adress.Street.Name === street);
  return new Promise( (resolve) => {
    setTimeout(() => {
      // liveInThisStreet.forEach((element) => {
      //     console.log(element.Name);
      // });
      resolve(liveInThisStreet);
    }, 2000);
  });
}



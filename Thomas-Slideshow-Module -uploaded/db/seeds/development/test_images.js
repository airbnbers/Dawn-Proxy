// const faker = require("faker");

// exports.seed = function(knex) {
//   return knex("images")
//     .del()
//     .then(function() {
//       return knex("images").insert(sampleImgSet(100));
//     });
// };

// function sampleImgSet(numOfListings) {
//   let imgArr = [];
//   let listingId = 1;
//   function randomImgQuantity() {
//     return 6 + Math.floor(25 * Math.random());
//   }
//   while (listingId <= numOfListings) {
//     for (let i = 0; i < randomImgQuantity(); i++) {
//       imgArr.push({
//         imgUrl: faker.image.image(),
//         listingId,
//         imgOrder: i,
//         description: faker.fake(
//           "{{random.words}}, {{random.words}}, {{random.words}}"
//         )
//       });
//     }
//     listingId++;
//   }
//   return imgArr;
// }

const faker = require("faker");

exports.seed = function(knex) {
  return knex("images")
    .del()
    .then(function() {
      return knex("images").insert(sampleImgSet(100));
    });
};

function sampleImgSet(numOfListings) {
  let imgArr = [];
  let listingId = 1;
  function randomImgQuantity() {
    return 6 + Math.floor((bearPics.length - 6) * Math.random());
  }
  while (listingId <= numOfListings) {
    for (let i = 0; i < randomImgQuantity(); i++) {
      imgArr.push({
        imgUrl: gimmeBearPics(),
        listingId,
        imgOrder: i,
        description: faker.fake(
          "{{random.words}}, {{random.words}}, {{random.words}}"
        )
      });
    }
    listingId++;
  }
  return imgArr;
}

function gimmeBearPics() {
  return bearPics[Math.floor(Math.random() * bearPics.length)];
}

let bearPics = [
  "https://i.imgur.com/c2a0Kfc.jpg",
  "https://i.imgur.com/Gqadqrx.jpg",
  "https://i.imgur.com/zgkoJVn.jpg",
  "https://i.imgur.com/wCRubbP.jpg",
  "https://i.imgur.com/n6IAdeF.jpg",
  "https://i.imgur.com/tfMSeh7.jpg",
  "https://i.imgur.com/b0H92yf.jpg",
  "https://i.imgur.com/hNAE9Ry.jpg",
  "https://i.imgur.com/JbkxVjR.jpg",
  "https://i.imgur.com/hBJp4eW.jpg",
  "https://i.imgur.com/PkrFeTE.jpg",
  "https://i.imgur.com/99g1yC8.png",
  "https://i.imgur.com/sxMv5f4.jpg",
  "https://i.imgur.com/lEfJLWb.jpg",
  "https://i.imgur.com/bNFYjsM.jpg",
  "https://i.imgur.com/PCcGRd8.jpg",
  "https://i.imgur.com/D23rkPo.jpg",
  "https://i.imgur.com/l2YgfUy.jpg",
  "https://i.imgur.com/Xro5dJn.jpg",
  "https://i.imgur.com/SEKVc7G.jpg",
  "https://i.imgur.com/QeOwAEM.jpg",
  "https://i.imgur.com/lOh75gt.jpg",
  "https://i.imgur.com/BfaRAMr.jpg",
  "https://i.imgur.com/keTGHHx.jpg"
];

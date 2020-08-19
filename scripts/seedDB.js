// const mongoose = require("mongoose");
// const db = require("../models");


// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/CrimeDb"
// );


// const userSeed = [
//   {
//     name: "",
//     email: "",
//     password: "",
//     posts: [
//       {
//         lat: "",
//         lng: "",
//         description: "",
//         experience: "",
//         badgeNumber: "",
//         file: "",
//         date: new Date(Date.now())     
//       },
//     ]
//   }  
// ];

// db.User
//   .remove({})
//   .then(() => db.User.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/CrimeDb"
);


const userSeed = [
  {
    name: "Tim",
    email: "tim@tim.tim",
    password: "timtimtim",
    
    posts: [
      {
        lat: "39.9526",
        lng: "-75.1652",
        description: "Police were called to investigate Krypton sightings at The Dead Zone",
        experience: "Klingons were encountered at the corner, police request residents get their creature lore higher.",
        badgeNumber: "45",
        file: "",
        date: new Date(Date.now())     
      }, {
        lat: "39.9526",
        lng: "-75.1652",
        description: "Police help wedding party carry on partying",
        experience: "They even did the merengue",
        file: "",
        date:  new Date(Date.now())     
      }
    ]
  }
  // , {
  //   name: "Chris",
  //   email: "chris@chris.chris",
  //   password: "chrischrischris",
  //   posts: [
      
  //       {
  //         where: "Gatorade Plaza",
  //         what: "Police arrest 11 and 10 year old girls for selling lemonade without permit",
  //         when:  new Date(Date.now())     
  //       },{
  //         where: "April 18, 1930",
  //         what: "Today there were no reports",
  //         when:  new Date(Date.now())     
  //       },{
  //         where: "9 Lives",
  //         what: "Police respond to cat stuck in tree. Police called the firemen.",
  //         when:  new Date(Date.now())     
  //       }
    
  //   ]
  // }  
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


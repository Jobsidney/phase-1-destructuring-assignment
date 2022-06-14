const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings
const [moo,neigh,baa,oink,cluck]=farmAnimals.split(' ')
const [bessie,sheep,dolly,babe,little]=farmAnimals.split(' ')
const [blackAndWhite,black,pink,] =["cow","sheep","pig"]
const [red,orange,yellow,green,blue,indigo,violet]=colors;
const sixColor=['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
const [r,o,y,g,b,v]=sixColor;
const [indg]=['indigo']

const {muppetName,color,song,job,partner}=muppet;

const {nestedJob,nestedPartner}=nestedMuppet;
const {song2,song4}=nestedMuppet.album.theMuppetMovie
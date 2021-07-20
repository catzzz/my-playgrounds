
//  generate seeds playground data from cities.js and helper.js

const sample = array => array[Math.floor(Math.random()*array.length)]
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');


const seedData = () =>{
    let playgrounds = []
    
    for (let i =0; i< 50 ; i++) {
        const random1000 = Math.floor(Math.random()*1000)
        const rates = Math.floor(Math.random()*5);
        const city = cities[random1000].city;
        const state = cities[random1000].state
        const slug = `${state} ${city} ${sample(descriptors)} ${sample(places)}`
        const playground = new Object({
            location: `${city}, ${state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: '/images/playground-1.jpeg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            rates:rates,
            slug:`${slug.toLowerCase().replace(/\s/g,'-')}`
        })
        playgrounds.push(playground)
    }
    return playgrounds
}
const playgrounds = JSON.stringify(seedData())

export default function handler(req, res) {
    
    if(req.method === 'GET'){
      res.status(200).json(playgrounds)
    }else{
      res.setHeader('Allow',['GET'])
      res.status(405).json({message:`Methos ${req.method} is not allowed`})
    }
  }
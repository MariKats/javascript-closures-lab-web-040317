const app = "I don't do much."

function bumpCounter(){
  let counter = 0
  // counter should be private

  function addBump(){
    counter += 1
  }

  function getBumps(){
    return counter
  }

  return {
    addBump,
    getBumps
  }
}

function createAnimal(animalType) {
  return function(deadlyDevice) {
    return {
      animalType, deadlyDevice
    }
  }
}

const sharkCreator = createAnimal('Shark')
const sharkWithFrickinLaserbeam = createAnimal('Shark')('Laserbeam')
const sharkWithFrickinCannon = createAnimal('Shark')('Cannon')

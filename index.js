// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver() {
  drivers.push("Ralph")
}

function destructivelyPrependDriver() {
  drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver() {
  let result 
  result = [...drivers, "Broom"]
  return result
}

function prependDriver() {
  let result
  result = ["Arnold", ...drivers]
  return result
}

function removeLastDriver() {
  drivers.slice(-1)
}
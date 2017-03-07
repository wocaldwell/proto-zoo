"use strict";

function Animal () {
    this.name = null;
}

// Set animal common name
Animal.prototype.setCommonName = function(commonName){
    this.name = commonName;
};

function Procyon () {
  this.genusName = "procyon";
};

// Set Animal as the prototype of Tenodera
Procyon.prototype = new Animal();

function ProcyonLotor (commonName) {
  this.speciesName = "P. lotor";
  this.setCommonName(commonName);
};

// Set Tenodera as the prototype for TenoderaSinensis
ProcyonLotor.prototype = new Procyon();

// Create a new instance of TenoderaSinensis
let coolAnimalOne = new ProcyonLotor("raccoon");

// Output the name, genus name, and species name for your TenoderaSinensis
console.log('coolAnimalOne = ', coolAnimalOne);

//Same stuff done with Object.create

var Animalia = {
    name: null,
    logAnimalia: function() {
        console.log('A cool animal: ', this);
    }
};

var  Vulpes = Object.create(Animalia, {
    genusName: {value: "vulpes"}
});

var VulpesVulpes = Object.create(Vulpes, {
    speciesName: {value: "V. vilpes"},
    name: {value: "Red Fox"}
});

var VulpesLagopus = Object.create(Vulpes, {
    speciesName: {value: "V. langopus"},
    name: {value: "Arctic Fox"}
});

VulpesVulpes.logAnimalia();
VulpesLagopus.logAnimalia();
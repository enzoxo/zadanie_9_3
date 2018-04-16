var text="Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur ="triceratops",
	dinosaurUpper = dinosaur.toUpperCase();

text = text.replace("Velociraptor", dinosaurUpper);
console.log(text.length);
console.log(text.slice(0,72));

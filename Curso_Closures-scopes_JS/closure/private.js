//CLASE #8: Cómo crear variables privadas con closures

const person = () =>{
    var saveName = "Name";
    return{
        getName: () =>{
            return saveName;
        },
        setName: (name) =>{
            saveName = name;
        },
    };
};

newPerson = person();
console.log(newPerson.getName());
newPerson.setName("Brandon");
console.log(newPerson.getName());
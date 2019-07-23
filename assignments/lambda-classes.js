// CODE here for your Lambda Classes
class Person{
    constructor(personAttributes){
        this.name=personAttributes.name;
        this.age=personAttributes.age;
        this.location=personAttributes.location;
        this.gender=personAttributes.gender;

    }
    speak(){return `Hello my name is ${this.name}
                    , I am from ${this.location}`}
}

class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty=instructorAttributes.specialty;
        this.favLanguage=instructorAttributes.favLanguage;
        this.catchPhrase=instructorAttributes.catchPhrase;
        
    }
    demo(subject){return `Today we are learning about ${subject}`}
    grade(student,subject){return `${student.name} receives a perfect score on ${subject}.`}
    adjustPoints(student){
        if(Math.random() > .5){
        student.grade = student.grade +=1;}
        else{student.grade = student.grade +-1}
        
    }
    graduate(student){
        while (student.grade <70){
            this.adjustPoints(student);
            console.log( `Your average is ${student.grade}, you are NOT graduating!`);}
        
            console.log(`Your average is ${student.grade}. YOU CAN GRADUATE!!!!`);}
}

class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground=studentAttributes.previousBackground;
        this.className=studentAttributes.className;
        this.favSubjects=studentAttributes.favSubjects;
        this.grade=studentAttributes.grade;
    }
    listsSubjects(){this.favSubjects.forEach(currentValue => {console.log(currentValue)})
                    };
    PRAssignment(subject){return `this.name has submitted a PR for ${subject}`};

    springChallenge(subject){return `${this.name} has begun a sprint challenge on ${subject}`};
  
    
}   


class ProjectManager extends Instructor{
    constructor(projectManagerAttributes){
        super(projectManagerAttributes);
        this.gradClassName=projectManagerAttributes.gradClassName;
        this.favInstructor=projectManagerAttributes.favInstructor;
        
    }
    standUp(channel){return `${this.name} announces to ${channel} standy times!`;}
    debugsCode(studentObj,subject){return `${this.name} debugs ${studentObj.name}'s code on ${subject}`;}
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

console.log(fred);
console.log(fred.demo('tacos'));


const chase = new ProjectManager({
    name: 'Chase',
    location: 'Not sure',
    age: 500,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Managing',
    catchPhrase: `Don't forget the dragons`
})

console.log(chase.standUp('compiler'));

const dustin = new Student({
   
    name: 'Dustin',
    location: 'Not sure',
    age: 24,
    gender: 'male',
    previousBackground:'research',
    grade:68
})
console.log(chase.debugsCode(dustin,'JS4'));
chase.graduate(dustin);

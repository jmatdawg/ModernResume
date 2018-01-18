var str = "jakiera matthews-lucy"
var res = str.toUpperCase();
console.log('Name: ' + res)

console.log('Career: Mathematician')

console.log('Description: I am the bomb like tick, tick.')

console.log('My Interests:')

console.log('* Jesus')

console.log('* DIY-ing')

console.log('* Attempting recipes from Pinterest')

console.log('My Previous Experience:')

let displayPosition=function(jobtitle, companyname, description){
    console.log(`* ${jobtitle} at ${companyname}`)
    console.log('-' + description)
}
displayPosition(`Math Teacher`, `St. Barnabas Catholic School`, `Taught middle school mathematics curriculum`);

displayPosition(`Financial Services Professional`, `Old National Bank`, `Explored Fraud Investigations, Retail Banking, and Retail Data Analytics of a large financial institution`);

displayPosition(`Student Tutor`, `Alabama State University Quant Resource Center`, `Tutored and provided assessments to ASU students in college-level math courses`)

console.log('My Skills')

let displaySkill=function(skill, iscool){
    if (iscool ===true){
    console.log(`* Check it: ${skill}`);
    }else{
    console.log(`* ${skill}`);
}}

displaySkill('Dancing', false);

displaySkill('Backflips', true);

displaySkill('Public Speaking', false);

displaySkill('Painting', false);

displaySkill('Gin Rummy', true);

displaySkill('Opera Singing', false);

displaySkill('Changing Tires', true);

//variable declaration
var firstName = "Subramanian" //es 5 based declaration.
let lastName = 'Murugan' //es 6 based declaration
//string concation => + , `${variableName}=> string interpolation`
console.log(firstName + lastName)
console.log(firstName, lastName)
console.log(`${firstName} ${lastName}`) // es 6 feature
//string multi line strings using back tic noation with string interploation

//es 5 based interpolation
let title = 'IBM'
let doc = "<html>" +
    "<head>" +
    "<title>" + title + "</title>" +
    "</head>" +
    "<body>" +
    "<h1>Hello</h1>" +
    "</body>";
console.log(doc)

let docOne = `<html>
           <head>
            <title>${title}</title>
            </head>
          <body>
            <h1>Hello</h1>
          </body>
        `;
console.log(docOne)

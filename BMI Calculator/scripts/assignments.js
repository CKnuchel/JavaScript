/* 
LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and 
assign their values according to your own country (population in millions)
2. Log their values to the console
*/

const country = "Switzerland";
const continent = "Europe";
let population = 8.703;

console.log("Country: " + country);
console.log("Continent: " + continent);
console.log("Population: " + population + " millions");

/////////////////////////////////////////////////////////////////////////////////

/* Primitive Datentypen:
- Number --> int und float | let age = 26;
- String --> Sequenz von Charakteren |  let firstName = "Christoph";
- Boolean --> Logischer Operator | let fullAge = true;
- undefined --> Variable ohne Inhalt | let children;
- null --> nichts
- Symbol --> Einmalig, kann nicht geändert werden
- BigInt --> Mehr PLatz als Number für Int's

JavaScript hat dynamic typing, das heisst Variablen müssen nicht mit einem Datentyp gekennzeichnet werden
da dies von JS automatisch anhand des Wert gemacht wird. DA in JS die Werte einen Typ haben und nicht die Variable.

Somit können Variablen mit einer Nummer initialisiert werden und dann z.B mit einem String ersetzt werden

Der Typ einer Variablen kann mit typeof ermittelt werden, z.B console.log(typeof country);
*/

/////////////////////////////////////////////////////////////////////////////////

/*
LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your 
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
*/

const isIsland = false;
let language;

console.log("Island: " + isIsland); 

/////////////////////////////////////////////////////////////////////////////////

/*
Deklaration von Variablen:
- let -->   Variablen können wechseln (sind variabel)
- const --> Ist eine Konstante, kann nicht mehr geändert werden im Programm
            CamelCase für const --> alles in Grossbuchstaben
            const Variablen, müssen einen Inhalt haben beim initialisieren!
- var -->   wird nicht mehr verwendet, "alte" Variante für let
*/

/////////////////////////////////////////////////////////////////////////////////

/*
LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some 
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never 
change, and which might change?). Then, change these variables to const.
*/

language = "German";

console.log("Language: " + language);

/////////////////////////////////////////////////////////////////////////////////

/*
Operatoren:

*/

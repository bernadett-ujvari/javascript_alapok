/* 
1. feladat: 
Írd ki az "abcdefghij" string betűit külön sorokba console.log segítségével. 
Használj:
a) for ciklust: */

        let abc = 'abcdefghij'
        for (let i = 0; i < abc.length; ++i) {
            console.log(abc[i]);
        }

/* b) while ciklust: */

        let abc = 'abcdefghij';
        let i = 0;
        while (i < abc.length) {
            console.log(abc[i]);
            i += 1;
        }

/* c) for..of ciklust: */
        let abc = 'abcdefghij';
        for (let betű of abc) {
            console.log(betű);
        }

/* d) ismételd meg a fenti feladatot a '理解する' stringre. Mit tapasztalsz? ------ Ugyanúgy működik.*/
/* for ciklussal: */

                let japan = '理解する'
                for (let i = 0; i < japan.length; ++i) {
                    console.log(japan[i]);
                }
/* while ciklussal: */ 

                let japan = '理解する';
                let i = 0;
                while (i < japan.length) {
                    console.log(japan[i]);
                    i += 1;
                }


/* for..of ciklussal: */
                let japan = '理解する';
                for (let betű of japan) {
                    console.log(betű);
                }

/* 2. feladat: 
A napok3 tömbbe tedd bele a napok értékeinek rövidített változatát. A rövidített változat mindig három betű (Mon, Tue, Wed, Thu, Fri). */
let napok = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
let napok3 = []

for (nap of napok) {
    napok3.push(nap[0], nap[1], nap[2]);
}
console.log(napok3);  */

/* Amint készen vagy, írd át a kódot slice segítségével: */

let napok = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
let napok3 = []

console.log ("napok rövidítve: ");
for (let nap of napok) {
    shortName = nap.slice(0, 3);
    napok3.push(shortName);   
} 
console.log(napok3);


/*
3. feladat: 
Írd ki az első tíz pozitív egész páros számot a konzolra. */
console.log("az első tíz pozitív páros egész szám: ")
let tömb = [];
let i = 0;
while (tömb.length < 10) {
    i += 2;
    tömb.push(i);
}
console.log(tömb);



/*
4. feladat: 
Kérj a felhasználótól egy pozitív egész számot. 
Írd ki a konzolra az összes olyan pozitív egész számot, amelyek kisebbek vagy egyenlőek, mint a bekért szám. A kiírás növekvő sorrendben történjen. */
let bemenet = prompt ("Adj meg egy pozitív egész számot").trim(); //kiszedi a nemkívánt szóközöket, tabulátorokat,stb.
let szám = Number(bemenet);

if (bemenet === null || bemenet === '') {
    console.log("A bemenet nem szám")
}else if (szám < 0) {
    console.log(szám, "A bemenet negatív szám");
} else if (Number.isInteger(szám) == false ) {
    console.log(szám, "A bemenet nem egész szám")
} else {
    számsor(); 
}

function számsor() {
    while (i <= szám) {
        console.log(i);
        i += 1;
    }
}

/*
5. feladat: 
Oldd meg a FizzBuzz feladatot. Írd ki az első pozitív száz egész számot a konzolra a következő változtatásokkal:
- Ha a kiírandó szám 3-al osztható, de öttel nem, akkor a szám helyett a 'Fizz' stringet írd ki
- Ha a kiírandó szám 5-el osztható, de 3-al nem, akkor a szám helyett a 'Buzz' stringet írd ki
- Ha a szám 3-al és 5-el is osztható, akkor a szám helyett a 'FizzBuzz' stringet írd ki
Extra: száz helyett a felhasználótól is bekérheted a FizzBuzz maximumát. */




for (let i = 1; i <= 100; i += 1) {
    if (i % 3 === 0 && i % 5 !== 0) {
        console.log('Fizz');
    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log('Buzz');
    } else if (i % 5 === 0 && i % 3 === 0){
        console.log('FizzBuzz');
    } else {
        console.log(i);
    }
}




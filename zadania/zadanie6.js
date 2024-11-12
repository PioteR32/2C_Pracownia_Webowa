// let set = [prompt("Podaj liczbę"),prompt("Podaj liczbę"),prompt("Podaj liczbę")];
let sett = new Set();
let actualNumber;
do
{
   actualNumber = prompt("Podaj liczbę");
   sett.add(actualNumber);
}
while(actualNumber != 0);
for(let i = (sett.length-1); i >= 0 ; i--)
{
    document.write(sett[i] + " ");
}
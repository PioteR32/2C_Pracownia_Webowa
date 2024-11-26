let number_how_much = prompt("Podaj ilość liczb");
const number = [number_how_much];

for(let i = 1; i <= number_how_much; i ++)
{
    number[i] = prompt("Podaj cyfre");
}
for(let i = 0; i <= number_how_much - 1 ; i ++)
{
    document.write(number[number_how_much - i]);
    document.write("<br>");
}
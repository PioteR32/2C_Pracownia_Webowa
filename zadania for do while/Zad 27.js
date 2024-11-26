let x = prompt("Podaj długość prostokątu");
let y = prompt("Podaj wysokość prostokątu");
for(let i = 0; i < x; i ++)
    document.write('*');
for(let i = 1; i <= y - 2; i ++)
{
    document.write("<br>");
document.write('*');
for(let i = 1; i < x - 1 ; i ++)
{
    document.write("\xa0");
    document.write("\xa0");
}
document.write('*');
}
document.write("<br>");
for(let i = 0; i < x; i ++)
    document.write('*');
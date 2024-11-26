let number = prompt("Podaj wysokość piramidy");
for(let i = 1; i <= number; i ++)
{
    for(let u = i; u > 0; u--)
    {
        document.write("*");
    }
    document.write("<br>");

}
let number = prompt("Podaj liczbe");

for(let i = 1; i <= number; i ++)
{
    let number2 = 1;
    for(let u = number - i; u > 0; u--)
    {
        document.write("\xa0");
    }
    for(let y = i; y > 0; y--)
    {
        document.write(number2);
        number2++;
    }
    document.write("<br>");

}
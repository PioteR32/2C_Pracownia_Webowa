let number = [];

for(let i = 1; i <= 5; i++)
{
    number[i] = prompt("Podaj liczbe");
    if(number[i] > 5)
    {
        document.write(number[i]);
        document.write("<br>");
    }
}

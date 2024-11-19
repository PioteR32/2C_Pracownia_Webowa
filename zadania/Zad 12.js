let number = prompt("Podaj liczbe");
for(let i = number - 1; i > 0; i--)
{
    if(i % 2 !== 0)
    {
        document.write(i);
        document.write("<br>");
    }
    
}
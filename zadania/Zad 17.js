let number = prompt("Podaj liczbe");
let result = 0;
for(let i = number; i<= 100; i++)
{
    if(i % number === 0)
    {
        result = i / number;
        document.write(i);
        document.write(" / ");
        document.write(number);
        document.write(" = ");
        document.write(result);
        document.write("<br>");
    }
}
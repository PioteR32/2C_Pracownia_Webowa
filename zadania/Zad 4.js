let number = prompt("Podaj liczbe");
let result = 0;
for(let i = 1; i <= 10; i++)
{
    result = number * i;
    document.write(number);
    document.write(" * ");
    document.write(i);
    document.write(" = ");
    document.write(result);
    document.write("<br>");
}
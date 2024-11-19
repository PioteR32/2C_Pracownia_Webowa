let result = 0;
for(let number = 10; number <= 50; number++)
{
    if(number % 2 === 0)
        result = result + number;
}
document.write("Suma liczb parzystych w zakresie 10 - 50: " );
document.write(result);
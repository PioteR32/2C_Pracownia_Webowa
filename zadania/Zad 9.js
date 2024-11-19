
for(let number = 1; number <= 30; number++)
    {
        if(number % 5 == 0 || number % 3 ==0)
        {
        if(number % 3 == 0 )
            document.write("Fizz");
        if(number % 5 == 0 )
            document.write("Buzz");
        }
        else
        document.write(number);

        document.write("<br>");
    }
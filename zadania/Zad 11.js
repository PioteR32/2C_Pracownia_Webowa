let number = prompt("Podaj liczbe");
for (let i = 1; i <= number; i++)
    {
        if (number % i == 0)
        {
            document.write (i);
            document.write("<br>");

        }

    }
for(let number = 5; number <= 15; number++)
{
    document.write(number);
    if( number > 10)
        document.write(" - Liczba większa od dziesięciu");
    if( number < 10)
        document.write(" - Liczba mniejsza od dziesięciu");
    if( number == 10)
        document.write(" - Liczba wynosi dziesięć");
    document.write("<br>");
}
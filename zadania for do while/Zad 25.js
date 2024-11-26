let tablica = [];
let y = 0;
let number = prompt("Podaj liczbe");
for (let i = 1; i <= number; i++)
    {
        if (number % i == 0)
        {
            tablica[y] = i;
            y++;
        }

    }
let suma_dzielnikow = 0 ;
for(i = 0; i < tablica.length - 1; i++)
{
    suma_dzielnikow = suma_dzielnikow + tablica[i];
}
if (suma_dzielnikow === number)
    document.write("Liczba jest doskonała")

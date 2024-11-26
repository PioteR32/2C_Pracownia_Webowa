const tablica = ['1', '2', '3'];
let y = 0;

for(let i = tablica.length - 1 ; i >= tablica.length / 2 ; i-- )
{
    let tmp =  tablica[y];
    tablica[y] = tablica[i];
    tablica[i] = tmp;
    y++;
}
document.write(tablica[0]);
document.write("<br>");
document.write(tablica[1]);
document.write("<br>");
document.write(tablica[2]);
document.write("<br>");
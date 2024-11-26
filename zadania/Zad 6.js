const number =[];
let biggest_number;
for(let i = 1; i <= 5; i++)
{
    number[i] = prompt("Podaj cyfre");
}
biggest_number = number[1];
for(let i = 1; i<= 5; i++)
{
    
    if(number[i] > number[i - 1])
        biggest_number = number[i];

}
document.write("Największ liczba: ");
document.write(biggest_number);
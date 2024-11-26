let number = 0;
let nextNumber = 1;
for(let i = 0;  number + nextNumber < 100 ;)
{
    
    i = number + nextNumber;
    number = nextNumber
    nextNumber = i;
    document.write(i);
}
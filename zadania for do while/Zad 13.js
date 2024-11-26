let slowo = new String("banana");
let slowo1 = new String("");
for(let i = 1; i < slowo.length + 1;i++)
{
    slowo1 += slowo[slowo.length - i]
}
document.write(slowo1);
let slowo = new String(prompt("podaj słowo"));
let slowo1 = new String("");
for(let i = 1; i < slowo.length + 1;i++)
{
    slowo1 += slowo[slowo.length - i]
}
if(slowo1 == slowo)
{
    document.write("IS PALINDROME");
}
else
{
    document.write("ISN'T PALINDROME");
}
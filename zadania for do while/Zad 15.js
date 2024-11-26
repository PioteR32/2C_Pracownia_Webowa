let slowo = new String(prompt("Podaj wyraz"));

let sum = 0;
function isSamogloska(char)
{
    let  samogloski= ['a', 'e', 'i', 'o', 'u', 'y', 'ą', 'ę'];
    for(let i = 0; i < samogloski.length;i++)
    {
        if(char == samogloski[i].toLowerCase)
            return true;
        return false;
    }
}
for(let i = 0; i < slowo.length;i++)
{
    if(isSamogloska(slowo[i]))
    {
        sum++;
    } 
}
document.write("<br> ilość samogłosek"+ sum);
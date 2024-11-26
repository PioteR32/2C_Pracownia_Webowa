let poziomo = [1,2,3,4,5,6,7,8,9,10];
let pionowo = [1,2,3,4,5,6,7,8,9,10];
document.write("<br>" +"0 ");
for(let j = 0; j < poziomo.length;j++)
{
    document.write(poziomo[j] +" ");
}
for(let i = 0; i < pionowo.length;i++)
{
    document.write("<br>" + pionowo[i]);
    for(let j = 0; j < poziomo.length;j++)
    {
        document.write(" " + poziomo[j] * pionowo[i] +" ");
    }
}
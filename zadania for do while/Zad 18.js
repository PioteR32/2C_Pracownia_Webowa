let  samogloski= [12,213,321];
let naj = samogloski[0];
    for(let i = 0; i < samogloski.length;i++)
    {      
        if( samogloski[i] > naj)
        {
            naj = samogloski[i];
        }
    }
    document.write(naj);
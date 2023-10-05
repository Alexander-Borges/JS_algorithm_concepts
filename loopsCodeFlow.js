var num = 1;
while (num < 5)
{
    if(num == 3)
    {
        break;
        // if you have code here, it will never run!
    }
    console.log("I'm counting! The number is ", num);
    num = num + 1; // if we break, these lines won't run
}

for(var num = 1; num < 5; num += 1)
{
    if(num == 3)
    {
        continue;
    }
console.log("I'm counting! The number is ", num);
}
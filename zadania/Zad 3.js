for(let number = 2; number <= 30; number++)
    {
        let isPrime = true;
        for (let i = 2; i <= number / 2; i++) {
            if (number % i === 0) {
              isPrime = false;
            }
          }
        
          if (isPrime) {
            document.write(number);
            document.write(": Liczba jest pierwsza<br>");
          }
    }
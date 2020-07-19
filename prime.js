        document.getElementById("countId").addEventListener("click", myFunction);
        function myFunction() {
            let numStart = parseInt(document.getElementById('NumId').value);
            let primeNumber = [];
            let flag = false;
            for (let num = 2; num <= numStart; num++) {
                for (let i = 2; i < num; i++) {
                    if (num % i == 0) flag = true;
                }
                if (flag == false) {
                    console.log(`${num}是質數`);
                    primeNumber.push(`${num}是質數`);
                }
                else {
                    flag = false;
                    console.log(`${num}不是質數`);
                }
            }


            // let modes = primeNumber;
            let interval = 100; //one second
            primeNumber.forEach((mode, index) => {

                setTimeout(() => {
                    let newDiv = document.createElement('div');
                    newDiv.id = "myNewDiv";
                    newDiv.className = "cry";
                    let textNode = document.createTextNode(mode);
                    newDiv.appendChild(textNode);
                    document.body.appendChild(newDiv);
                }, index * interval)
            })

        }

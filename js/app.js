// writing immediately invoked function expression to access it locally

(function(){
    //setting up customer
    let customers = []
    //setting up the object constructor function and places everything we create in the array

    let index = 0;
    // object constructor function
    function Customer(name, img, text) {
        this.name = name
        this.img = img
        this.text = text

    }

    //create a customer function
    function createCustomer(name, img, text){
        //full img path
        let fullImage = `img/customer-${img}.jpg`

        //create a new customer instance
        const customer =  new Customer(name, fullImage, text)
        //--add to all customers
        customers.push(customer)
    }
    //pass the arguments
    createCustomer('john', 1, `  fyuf siy siufhx Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam suscipit, dolorum, neque beatae sequi molestiae iste eligendi inventore recusandae ipsum in quibusdam voluptatum ea omnis, 
    voluptas assumenda incidunt aliquam corrupti?`)

    createCustomer('Bob', 2, ` syfffffffv sfkvxad Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam suscipit, dolorum, neque beatae sequi molestiae iste eligendi inventore recusandae ipsum in quibusdam voluptatum ea omnis, 
    voluptas assumenda incidunt aliquam corrupti?`)

    createCustomer('peter', 3, `  ndfh  sdshf iusrjyysf Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam suscipit, dolorum, neque beatae sequi molestiae iste eligendi inventore recusandae ipsum in quibusdam voluptatum ea omnis, 
    voluptas assumenda incidunt aliquam corrupti?`)

    createCustomer('arnold', 4, ` ther shf siuhcbv Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam suscipit, dolorum, neque beatae sequi molestiae iste eligendi inventore recusandae ipsum in quibusdam voluptatum ea omnis, 
    voluptas assumenda incidunt aliquam corrupti?`)

    //performing the btn click
    document.querySelectorAll('.btn').forEach(function(item){
        item.addEventListener('click', function(event) {
            event.preventDefault();

            // checking if the event of the parent element exists
            if(event.target.parentElement.classList.contains('prevBtn')){
                // if statement to check if index is 0, set to customer length
                if(index === 0){
                    index = customers.length;
                }
                index--;
                //target img, name and text
                document.getElementById('customer-img').src = customers[index].img;
                document.getElementById('customer-name').textContent = customers[index].name;
                document.getElementById('customer-text').textContent = customers[index].text;
            }
            //for nextBtn
            if(event.target.parentElement.classList.contains('nextBtn')){
                if (index === (customers.length - 1)) {
                    index = 0
                }
                index++;

                document.getElementById('customer-img').src = customers[index].img;
    document.getElementById('customer-name').textContent = customers[index].name;
    document.getElementById('customer-text').textContent = customers[index].text;
            }

        })
    })


})();
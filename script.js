var reqBody = {
    amount: 50000,
    currency: "INR",
    receipt: "xyz"
   }
   
   function onBtn(){
       console.log('onBtn called...');
       var amt = document.getElementById('amount').value;
       var name = document.getElementById('name').value;
       var options = {
           "key": "rzp_test_dVdOJ3mNxbwXox",
           "amount": amt*100, // Example: 2000 paise = INR 20
           "name": name,
           "description": "description",
           "handler": function (response) {
               console.log(response);
               
           },
           "prefill": {
               "name": "ABC",
               "email": 'ABC@A.COM',
               "contact": '+919123456780'
           },
           "notes": {
               "address": "address"
           },
           "theme": {
               "color": "#15b8f3" 
           }
       };
       console.log(options);
       var propay = new Razorpay(options);
       propay.open();
   }
   
   document.getElementById('pay').addEventListener('click', onBtn);
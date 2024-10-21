require("dotenv").config();

const stripe = require('stripe')(`${process.env.SECRET_KEY}`);

const stripePayment = async({
    pubiD = "",
    productData
}) =>{
    const status = {
        ok:200,
        msg:""
    }

    const contruct_id = pubiD + `__id${new Date().getTime()}`

    try{
        const response = await stripe.checkout.sessions.create({
            payment_method_types:['card', 'us_bank_account'],
            mode:'payment',
            line_items:[
                productData
            ],
            success_url:`${process.env.serverUrl}/activate/account/redirect?type=05&id=${contruct_id}`,
            cancel_url:`${process.env.serverUrl}/activate/account/redirect?type=00&id=${contruct_id}`
        })  
        
        status.msg = response.url;
    }
    catch(err)
    {
        status.ok = 400;
        status.msg = "failed to get payment link"
    }

    return status;

}


// .catch(err =>{
//     console.log(err.message)
// })
// .then((session) =>{
//     switch(true)
//     {
//         case session !== undefined:
//             connection.send(
//                 JSON.stringify(
//                     new clientPackage({type:'checkout-invoice',msg:session.url})
//                 )
//             )
//         break;
//         default:
//             console.log('cannot obtain checkout session')
//     }
// })

module.exports = {
    stripePayment:stripePayment
}
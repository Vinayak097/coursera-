import z from 'zod'

const loginTypes=z.object({
    name:z.string().nonempty('fill name'),
    email:z.string().email().nonempty('fill email'),
    password:z.string().nonempty()
})

const purchaseType=z.object({
    name:z.string().nonempty('fill name'),
    price:z.number().nonnegative('put price'),
    maxprice:z.number().nonnegative('put price max')
})

export {loginTypes,purchaseType}
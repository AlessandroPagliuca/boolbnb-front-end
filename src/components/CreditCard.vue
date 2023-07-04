<template>
    <div class="card w-480px">
        <form class="cardBody d-flex row">
            <div class="mb-3 col">
                <label class="label">Card Number</label>
                <input ref="ccnum" class="input" maxlength="20">
                <div class="invalidMessage">
                    Your card number is invalid
                </div>
            </div>
            <div class="d-flex justify-content-between mb-3 col">
                <div class="flexGrow-1">
                    <label class="label">Expiration</label>
                    <input ref="cexp" class="input" >
                    <div class="invalidMessage">
                        Your card expiration date is invalid
                    </div>
                </div>
                <div class="w-120px ml-4 col">
                    <label class="label">CVC</label>
                    <input ref="cvc" class="input" >
                    <div class="invalidMessage">
                        CVC is invalid
                    </div>
                </div>
                <div class="mb-3 col">
                    <label class="label">Name on Card</label>
                    <input ref="cname" class="input" >
                    <div class="invalidMessage">
                        Your name is not the same as on your card
                    </div>
                </div>
                <div class="mb-3 d-flex align-items-center col">
                   
                    <button type="submit" class="button primary-light hover:primary-dark-20 active:primary-dark-50">Submit</button>
                    <div ref="ctype" class="ml-4"></div>
                </div>


            </div>

        </form>
    </div>
</template>

<script setup>
import {ref , onMounted} from 'vue'
import payform from '../payform'

const ccnum = ref(null)
const cexp = ref(null)
const cvc = ref(null)
const cname = ref(null)
const ctype = ref(null)
onMounted(()=> {
    payform().cardNumberInput(ccnum.value)
    payform().expiryInput(cexp.value)
    payform().cvcInput(cvc.value)
})

const submitCreditCard = async () => {
    if(ccnum.value.classList.contains('invalid')){
        ccnum.value.classList.remove('invalid')
    }
    if(!payform().validateCardNumber(ccnum.value.value)){
        ccnum.value.classList.add('invalid')
    }
    if(cexp.value.classList.contains('invalid')){
        cexp.value.classList.remove('invalid')
    }
    if(!payform().validateCardExpiry(...cexp.value.value.split(' / '))){
        cexp.value.classList.add('invalid')
    }
    if(cvc.value.classList.contains('invalid')){
        cvc.value.classList.remove('invalid')
    }
    if(!payform().validateCardCVC(cvc.value.value)){
        cvc.value.classList.add('invalid')
    }

    ctype(payform().validateCardNumber(ccnum.value.value) && payform().validateCardExpiry(...cexp.value.value.split(' / ')) && payform().validateCardCVC(cvc.value.value))

    const response = await fetch('hhtps://httpbin.org/post', {
        methods: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            ccnum: String(ccnum.value.value).trim(),
            cexp: cexp.value.value,
            cvc: cvc.value.value,
            cname: cname.value.value
        })
    })
    const json = await response.json()
    console.log(json?.data || json?.json)
}
</script>

<style lang="scss" scoped></style>
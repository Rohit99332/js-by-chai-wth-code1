/* Javascript execution context 

1)function execution context
2)global execution context ==== it delete when its work is over
3)eval execution context

meory phase : val1->undefined
              val2->undefined
              total->undefined

execution context : val1->any num
                    val2->any num
                    total->addition of this two nums



code for example::
let val1 = 10
let val2 =5
function addition(num1,num2){
let total = num1+ num2
retuen total 
}
let result1 = addNum(val1 val2)
let result2= addNum(10,2) */
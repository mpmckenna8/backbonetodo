console.log('this shit is even loaded.')
function makeshift(shift){
  for( i in shift){
    // will want to add a new model for each title in the shifts things.
    console.log(shift[i])
  }

}

$(".shifting").click(function(){
  console.log('got clicked')
  console.log(this.textContent)
})

var closer = [{"title":"Sweep and mop back of store","order":1,"completed":true,"id":"884efd1a-02ab-2d1c-0ac4-44a186248e59"},{"title":"Put away clean dishes","order":2,"completed":false,"id":"61cfb9fc-ed30-3dca-0a0d-f0966737a5d2"},{"title":"Do all the dishes","order":3,"completed":true,"id":"c8a168cc-06da-aa81-8b50-eb48ef436184"},{"title":"Clean Cutting Board","order":4,"completed":false,"id":"408bd88e-f2c5-6a39-7d48-a229061587a3"},{"title":"Clean microwave, toaster and food prep area","order":5,"completed":false,"id":"dbb65184-5b2a-be79-0712-2a23aefc23df"},{"title":"Brew a new decaf if it's cold or empty","order":6,"completed":true,"id":"93f6e192-0170-7c2f-3697-e10c0a2ca4d2"},{"title":"Empty out all coffee dispensers and fill with hot water.","order":7,"completed":true,"id":"41084ec8-9bd4-02c4-f317-bea405589043"},{"title":"Restock and clean cups and powders and stuff","order":8,"completed":false,"id":"5042b00c-033c-fc37-6a85-68897e2c5baa"}]

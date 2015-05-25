console.log('this shit is even loaded.')
function makeshift(shift){
  for( i in shift){
    // will want to add a new model for each title in the shifts things.
    console.log(shift[i])
  }

}

var shiftclick ;
$(".shifting").click(function(){
  console.log('got clicked')
  shiftclick = this.textContent.replace(/\s+/g, '');
  console.log(this.textContent.replace(/\s+/g, ''))
  if (shiftclick == "Opener"){
    makeshift(opener)
  }

})

var opener = [{"title":"Count out a drawer","order":1,"completed":false,"id":"eb5afc2c-a3a7-4122-75a2-e987625e38a3"},{"title":"Pull shots from each head of espresso machine","order":2,"completed":false,"id":"031a80c1-19c8-e75c-989f-4df87a8d4c09"},{"title":"Set up bakery case with new food","order":3,"completed":false,"id":"4395dcf1-e825-1aae-4aa2-64f3e6f283c1"},{"title":"Put out milk containers","order":4,"completed":false,"id":"a2777d61-9260-47be-efe9-dfda0dac257e"},{"title":"Put away clean dishes","order":5,"completed":false,"id":"93e7c192-416c-d9a9-ce9d-f157b63924e3"},{"title":"Start brewing first round of coffee by 6:50","order":6,"completed":false,"id":"1dacd20e-1e2d-7f20-680d-668f4812fff3"},{"title":"Brew all backup coffees","order":7,"completed":false,"id":"803d0ea0-2c08-1f76-d4d1-a0752ad2fe61"},{"title":"Clean!","order":8,"completed":false,"id":"df754841-0f68-2291-848b-ff3c383e64dc"}]

var midshift = [{"title":"Put away dishes","order":1,"completed":true,"id":"545b4d94-e4cd-736d-a5c8-0bb199aa8643"},{"title":"Clean all dishes","order":2,"completed":true,"id":"2d10e1d0-f3c5-dac5-21b6-7c64d43e48dc"},{"title":"Drain Toddy","order":3,"completed":true,"id":"b0eca173-0216-15df-6065-0f6ab611e58b"},{"title":"Ensure lobby is clean","order":4,"completed":true,"id":"d5d0fe86-3c66-1dda-804a-6402a8270645"},{"title":"reand crelean sanitizer buck","order":5,"completed":false,"id":"bde951d7-28a1-91b2-51a9-74b32d6125c9"},{"title":"Mix new toddy","order":6,"completed":true,"id":"3edaa811-ee98-438c-8fcc-a43d67c5a1d5"}]

var closer = [{"title":"Sweep and mop back of store","order":1,"completed":true,"id":"884efd1a-02ab-2d1c-0ac4-44a186248e59"},{"title":"Put away clean dishes","order":2,"completed":false,"id":"61cfb9fc-ed30-3dca-0a0d-f0966737a5d2"},{"title":"Do all the dishes","order":3,"completed":true,"id":"c8a168cc-06da-aa81-8b50-eb48ef436184"},{"title":"Clean Cutting Board","order":4,"completed":false,"id":"408bd88e-f2c5-6a39-7d48-a229061587a3"},{"title":"Clean microwave, toaster and food prep area","order":5,"completed":false,"id":"dbb65184-5b2a-be79-0712-2a23aefc23df"},{"title":"Brew a new decaf if it's cold or empty","order":6,"completed":true,"id":"93f6e192-0170-7c2f-3697-e10c0a2ca4d2"},{"title":"Empty out all coffee dispensers and fill with hot water.","order":7,"completed":true,"id":"41084ec8-9bd4-02c4-f317-bea405589043"},{"title":"Restock and clean cups and powders and stuff","order":8,"completed":false,"id":"5042b00c-033c-fc37-6a85-68897e2c5baa"}]

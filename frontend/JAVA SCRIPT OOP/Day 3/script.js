// function in java script //


// Question call back hell //

function abc (fn)
{
    fn( function (fn3){
        fn3(function (fn5){
            fn5();
        });

    });
}
abc (function ( fun2){
    fun2(function (fn4){
        fn4(function (){

            console.log ("Ravi kumar pandit");
        });
    });
});


// call back //

function Ravi (address, fn )
{
    fn ({phoneno :905481512 , lag: 121215})
}

Ravi("Ravi krp", function (details)
{
    console.log(details);
})
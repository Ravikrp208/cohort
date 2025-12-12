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
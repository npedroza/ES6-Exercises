var foo = (function () { 
    function bar(){
      console.log("bar")
    }
    function test(){
      private();
    }
    function private(){
        console.log("private method called")
    }
    return{bar,test}
   })();
foo.bar(); //'bar'
foo.test(); //'private method called'
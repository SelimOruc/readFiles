//import the file system functionality
var fs = require ("fs")

fs.readdir ("./resources", function (error,files){
    if (error)
    {
        console.log ("error" + error)
        throw error
    } 
    
    
   files.forEach(function (file)
   
   {
      fs.readFile("./resources/" + file,"utf8", function (error, filecontents)
      {
          if (error)
          {
                     console.log ("error" + error)
                     throw error
          }
          filecontents = JSON.parse (filecontents)
          console.log (filecontents)
      }
     )
   })
} )

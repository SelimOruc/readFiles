//import the file system functionality
var fs = require ("fs")
var foldertoread = process.argv[2]



if (foldertoread == undefined)
{
    console.log ("please specify a folder")
    return
}

fs.readdir (foldertoread, function (error,files){
    if (error)
    {
        console.log ("error" + error)
        throw error
    } 
    
    
   files.forEach(function (file)
   
   {
      fs.readFile(foldertoread + "/" + file,"utf8", function (error, filecontents)
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
})

const express = require('express');
const path = require('path')
const app = express();
module.exports = function(bot,port,command,user,pass) {
    
    const path = require('path')
    const fs = require('fs')
   var session = require('express-session')
    
    bot = bot.client
    const express = require('express')
    const app = new express()
        router = express.Router();
     app.use(router);
    app.use('/assets', express.static(path.join(__dirname, 'assets')))

    
    const bodyParser = require("body-parser")
    app.use(bodyParser.urlencoded({extended : true}));
    app.use(bodyParser.json());
    const sessions = require('express-session')
    const oneDay = 1000 * 60 * 60 * 24;
    app.use(sessions({
        secret: "ioyre89irhf893y48yfhwiehk94wyrh3qeda78tg3",
        saveUninitialized:true,
        cookie: { maxAge: oneDay },
        resave: false 
    }));
    
    
    app.get('/command/edit', islogin, function(req,res) {
        let pathh = req.query.path
        let name = pathh.replace(/%2F/g, '/')
        pathh = pathh.replace(/%2F/g, ',')
        let code = fs.readFileSync(path.join(process.cwd(), pathh))
        res.send(`
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/codemirror.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/codemirror.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/mode/javascript/javascript.js"></script>
<link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/theme/monokai.min.css">


<head>
<title>EDIT COMMAND</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
              background-color: #001f3f;
                color: #F5F5F5;
                    }
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="/admin" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a>
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a> <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

<form action='/command/save' method='post'>
            <input type="hidden" name="path" value="${req.query.path}">
            <input type="text" name="name" placeholder="Command name" value="${name.replace(command.replace('./', '') ,'')}" required>
            <br>
           
<textarea name="code" id="code" placeholder="your aoi.js code">${code}</textarea>
			
<button class="btn" type="submit">Save!</button>
<br>
<br> <br>
<a href="/command/delete?path=${req.query.path}" onclick="return confirm('Are you sure want to delete this file?')">

<button type="button" style="text-align:center;background-color:red">Delete This file for permanent!</button></a>
<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

<script>
window.onload = function () {
    var editor = CodeMirror.fromTextArea($("#code")[0], {
        lineNumbers: true,
        lineWrapping: true,
        mode: 'javascript',
        theme: 'monokai'
    });
};
</script>


</body>
</html>


`)
        })
    
    
    
    app.post('/command/save', islogin, function(req,res) {
      try {
        let name = req.body.path
       name = name.replace(/\//g, path.sep)
        let nowname = command + path.sep + req.body.name
        nowname = nowname.replace(/\//g, path.sep)
    fs.writeFileSync(process.cwd() + path.sep + name, req.body.code)
        fs.renameSync(process.cwd() + path.sep + name, process.cwd() + path.sep + nowname)
        let nowpath = nowname
    
        res.redirect( `/command/edit?path=${nowpath.replace('./', '').replace('/','')}`)
      }
      catch (e) {
      
      res.send(`
<!DOCTYPE html>
<html>
<head>
<title>dashboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
              background-color: #001f3f;
                color: #F5F5F5;
                    }
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="/admin" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a>
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a> <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

Failed to save command with reason: ${e}

<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

</body>
</html>
`) 
}
    })
    
    
    app.get('/dash', login, function(req,res) {

        res.send(`
<!DOCTYPE html>
<html>
<head>
<title>dashboard LOGIN</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
              background-color: #001f3f;
                color: #F5F5F5;
                    }
		.login-form {
			width: 300px;
			margin: 0 auto;
			font-family: Tahoma, Geneva, sans-serif;
		}
		.login-form h1 {
			text-align: center;
			color: #4d4d4d;
			font-size: 24px;
			padding: 20px 0 20px 0;
		}
		.login-form input[type="password"],
		.login-form input[type="text"] {
			width: 100%;
			padding: 15px;
			border: 1px solid #dddddd;
			margin-bottom: 15px;
			box-sizing:border-box;
		}
		.login-form input[type="submit"] {
			width: 100%;
			padding: 15px;
			background-color: #535b63;
			border: 0;
			box-sizing: border-box;
			cursor: pointer;
			font-weight: bold;
			color: #ffffff;
		}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="/admin" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a>
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a> <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

<div class="login-form">
			<h1>Admin Login</h1>
			<form action="auth" method="POST" encType="application/x-www-form-urlencoded">
				<input type="text" name="username" placeholder="Username" required>
				<input type="password" name="password" id="password" placeholder="Password" required>
                <input type="checkbox" onclick="show()">Show Password
  <script>
     function show() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}               
      </script>
				<input type="submit">
			</form>
            
		</div>

<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

</body>
</html>
`)
        })
    
    
    app.post('/auth', function(req,res) {
        let username = req.body.username
        let password = req.body.password
        if(username==user && password==pass) {
            req.session.user = username
            req.session.pass = password
            res.redirect('/admin')
            }
        else{
       res.redirect('/')
            }
        })
    
             
 
    
    
    
    app.get('/admin', islogin, async(req,res) => {
    
    let user = await bot.users.fetch('694184230271451166')
     let author = user.username + "#" + user.discriminator
    let user2 = await bot.users.fetch('826320581518557194')
     let author2 = user2.username + "#" + user2.discriminator
        res.send(`
<!DOCTYPE html>
<html>
<head>
<title>dashboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
              background-color: #001f3f;
                color: #F5F5F5;
                    }
		.login-form {
			width: 300px;
			margin: 0 auto;
			font-family: Tahoma, Geneva, sans-serif;
		}
		.login-form h1 {
			text-align: center;
			color: #4d4d4d;
			font-size: 24px;
			padding: 20px 0 20px 0;
		}
		.login-form input[type="password"],
		.login-form input[type="text"] {
			width: 100%;
			padding: 15px;
			border: 1px solid #dddddd;
			margin-bottom: 15px;
			box-sizing:border-box;
		}
		.login-form input[type="submit"] {
			width: 100%;
			padding: 15px;
			background-color: #535b63;
			border: 0;
			box-sizing: border-box;
			cursor: pointer;
			font-weight: bold;
			color: #ffffff;
		}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  .button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  }
  .button {
  transition-duration: 0.4s;
  }

  .button:hover {
    background-color: #4CAF50; /* Green */
    color: white;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="/admin" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a>
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a> <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>
<div align=center style="color:white;text-align: center;font-size:1.5vw">
<b style="color:white;text-align: center;font-size:5vw">Admin Panel For : ${bot.user.username}</b>
<br>

<br> <br> <br>
<a href="/reboot" onclick="return confirm('Are you sure want to restart the server?')">
<button type="button" style="background-color: #4CAF50;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;" >Restart server</button></a>
</div>
<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

</body>
</html>
`)
        })
        
    
    app.get('/command', islogin, async(req,res) => {
        let text = ''
 try{       
function *walkSync(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      yield* walkSync(path.join(dir, file.name));
    } else {
      yield path.join(dir, file.name);
    }
  }
}
let ff = []
for (const filePath of walkSync(command)) {
  ff.push(filePath);
}
  
for(const rr of ff) {
   let pathh = rr.replace(/\//g, "%2F")
    /*text += `<li><a href="/command/edit?path=${pathh}">
<button type="button"> <img src="https://cdn.discordapp.com/emojis/837524136837251093.png" width="150" height="50"/><br>
${rr}</button></a></li>`*/
    text += `<label><li>
<a href="/command/edit?path=${pathh}"><input type="image" name="guild" src="https://cdn.discordapp.com/emojis/837524136837251093.png" width="150px" height="150px" class="rounded-circle" onerror="this.src='https://cdn.discordapp.com/emojis/837524136837251093.png'" style="margin: 70px;border: 5px solid #ff0000;"  required><br><b><p style="color:white;text-align: center;">${rr}</p></b></a></li></label>`
    }
     }
        catch(e) {
     text = "path is invalid or error occurred"
            }
        res.send(`
<!DOCTYPE html>
<html>
<head>
<title>dashboard COMMAND</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
              background-color: #001f3f;
                color: #F5F5F5;
                    }
		.login-form {
			width: 300px;
			margin: 0 auto;
			font-family: Tahoma, Geneva, sans-serif;
		}
		.login-form h1 {
			text-align: center;
			color: #4d4d4d;
			font-size: 24px;
			padding: 20px 0 20px 0;
		}
		.login-form input[type="password"],
		.login-form input[type="text"] {
			width: 100%;
			padding: 15px;
			border: 1px solid #dddddd;
			margin-bottom: 15px;
			box-sizing:border-box;
		}
		.login-form input[type="submit"] {
			width: 100%;
			padding: 15px;
			background-color: #535b63;
			border: 0;
			box-sizing: border-box;
			cursor: pointer;
			font-weight: bold;
			color: #ffffff;
		}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="/admin" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a>
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a> <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>
<div align=center>
<h1>Create New Commands:<h1>

<a href="/command/update">
<button type="button" style="background-color: GREEN;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer;
">Update Commands</button></a> <a href="/command/create">

<button type="button" style="background-color: RED;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer;
">Create new command!</button></a>

<br>
<h1>Or Edit commands:</h1>

<br>
<input type="search" id="search" onkeyup="search()" placeholder="Search command file">
    <ul id="list">
${text}
    </ul>
  </div>
</div>
<script>
function search() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("list");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

</body>
</html>
`)
        })
    
    
    app.get('/guild',islogin, function (req,res) {
        let guild = ''
        let server = bot.guilds.cache.map(z=>z)
 for(let i = 0;i<server.length;i++){
 /*guild += `<li><a href="/guild/info?id=${server[i].id}">
<button type="button"> <img src="${server[i].iconURL({dynamic: true, size: 4096})}" width="150" /><br>
${server[i].name}</button></a></li>`*/
 guild += `<label><li>
<a href="/guild/info?id=${server[i].id}"><input type="image" name="guild" value="${server[i].id}" src="${server[i].iconURL({dynamic: true, size: 4096})}" width="150px" height="150px" class="rounded-circle" onerror="this.src='https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png'" style="margin: 70px;border: 5px solid #ff0000;"  required><br><b><p style="color:white;text-align: center;">${server[i].name}</p></b></a>
              </li></label>`

     }
     res.send(`
<!DOCTYPE html>
<html>
<head>
<title>dashboard GUILD</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
              background-color: #001f3f;
                color: #F5F5F5;
                    }
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="/admin" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a>
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a> <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>


<div style="text-align: center;">
<h1>Guilds the bot is in:</h1>
<br>
<input align=center type="search" id="search" onkeyup="search()" placeholder="Search Guild Name">
    <ul id="list">
${guild}
    </ul>
  </div>
</div>
<script>
function search() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("list");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

</body>
</html>
`)
   
        })
    
   
    app.get('/guild/info', islogin, function (req,res) {
        let info = ''
        try {
let guild = bot.guilds.cache.get(req.query.id)
info = `Id: ${guild.id}<br>Name: ${guild.name}<br>Owner Id: ${guild.ownerId}<br>Members count: ${guild.memberCount}<br>Features: ${guild.features.join(', ')}`
            }
        catch (e) {
            info = "error occurred: " + e
            }
        res.send(`
<!DOCTYPE html>
<html>
<head>
<title>GUILD INFO</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
              background-color: #001f3f;
                color: #F5F5F5;
                    }
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="/admin" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a>
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a> <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

${info}
<br> <br> <br>
<a href="/guild/leave?id=${req.query.id}" onclick="return confirm('Are you sure want to leave ${bot.guilds.cache.get(req.query.id).name} guild?')">

<button type="button" style="text-align:center;background-color:red;height:30;width:30">Leave This Guild!</button></a>
<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

</body>
</html>
`)

        })
    
    
    app.get('/command/update',islogin, function(req,res) {
        bot.loader?.update()
        res.redirect('/command')
        })
    
    app.get('/command/create', islogin, function(req,res) {
        res.send(`
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/codemirror.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/codemirror.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/mode/javascript/javascript.js"></script>
<link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/theme/monokai.min.css">


<head>
<title>EDIT COMMAND</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
              background-color: #001f3f;
                color: #F5F5F5;
                    }
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="/admin" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a> 
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a> <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

<form action='/command/create' method='post'>
            <input type="text" name="name" placeholder="Command name" value="your command name.js" required>
            <br>
           
<textarea name="code" id="code" placeholder="your aoi.js code"></textarea>
			
<button class="btn" type="submit">Create</button>

<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

<script>
window.onload = function () {
    var editor = CodeMirror.fromTextArea($("#code")[0], {
        lineNumbers: true,
        lineWrapping: true,
        mode: 'javascript',
        theme: 'monokai'
    });
};
</script>


</body>
</html>


`)
        }) 
    
    app.post('/command/create', islogin, function(req,res) {
        try{
        let nowname = command + '/' + req.body.name
        nowname = nowname.replace(/\//g, path.sep)
   nowname = nowname.replace('./','')
        fs.writeFileSync(process.cwd() + path.sep + nowname, req.body.code)
        let nowpath = nowname.replace(/,/g, '%2F')
       
        res.redirect( `/command/edit?path=${nowpath}`)
            }
        catch (e) {
  res.send(`
<!DOCTYPE html>
<html>
<head>
<title>dashboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
              background-color: #001f3f;
                color: #F5F5F5;
                    }
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="/admin" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a>
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a> <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

ERROR OCCURRED: ${e}

<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

</body>
</html>
`) 

            }
    })
    
    
    
   app.get('/command/delete', islogin, function(req,res) {
       try {
           let pathh = req.query.path
           pathh = pathh.replace(/%2F/g, path.sep)
           fs.unlinkSync(path.join(process.cwd(), pathh))
           res.redirect('/command')
           }
       catch (e) {
       res.send(`
<!DOCTYPE html>
<html>
<head>
<title>dashboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
              background-color: #001f3f;
                color: #F5F5F5;
                    }
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="/admin" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a> 
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a> <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

ERROR OCCURRED: ${e}

<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

</body>
</html>
`) 
       }

       })
    
    app.get('/guild/leave', islogin, function (req,res) {
        try { 
            bot.guilds.cache.get(req.query.id).leave()
            res.redirect( '/guild')
            }
        catch (e) {
            res.send(`
<!DOCTYPE html>
<html>
<head>
<title>dashboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
              background-color: #001f3f;
                color: #F5F5F5;
                    }
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="/admin" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a> 
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a> <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

Failed to leave guild with reason: ${e}

<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

</body>
</html>
`) 

            }
        })
    
    
    

    
    app.get('/shell', islogin, async(req, res) => {
      res.send(`
<!DOCTYPE html>
<html>
<head>
<title>dashboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
              background-color: #001f3f;
                color: #F5F5F5;
                    }
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="/admin" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a> 
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a> <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>
<div align=center>
<form action="shellexec" method='post' autocomplete='off'>
<input autocomplete="false" type="textarea" name="hidden" style="display:none">

<input type='text' name='execute' placeholder='Type command to send to server' autocomplete='false' style="width:100" size="50">
<input type='submit' value='Send!'>
</form>
</div>
<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

</body>
</html>
`) 

    })
    
    app.post('/shellexec', islogin, async(req, res) => {
      const exec = require('child_process')
      let result = '';
        try {
            result = await exec.execSync(req.body.execute).toString().replace(/\n/g, '<br>')
            }
        catch (e) {
            result = e
            }
      res.send(`
<!DOCTYPE html>
<html>
<head>
<title>dashboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
              background-color: #001f3f;
                color: #F5F5F5;
                    }
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="/admin" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a> 
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a> <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>
<p style="padding: 10px; border: 2px solid white;">${result}</p>
<form action="shellexec" method='post' autocomplete='off'>
<input autocomplete="false" type="text" name="hidden" style="display:none">

<input type='text' placeholder='Type command to send to server' autocomplete='false' name='execute' style="width:50">
<input type='submit' value='Send!'>
</form>
<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

</body>
</html>
`) 

    })
    
    app.get('/djseval', islogin, async(req, res) => {
      res.send(`
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/codemirror.css">

        <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/codemirror.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/mode/javascript/javascript.js"></script>

<link rel="stylesheet"

  href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/theme/monokai.min.css">
<head>
<title>dashboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
              background-color: #001f3f;
                color: #F5F5F5;
                    }
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="/admin" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a>
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a> <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

<form action="djseval" method='post' autocomplete='off'>
<textarea name='execute' id='execute' placeholder='Your node js code here' autocomplete='false'></textarea>
<input type='submit' value='Send!'>
</form>
<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>
<script>

window.onload = function () {

    var editor = CodeMirror.fromTextArea($("#execute")[0], {

        lineNumbers: true,

        lineWrapping: true,

        mode: 'javascript',

        theme: 'monokai'

    });

};

</script>
</body>
</html>
`) 

    })
    
    app.post('/djseval', islogin, async(req, res) => {
      let result;
        try {
            const client = bot
            result = await eval(req.body.execute)
        
            }
        catch (e) {
            result = e
            }
      res.send(`
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/codemirror.css">

        <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/codemirror.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/mode/javascript/javascript.js"></script>

<link rel="stylesheet"

  href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/theme/monokai.min.css">
<head>
<title>dashboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
              background-color: #001f3f;
                color: #F5F5F5;
                    }
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="/admin" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a> 
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a> <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

<p style="padding: 10px; border: 2px solid white;">${require('util').inspect(result, {depth:0}).replace(/\n/g, '<br>')}</p>
<form action="djseval" method='post' autocomplete='off'>
<textarea placeholder='Type command to send to server' autocomplete='false' name='execute' id='execute'>${req.body.execute}</textarea>
<div align=center>
<input type='submit' value='Send!' style="background-color: #4CAF50;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;">
</div>
</form>
<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>
<script>
window.onload = function () {
    var editor = CodeMirror.fromTextArea($("#execute")[0], {
        lineNumbers: true,
        lineWrapping: true,
        mode: 'javascript',
        theme: 'monokai'
    });
};
</script>
</body>
</html>
`) 

    })
    
    
     app.get('/aoieval', islogin, async(req, res) => {
      res.send(`
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/codemirror.css">

        <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/codemirror.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/mode/javascript/javascript.js"></script>

<link rel="stylesheet"

  href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/theme/monokai.min.css">
<head>
<title>dashboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
              background-color: #001f3f;
                color: #F5F5F5;
                    }
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="/admin" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a>
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a> <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

<form action="aoieval" method='post' autocomplete='off'>
<textarea name='execute' id='execute' placeholder='Your aoi js code here' autocomplete='false'></textarea>
<input type='submit' value='Send!'>
</form>
<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>
<script>

window.onload = function () {

    var editor = CodeMirror.fromTextArea($("#execute")[0], {

        lineNumbers: true,

        lineWrapping: true,

        mode: 'javascript',

        theme: 'monokai'

    });

};

</script>
</body>
</html>
`) 

    })
    
    app.post('/aoieval', islogin, async(req, res) => {
      let result;
        try {
            const client = bot
      
    result = await client.functionManager.interpreter(
                    client,
                    {},
                    [],
                    {
                        name: "aoi Eval",
                        code: `${req.body.execute}`,
                    },
                    client.db,
                    true,
                )

        result = result.code
            }
        catch (e) {
            result = e
            }
      res.send(`
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/codemirror.css">

        <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/codemirror.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/mode/javascript/javascript.js"></script>

<link rel="stylesheet"

  href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/theme/monokai.min.css">
<head>
<title>dashboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
              background-color: #001f3f;
                color: #F5F5F5;
                    }
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="/admin" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a> 
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a> <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

<p style="padding: 10px; border: 2px solid white;">${require('util').inspect(result, {depth:0}).replace(/\n/g, '<br>')}</p>
<form action="aoieval" method='post' autocomplete='off'>
<textarea placeholder='Type command to send to server' autocomplete='false' name='execute' id='execute'>${req.body.execute}</textarea>
<input type='submit' value='Send!'>
</form>
<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>
<script>
window.onload = function () {
    var editor = CodeMirror.fromTextArea($("#execute")[0], {
        lineNumbers: true,
        lineWrapping: true,
        mode: 'javascript',
        theme: 'monokai'
    });
};
</script>
</body>
</html>
`) 

    })
    
    
   app.get('/reboot', islogin, async(req,res) => {
     
      await res.send(`
<!DOCTYPE html>
<html>
<head>
<title>dashboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
              background-color: #001f3f;
                color: #F5F5F5;
                    }
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="/admin" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a> 
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a> <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

The server/process is restarting, this dashboard should be offline for a few seconds, if your bot not coming online for a more than 2 minute, you can check it on your hosting panel

<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

</body>
</html>
`) 
       
       process.on("exit", () => {
           
           require("child_process").spawn(process.argv.shift(), process.argv, {
                cwd: process.cwd(),
                detached: true,
                stdio: "inherit",
            });
        });
        process.exit();
       })
    
    
    app.get('/json/stats', islogin, async(req,res) => {
      let client = bot
      let days = Math.floor(client.uptime / 86400000);

      let hours = Math.floor(client.uptime / 3600000) % 24;

      let minutes = Math.floor(client.uptime / 60000) % 60;

      let seconds = Math.floor(client.uptime / 1000) % 60;
const initial = process.cpuUsage();
  const start = Date.now();
while (Date.now() - start > 1) ; 
const final = process.cpuUsage(initial);
 let cpu = ((final.user + final.system) / 1000).toFixed(2);
    res.json({
      "ram": process.memoryUsage().rss / 1024 / 1024,
      "uptime": days + "d " +  hours + "h " + minutes + "m " +  seconds + "s ",
      "cpu": cpu
      
    })
    })
    
    
    app.get('/stats',islogin,async(req,res) => {
      res.send(`
<!DOCTYPE html>
<html>
<head>
<title>dashboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
              background-color: #001f3f;
                color: #F5F5F5;
                    }
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="/admin" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a> 
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a>
  <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

<div id="stats"></div>

<script>
function stats() {
  
fetch('/json/stats')
    .then(result => result.json())
    .then((output) => {
        document.getElementById("stats").innerHTML = \`
    Ram usage: \${output.ram}MB<br>
    Cpu usage: \${output.cpu}%<br>
    Uptime: \${output.uptime}
        \`
});
}
setInterval(stats, 1000)
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

</body>
</html>
`)
    })
    
    function islogin(req,res,next) {
        if(req.session.user==user && req.session.pass==pass){
            return next()
            }
     else {
         res.redirect('/')
         }
        }
    
    
    function login(req,res,next) {
        if(req.session.user!=user || req.session.pass!=pass){
            return next()
            }
     else {
         res.redirect('/admin')
         }
        }
    
    function al(port){
  if (bot) {
    app.listen(port)
  }
  else{
    al(port)
  }
}

al()

app.get("/user", async (req,res) => {
  let b=dash.generateUrl()
  if (req.session.act){
    
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>${config.title}</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body style="background-image: url('${config.bg}');background-repeat: no-repeat;background-size: cover;">
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#"><strong>${bot.user.username}</strong></a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="/"><span class="glyphicon glyphicon-home"> Home</a></li>
      <li class="active"><a href="/select"><span class="glyphicon glyphicon-dashboard"> Dashboard</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="/logout"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
    </ul>
  </div>
</nav>
  
<div class="container" align=center>
  <img src="${config.icon}" class="img-responsive img-circle" alt="Bot">
  <b><p style="color:white;text-align: center;font-size:5vw">${bot.user.username}</p></b>
</div>
<p style="color:white;text-align: center;font-size:2vw">In <strong>${bot.guilds.cache.size}</strong> Servers!<br>Serving <strong>${bot.users.cache.size}</strong> Members!</p>
</body>
</html>`)
  }
  else{
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>${config.title}</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body style="background-image: url('${config.bg}');background-repeat: no-repeat;background-size: cover;">
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#"><strong>${bot.user.username}</strong></a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="/"><span class="glyphicon glyphicon-home"> Home</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="${b}"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
  
<div class="container" align=center>
  <img src="${config.icon}" class="img-responsive img-circle" alt="Bot">
  <b><p style="color:white;text-align: center;font-size:5vw">${bot.user.username}</p></b>
</div>
<p style="color:white;text-align: center;font-size:2vw">In <strong>${bot.guilds.cache.size}</strong> Servers!<br>Serving <strong>${bot.users.cache.size}</strong> Members!</p>
</body>
</html>`)
  }
})

app.get("/callback", async (req,res) => {
  let code = req.query.code;
  let ac = await dash.getAccessToken(code);
  req.session.act=ac
  res.redirect("/user");
})

app.get("/logout", async (req,res) => {
  req.session.destroy(function(err) {
    if (err) {
      console.log(err);
    }// cannot access session here
    else {
      console.log("Logged Out")
    }
  })
  res.redirect("/");
})


app.get("/select", async (req,res) => {
  if (req.session.act){
    let b = await dash.getCommonAdminGuilds(req.session.act);
    let d = await dash.getGuilds(req.session.act);
    let c = await dash.getAdminGuilds(req.session.act)
    for (let [i, guild] of Object.entries(d)) {
      var aa;
      var bb;
      if (c.includes(guild.id)==true && b.includes(guild.id)==true){
        aa=aa+`<label>
                    <a href="/dashboard/${guild.id}/"><input type="image" name="${guild.name}" value="${guild.id}" src="https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png" width="100px" height="100px" class="rounded-circle" onerror="this.src='https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png'"
                    style="margin: 70px;border: 5px solid #555;border: 5px solid;border-color:#228B22;"  required>
                    <br>
                    <b><p style="color:white;text-align: center;">${guild.name}</p></b></a>
                  </label>`
      }
      else if (c.includes(guild.id)==true){
        bb=bb+`<label>
                    <a href="/invite-bot/${guild.id}"><input type="image" name="${guild.name}" value="${guild.id}" src="https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png" width="100px" height="100px" class="rounded-circle" onerror="this.src='https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png'"
                    style="margin: 70px;border: 5px solid #555;border: 5px solid;border-color:#ff0000;"  required>
                    <br>
                    <b><p style="color:white;text-align: center;">${guild.name}</p></b></a>
                  </label>`
      }


      
    };
    res.send(`<head>
    <title>Select A Server</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js">
    </script>
    
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  </head>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#"><strong>${bot.user.username}</strong></a>
      </div>
      <ul class="nav navbar-nav">
        <li class="active"><a href="/"><span class="glyphicon glyphicon-home"> Home</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="/logout"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
      </ul>
    </div>
  </nav>
  <body style="background-image: url('${config.bg}');background-repeat: no-repeat;background-size: cover;">
    <b><p style="color:white;text-align: center;font-size:5vw">Select A Server:</p></b>
    <div style="text-align: center;">
      ${aa.replace("undefined","")}
    </div>
    <br>
    <br>
    <b><p style="color:white;text-align: center;font-size:5vw">Add To Server:</p></b>
    <div style="text-align: center;">
      ${bb.replace("undefined","")}
    </div>
  </body>
  `)
  }
  else{
    let b=dash.generateUrl()
    res.redirect(b)
  }

})



app.get('/invite-bot/:id', function(request, response){
  response.redirect(`https://discord.com/oauth2/authorize?response_type=code&client_id=${bot.user.id}&scope=bot+applications.commands&guild_id=${request.params.id}&disable_guild_select=false&prompt=consent&permissions=8`);
});
app.get('/dashboard/:id', async (req,res) => {
  if (req.session.act){
    let b = await dash.getCommonAdminGuilds(req.session.act);
    let d = await dash.getGuilds(req.session.act);
    
    if (b.includes(req.params.id)==true){
      for (let [i, guild] of Object.entries(d)) {
        if (guild.id==req.params.id){
          let gname=guild.name;
          let gicon = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
          let prefix = await bot.db.get("main","prefix",req.params.id)
          res.send(`<!DOCTYPE html>
<html>
<title>${gname}'s Dashboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<body align=center style="background-image: url('${config.bg}');background-repeat: no-repeat;background-size: cover;">
<div class="w3-container">
  <h2 style="color:white;text-align: center;font-size:5vw">${gname}'s Dashboard</h2>
  <button onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-green w3-large">Change Prefix</button>
  <div id="id01" class="w3-modal">
    <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px">
      <div class="w3-center"><br>
        <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
        <img src="${gicon}" alt="${gname}" style="width:30%" class="w3-circle w3-margin-top" onerror="this.src='https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png'">
      </div>
      <form class="w3-container" action="/${guild.id}/setprefix">
        <div class="w3-section">
          <label><b>Prefix</b></label>
          <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="${prefix.value}" name="prefix" required>
          <button class="w3-button w3-block w3-green w3-section w3-padding" type="submit">Change</button>
        </div>
      </form>
      <div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
        <button onclick="document.getElementById('id01').style.display='none'" type="button" class="w3-button w3-red">Cancel</button>
      </div>
    </div>
  </div>
</div>
            
</body>
</html>
`)
        }
      }
    }
    else {
      res.send("Unauhorized!")
    }
    
  }
  else{
    let b=dash.generateUrl()
    res.redirect(b)
  }

});



app.get('/:id/setprefix', async (req,res) => {
  if (req.session.act){
    let b = await dash.getCommonAdminGuilds(req.session.act);
    
    if (b.includes(req.params.id)==true){
      let c = await bot.db.set("main", "prefix", req.params.id, req.query.prefix);
      res.redirect(`/dashboard/${req.params.id}`)
    }
    else{
      res.send("Unauthorized!")
    }
  }
  else{
    let b=dash.generateUrl()
    res.redirect(b)
  }
})   

app.listen(3218)
console.log("dashboard ready in port: "+port)
    }
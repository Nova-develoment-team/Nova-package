module.exports = {
name: "eval",
aliases: ['aoi' , 'ev'],
code:`
$createfile[$eval[$message];data.txt]

$if[$message[1]==$djseval[client.token;yes]]
$createfile[$readfile[Nova/fooler/token.fake.txt];file.txt]
$log[ [DEBUG] :: LMAO WE TROLLED THEM]
$endif
$onlyForids[$botownerid;870441674525012018;715350994678055004;746295959251583048;843536174726512642;only my  owners may use this command]`}


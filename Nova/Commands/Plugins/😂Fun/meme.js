module.exports = ({
name: "meme",
code: `$title[$jsonRequest[https://api.popcat.xyz/meme;title]]
$image[$jsonRequest[https://api.popcat.xyz/meme;image]]
$footer[Upvotes: $jsonRequest[https://api.popcat.xyz/meme;upvotes]]
$color[$GetServervar[color]]

$log[[DEBUG] :: $username, used the meme command]
`
})
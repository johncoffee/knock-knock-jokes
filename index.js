module.exports=()=>require("./jokes.json").sort(()=>-1+Math.random()*2).map(({name,answer})=>`
Knock, knock.
Who’s there?
${name}
${name} who?
`+name+' '+answer)[0]
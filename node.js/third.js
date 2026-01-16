const http=require('http');
const server=http.createServer((req,res)=>
{
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>input user details</title></head>');
    if(req.url==='/')
    {
    res.write('<body><h1>Enter your details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your username"><br><br>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    return res.end();
    }
    else if(req.method==='POST'&& req.url.toLowerCase()==='/submit-details')
    {
        const body=[];
        req.on('data',chunk =>
        {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody=Buffer.concat (body).toString();
            console.log(parsedBody);
            const params=new URLSearchParams(parsedBody);
            // const jsonObject={};
            // for(const [key ,value] of params.entries())
            // {
            //     jsonObject[key]=value;
            // }
            const bodyObject=Object.fromEntries(params);
            console.log(bodyObject);
                   fs.writeFileSync('user-details.txt', JSON.stringify(bodyObject));

        });

        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.write('</body>');
        res.write('</html>');
});
server.listen(3001,()=>
{
    console.log('Server listening on port 3001');
});
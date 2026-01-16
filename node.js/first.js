console.log('This is the first JavaScript file of node.js...');
//dir first.js
//node first.js
const fs=require('fs');
fs.writeFile("output.txt","Writing file" ,(err)=>
{
    if(err) console.log("errors occured");
    else console.log("file written successfully");
});
//what is repl?=> 
    //streamlines interactive shell
//quick testing ideal for testing and debugging small code snippets
//built in help offers help commands via .help
//session management supports saving (.save) and loading (.load) code snippets
//node.js api accesses provides direct access to node.js api for experimentation
//customizable :allows customization of prompt and behaviour settings..
//read evalualte print loop
//read input from user
//evaluate the input as javascript code
//print the result to console
//loop back to read more input until exit command is given
//how dns works
//domain name entry user types the domain eg www.example.com into an browser
//browser sends a request to a dns server to resolve the domain name into an ip address
//dns server provides the correct ip address for the domain.
//browser connects: the browser uses the ip to connect to the web server and loads the website
//root dns servers: these servers are at the top of the dns hierarchy and direct queries to tld servers
//tld servers: these servers manage top level domains like .com .org .net and direct queries to authoritative name servers
//authoritative name servers: these servers hold the actual dns records for specific domains and provide the ip address when queried
//client request initiation the client initiates a network call by entering a url
// dns resolution : the browser contacts a dns server to get the ip address of the domain
// tcp connection the browser establishes a tcp connection with the server ip address
// http request the browser sends an http request to the server for the desired resource
// server response the server processes the request and prepares the response
//http response the server sends the http response back to the browser
//network transmission:  the response travels back to the client over internet
//client recieves response: the browser recieves and interprets the response
//rendering the content the browser renders the webpage for the user to view and interact with
//http method
//encryption not done by http while in https encryption is done using ssl/tls

// node core modules
//fs module for file system operations
//http module for creating web servers and handling http requests
//path module for handling and transforming file paths
//os module for accessing operating system information
//events module for working with event-driven programming
//crypto module for cryptographic operations
//url parses and formats urls
//https lauch a ssl servers

// require keyword
//purpose imports modules in node.js
//caching modules are cached after first require call
//.js is added automatically and is not needed at the end of module name
// path resolution : node.js searches for modules in core , node_modules and file paths
// const os=require('os');
// console.log("Operating System Info:");
// console.log("Platform:",os.platform());
//syntax const moduleName=require('module');
//load the built in http module
//const http=require('http');
// load the third party express module
//const express=require('express');
//load the local custom module
//const myModule=require('./myModule');

let dynamicImportSupported = false;
try{
 Function('import("")');
 dynamicImportSupported = true;
}catch(err){};

console.log(dynamicImportSupported);

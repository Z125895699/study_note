/**
 * 
 * @param ver1 
 * @param ver2 
 * @returns 
 */
function compareVersion(ver1:string,ver2:string):number{
  const parts1 = ver1.split('.').map(Number);
  const parts2 = ver2.split('.').map(Number);

  const maxLen = Math.max(parts1.length, parts2.length);

  for (let i = 0; i < maxLen; i++) {
    const num1 = i < parts1.length ? parts1[i] : 0;
    const num2 = i < parts2.length ? parts2[i] : 0;

    if(num1 > num2)return 1;
    if(num1 < num2)return -1;
  }
  return 0
}

console.log(compareVersion('1.1.2','1.1.1'));

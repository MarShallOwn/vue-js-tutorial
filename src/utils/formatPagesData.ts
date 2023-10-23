export const formatPagesData = (obj) => {
    const stack = [obj];
    while (stack?.length > 0) {
      const currentObj = stack.pop();
      Object.keys(currentObj).forEach(key => {
        //console.log(`key: ${key}, value: ${currentObj[key]}`);
  
        if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
          stack.push(currentObj[key]);
        }
  
        if(key === "pageId") {
          currentObj.value = currentObj[key];
          delete currentObj[key]
        }
        if(key === "pageName") {
          currentObj.label = currentObj[key];
          delete currentObj[key]
        }
        if(key === "subpages") {
          currentObj.children = currentObj[key];
          delete currentObj[key]
        }
      });
    }
  };
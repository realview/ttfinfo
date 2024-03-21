import fs from 'fs';
import nameTable from './tableName';
import postTable from './tablePost';
import os2Table from './tableOS2';

function ttfInfo(data) {
  try {
    const info = {
      tables: {
        name: nameTable(data),
        post: postTable(data),
        'OS/2': os2Table(data)
      }
    };

    return info;
  }
  catch(e) {
    console.error(String(e));
    throw ("Error reading ttf: " + String(e));
  }
}

export function  ttfInfoFromPath(path ) {
  
  const data =  fs.readFileSync(path);
  const info = ttfInfo(data);
  return data
    
}

export  function ttfInfoFromData(data) {

      const info = ttfInfo(data);
      return data
  
}
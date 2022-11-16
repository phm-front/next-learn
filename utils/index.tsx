import { MongoClient } from 'mongodb'
export function getMongoDbUri(name: string) {
  return `mongodb+srv://phm-front:${encodeURIComponent('phm@1997')}@cluster0.vpetimx.mongodb.net/${name}?retryWrites=true&w=majority`;
}

export function getClientByName(name: string) {
  const uri = getMongoDbUri(name) // test相对于数据库名 documents相当于表名
  return new MongoClient(uri);
}

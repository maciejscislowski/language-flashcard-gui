import {getStatusText, InMemoryDbService, RequestInfo, ResponseOptions, STATUS} from "angular-in-memory-web-api";
import {Injectable} from "@angular/core";
import decksMockData from './decks.json';
import {of} from "rxjs";
import {Deck} from "@shared/models/deck";
@Injectable({providedIn: "root"})
export class MockDataProvider implements InMemoryDbService {

  createDb() {
    let idSequence = 1;
    return of({
      'decks': (decksMockData as Array<any>).map(el => {
        const dto: Deck = {
          id: idSequence++,
          name: el['name']
        }
        return dto;
      })
    });
  }
  // HTTP GET interceptor to support offset and limit query parameters
  get(reqInfo: RequestInfo) {
    // if (reqInfo.query.has('page') && reqInfo.query.has('size') && reqInfo.collection) {
    //   const offset = +reqInfo.query.get('page')[0];
    //   const limit = +reqInfo.query.get('size')[0];
    //   // Remove offset and limit from query parameters so they're not considered as filtering parameters for the
    //   // collection later on.
    //   reqInfo.query.delete('page');
    //   reqInfo.query.delete('size');
    //   return reqInfo.utils.createResponse$(() => {
    //     const collection = reqInfo.collection as Array<{ id: any }>;
    //     let meta: any;
    //     let data: any;
    //     if (reqInfo.id) {
    //       data = reqInfo.utils.findById(collection, reqInfo.id);
    //     } else {
    //       const filteredCollection = MockDataProvider.applyQuery(collection, reqInfo.query);
    //       const totalCount = filteredCollection.length;
    //       meta = {totalCount};
    //       console.log(`offset: ${offset}, limit: ${limit}`);
    //       data = filteredCollection.slice(offset * limit, offset * limit + limit);
    //       console.log(`Total count: ${totalCount}, and returned data count: ${data.length}`);
    //     }
    //     const response = new Page<SearchResultWrapper>();
    //     response.page = {
    //       size: limit,
    //       totalElements: meta.totalCount,
    //       totalPages: meta.totalCount / limit,
    //       number: offset,
    //       previousNumber: 0
    //     };
    //     response._embedded = {
    //       'allie-catalog': []
    //     };
    //     response._embedded['allie-catalog'].push(...data)
    //     const options: ResponseOptions = data ?
    //       {
    //         body: response,
    //         status: STATUS.OK
    //       } :
    //       {
    //         body: {error: `'${reqInfo.collectionName}' with id='${reqInfo.id}' not found`},
    //         status: STATUS.NOT_FOUND
    //       };
    //     return MockDataProvider.finishOptions(options, reqInfo);
    //   });
    // } else {

      return undefined;
    // }
  }

  // private static finishOptions(options: ResponseOptions, {headers, url}: RequestInfo) {
  //   options.statusText = getStatusText(options.status);
  //   options.headers = headers;
  //   options.url = url;
  //   return options;
  // }
  // private static applyQuery(collection: Array<object>, query: Map<string, string[]>) {
  //   // extract filtering conditions - {propertyName, RegExps) - from query/search parameters
  //   const conditions = [];
  //   query.forEach((values, key) => {
  //     values.forEach(value => {
  //       conditions.push({key, rx: new RegExp(decodeURI(value), 'i')});
  //     });
  //   });
  //   const len = conditions.length;
  //   if (!len) {
  //     return collection;
  //   }
  //   // AND the RegExp conditions
  //   return collection.filter(row => {
  //     let ok = true;
  //     let i = len;
  //     while (ok && i) {
  //       i -= 1;
  //       const cond = conditions[i];
  //       ok = cond.rx.test(row[cond.key]);
  //     }
  //     return ok;
  //   });
  // }

}

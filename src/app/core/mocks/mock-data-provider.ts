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

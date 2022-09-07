import {
  query,
  style,
  group,
  animate,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HomeService } from '../home.service';
import { data1 } from '../../assets/json/example.json';
import * as moment from 'moment';

const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '200px' }), {
    optional: true,
  }),
  group([
    query(
      ':enter',
      [
        style({ transform: 'translateX(-200px)' }),
        animate('.1s ease-out', style({ transform: 'translateX(0%)' })),
      ],
      {
        optional: true,
      }
    ),
    query(
      ':leave',
      [
        style({ transform: 'translateX(0%)' }),
        animate('.1s ease-out', style({ transform: 'translateX(200px)' })),
      ],
      {
        optional: true,
      }
    ),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '200px' }), {
    optional: true,
  }),
  group([
    query(
      ':enter',
      [
        style({ transform: 'translateX(200px)' }),
        animate('.1s ease-out', style({ transform: 'translateX(0%)' })),
      ],
      {
        optional: true,
      }
    ),
    query(
      ':leave',
      [
        style({ transform: 'translateX(0%)' }),
        animate('.1s ease-out', style({ transform: 'translateX(-200px)' })),
      ],
      {
        optional: true,
      }
    ),
  ]),
];

@Component({
  selector: 'app-second-route',
  templateUrl: './second-route.component.html',
  styleUrls: ['./second-route.component.scss'],
  animations: [
    trigger('animImageSlider', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ],
})
export class SecondRouteComponent implements OnInit {
  myDateValue!: Date;
  toDate!: Date;
  duplicateArray = [];
  counter: number = 0;
  images = [
    'https://wallpapercave.com/wp/lg6spDq.jpg',
    'https://placeimg.com/300/300/nature/7',
    'https://placeimg.com/300/300/nature/8',
    'https://placeimg.com/300/300/nature/9',
    'https://placeimg.com/300/300/nature/2',
    'https://placeimg.com/300/300/nature/3',
    'https://placeimg.com/300/300/nature/1',
  ];
  constructor(private homeService: HomeService) {}

  // searchName:any

  displayedColumns: any[] = [
    'id',
    'type',
    'links',
    'attributes_content',
    'attributes_urn',
    'attributes_created_at',
    'attributes_updated_at',
    'attributes_properties',
    'attributes_display_properties_type',
    'attributes_display_properties_image',
    'relationships_authors_links_self',
    'relationships_authors_links_related',
    'relationships_publisher_links_self',
    'relationships_publisher_links_related',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false })
  set sort(value: MatSort) {
    this.dataSource.sort = value;
  }

  jsonData: any = [
    {
      "id": "1",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/1"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/1",
          "created_at": "2019-06-05T17:42:58.876Z",
          "updated_at": "2019-06-05T17:42:58.876Z",
          "content": "The Great Gatsby",
          "properties": null,
          "display_properties": {
              "type": "Hard cover",
              "image": "https://images-na.ssl-images-amazon.com/images/I/51vv75oglyL._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/1/relationships/authors",
                  "related": "http://www.example.com/books/1/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/1/relationships/publishers",
                  "related": "http://www.example.com/books/1/publishers"
              }
          }
      }
  },
  {
      "id": "2",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/2"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/2",
          "created_at": "2019-06-05T17:42:58.898Z",
          "updated_at": "2019-06-05T17:42:58.898Z",
          "content": "Moby Dick",
          "properties": null,
          "display_properties": {
              "type": "Hard cover",
              "image": "https://images-na.ssl-images-amazon.com/images/I/41h1CVFjjdL._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/2/relationships/authors",
                  "related": "http://www.example.com/books/2/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/2/relationships/publishers",
                  "related": "http://www.example.com/books/2/publishers"
              }
          }
      }
  },
  {
      "id": "3",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/3"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/3",
          "created_at": "2019-06-05T17:42:58.936Z",
          "updated_at": "2019-06-05T17:42:58.936Z",
          "content": "Hamlet",
          "properties": null,
          "display_properties": {
              "type": "Soft cover",
              "image": "https://images-na.ssl-images-amazon.com/images/I/51dhOwUuI3L._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/3/relationships/authors",
                  "related": "http://www.example.com/books/3/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/3/relationships/publishers",
                  "related": "http://www.example.com/books/3/publishers"
              }
          }
      }
  },
  {
      "id": "4",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/4"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/4",
          "created_at": "2019-06-05T17:42:58.953Z",
          "updated_at": "2019-06-05T17:42:58.953Z",
          "content": "Lolita",
          "properties": null,
          "display_properties": {
              "type": "Soft cover",
              "image": "https://images-na.ssl-images-amazon.com/images/I/41beWU7rn8L._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/4/relationships/authors",
                  "related": "http://www.example.com/books/4/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/4/relationships/publishers",
                  "related": "http://www.example.com/books/4/publishers"
              }
          }
      }
  },
  {
      "id": "5",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/5"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/5",
          "created_at": "2019-06-05T17:42:58.974Z",
          "updated_at": "2019-06-05T17:42:58.974Z",
          "content": "Wuthering Heights",
          "properties": null,
          "display_properties": {
              "type": "Soft cover",
              "image": "http://ecx.images-amazon.com/images/I/51-6ApKTHaL._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/5/relationships/authors",
                  "related": "http://www.example.com/books/5/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/5/relationships/publishers",
                  "related": "http://www.example.com/books/5/publishers"
              }
          }
      }
  },
  {
      "id": "6",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/6"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/6",
          "created_at": "2019-06-05T17:42:58.994Z",
          "updated_at": "2019-06-05T17:42:58.994Z",
          "content": "Anna Karenina",
          "properties": null,
          "display_properties": {
              "type": "Soft cover",
              "image": "http://ecx.images-amazon.com/images/I/51vPf2CfSEL._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/6/relationships/authors",
                  "related": "http://www.example.com/books/6/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/6/relationships/publishers",
                  "related": "http://www.example.com/books/6/publishers"
              }
          }
      }
  },
  {
      "id": "7",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/7"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/7",
          "created_at": "2019-06-05T17:42:59.010Z",
          "updated_at": "2019-06-05T17:42:59.010Z",
          "content": "Gulliver's Travels",
          "properties": null,
          "display_properties": {
              "type": "Soft cover",
              "image": "https://images-na.ssl-images-amazon.com/images/I/61TNd4Ta8NL._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/7/relationships/authors",
                  "related": "http://www.example.com/books/7/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/7/relationships/publishers",
                  "related": "http://www.example.com/books/7/publishers"
              }
          }
      }
  },
  {
      "id": "8",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/8"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/8",
          "created_at": "2019-06-05T17:42:59.037Z",
          "updated_at": "2019-06-05T17:42:59.037Z",
          "content": "The Stories of Anton Chekhov",
          "properties": null,
          "display_properties": {
              "type": "Hard cover",
              "image": "https://images-na.ssl-images-amazon.com/images/I/51Oq8JfXh4L._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/8/relationships/authors",
                  "related": "http://www.example.com/books/8/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/8/relationships/publishers",
                  "related": "http://www.example.com/books/8/publishers"
              }
          }
      }
  },
  {
      "id": "9",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/9"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/9",
          "created_at": "2019-06-05T17:42:59.134Z",
          "updated_at": "2019-06-05T17:42:59.134Z",
          "content": "David Copperfield",
          "properties": null,
          "display_properties": {
              "type": "Hard cover",
              "image": "http://ecx.images-amazon.com/images/I/51-GTHVUv7L._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/9/relationships/authors",
                  "related": "http://www.example.com/books/9/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/9/relationships/publishers",
                  "related": "http://www.example.com/books/9/publishers"
              }
          }
      }
  },
  {
      "id": "10",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/10"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/10",
          "created_at": "2019-06-05T17:42:58.876Z",
          "updated_at": "2019-06-05T17:42:58.876Z",
          "content": "The Great Gatsby 10",
          "properties": null,
          "display_properties": {
              "type": "Hard cover",
              "image": "https://images-na.ssl-images-amazon.com/images/I/51vv75oglyL._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/10/relationships/authors",
                  "related": "http://www.example.com/books/10/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/10/relationships/publishers",
                  "related": "http://www.example.com/books/10/publishers"
              }
          }
      }
  },
  {
      "id": "11",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/11"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/11",
          "created_at": "2019-06-05T17:42:58.876Z",
          "updated_at": "2019-06-05T17:42:58.876Z",
          "content": "The Great Gatsby 11",
          "properties": null,
          "display_properties": {
              "type": "Hard cover",
              "image": "https://images-na.ssl-images-amazon.com/images/I/51vv75oglyL._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/11/relationships/authors",
                  "related": "http://www.example.com/books/11/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/11/relationships/publishers",
                  "related": "http://www.example.com/books/11/publishers"
              }
          }
      }
  },
  {
      "id": "12",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/12"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/12",
          "created_at": "2019-06-05T17:42:58.898Z",
          "updated_at": "2019-06-05T17:42:58.898Z",
          "content": "Moby Dick asd",
          "properties": null,
          "display_properties": {
              "type": "Hard cover",
              "image": "https://images-na.ssl-images-amazon.com/images/I/41h1CVFjjdL._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/12/relationships/authors",
                  "related": "http://www.example.com/books/12/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/12/relationships/publishers",
                  "related": "http://www.example.com/books/12/publishers"
              }
          }
      }
  },
  {
      "id": "13",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/13"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/13",
          "created_at": "2019-06-05T17:42:58.936Z",
          "updated_at": "2019-06-05T17:42:58.936Z",
          "content": "Hamlet asda",
          "properties": null,
          "display_properties": {
              "type": "Soft cover",
              "image": "https://images-na.ssl-images-amazon.com/images/I/51dhOwUuI3L._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/13/relationships/authors",
                  "related": "http://www.example.com/books/13/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/13/relationships/publishers",
                  "related": "http://www.example.com/books/13/publishers"
              }
          }
      }
  },
  {
      "id": "14",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/14"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/14",
          "created_at": "2019-06-05T17:42:58.953Z",
          "updated_at": "2019-06-05T17:42:58.953Z",
          "content": "Lolita sadasd",
          "properties": null,
          "display_properties": {
              "type": "Soft cover",
              "image": "https://images-na.ssl-images-amazon.com/images/I/41beWU7rn8L._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/14/relationships/authors",
                  "related": "http://www.example.com/books/14/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/14/relationships/publishers",
                  "related": "http://www.example.com/books/14/publishers"
              }
          }
      }
  },
  {
      "id": "15",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/15"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/15",
          "created_at": "2019-06-05T17:42:58.974Z",
          "updated_at": "2019-06-05T17:42:58.974Z",
          "content": "Wuthering Heights asdad",
          "properties": null,
          "display_properties": {
              "type": "Soft cover",
              "image": "http://ecx.images-amazon.com/images/I/51-6ApKTHaL._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/15/relationships/authors",
                  "related": "http://www.example.com/books/15/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/15/relationships/publishers",
                  "related": "http://www.example.com/books/15/publishers"
              }
          }
      }
  },
  {
      "id": "16",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/16"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/16",
          "created_at": "2019-06-05T17:42:58.994Z",
          "updated_at": "2019-06-05T17:42:58.994Z",
          "content": "Anna Karenina gfgf",
          "properties": null,
          "display_properties": {
              "type": "Soft cover",
              "image": "http://ecx.images-amazon.com/images/I/51vPf2CfSEL._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/16/relationships/authors",
                  "related": "http://www.example.com/books/16/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/16/relationships/publishers",
                  "related": "http://www.example.com/books/16/publishers"
              }
          }
      }
  },
  {
      "id": "17",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/17"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/17",
          "created_at": "2019-06-05T17:42:59.010Z",
          "updated_at": "2019-06-05T17:42:59.010Z",
          "content": "Gulliver's Travels sdasd",
          "properties": null,
          "display_properties": {
              "type": "Soft cover",
              "image": "https://images-na.ssl-images-amazon.com/images/I/61TNd4Ta8NL._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/17/relationships/authors",
                  "related": "http://www.example.com/books/17/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/17/relationships/publishers",
                  "related": "http://www.example.com/books/17/publishers"
              }
          }
      }
  },
  {
      "id": "18",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/18"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/18",
          "created_at": "2019-06-05T17:42:59.037Z",
          "updated_at": "2019-06-05T17:42:59.037Z",
          "content": "The Stories of Anton Chekhov sdasdasd",
          "properties": null,
          "display_properties": {
              "type": "Hard cover",
              "image": "https://images-na.ssl-images-amazon.com/images/I/51Oq8JfXh4L._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/18/relationships/authors",
                  "related": "http://www.example.com/books/18/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/18/relationships/publishers",
                  "related": "http://www.example.com/books/18/publishers"
              }
          }
      }
  },
  {
      "id": "19",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/19"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/19",
          "created_at": "2019-06-05T17:42:59.134Z",
          "updated_at": "2019-06-05T17:42:59.134Z",
          "content": "David Copperfield sdasd",
          "properties": null,
          "display_properties": {
              "type": "Hard cover",
              "image": "http://ecx.images-amazon.com/images/I/51-GTHVUv7L._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/19/relationships/authors",
                  "related": "http://www.example.com/books/19/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/19/relationships/publishers",
                  "related": "http://www.example.com/books/19/publishers"
              }
          }
      }
  },
  {
      "id": "20",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/14"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/14",
          "created_at": "2019-06-05T17:42:58.953Z",
          "updated_at": "2019-06-05T17:42:58.953Z",
          "content": "Lolita sadasd",
          "properties": null,
          "display_properties": {
              "type": "Soft cover",
              "image": "https://images-na.ssl-images-amazon.com/images/I/41beWU7rn8L._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/14/relationships/authors",
                  "related": "http://www.example.com/books/14/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/14/relationships/publishers",
                  "related": "http://www.example.com/books/14/publishers"
              }
          }
      }
  },
  {
      "id": "21",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/15"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/15",
          "created_at": "2019-06-05T17:42:58.974Z",
          "updated_at": "2019-06-05T17:42:58.974Z",
          "content": "Wuthering Heights asdad",
          "properties": null,
          "display_properties": {
              "type": "Soft cover",
              "image": "http://ecx.images-amazon.com/images/I/51-6ApKTHaL._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/15/relationships/authors",
                  "related": "http://www.example.com/books/15/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/15/relationships/publishers",
                  "related": "http://www.example.com/books/15/publishers"
              }
          }
      }
  },
  {
      "id": "22",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/16"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/16",
          "created_at": "2019-06-05T17:42:58.994Z",
          "updated_at": "2019-06-05T17:42:58.994Z",
          "content": "Anna Karenina gfgf",
          "properties": null,
          "display_properties": {
              "type": "Soft cover",
              "image": "http://ecx.images-amazon.com/images/I/51vPf2CfSEL._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/16/relationships/authors",
                  "related": "http://www.example.com/books/16/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/16/relationships/publishers",
                  "related": "http://www.example.com/books/16/publishers"
              }
          }
      }
  },
  {
      "id": "23",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/17"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/17",
          "created_at": "2019-06-05T17:42:59.010Z",
          "updated_at": "2019-06-05T17:42:59.010Z",
          "content": "Gulliver's Travels sdasd",
          "properties": null,
          "display_properties": {
              "type": "Soft cover",
              "image": "https://images-na.ssl-images-amazon.com/images/I/61TNd4Ta8NL._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/17/relationships/authors",
                  "related": "http://www.example.com/books/17/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/17/relationships/publishers",
                  "related": "http://www.example.com/books/17/publishers"
              }
          }
      }
  },
  {
      "id": "24",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/18"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/18",
          "created_at": "2019-06-05T17:42:59.037Z",
          "updated_at": "2019-06-05T17:42:59.037Z",
          "content": "The Stories of Anton Chekhov sdasdasd",
          "properties": null,
          "display_properties": {
              "type": "Hard cover",
              "image": "https://images-na.ssl-images-amazon.com/images/I/51Oq8JfXh4L._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/18/relationships/authors",
                  "related": "http://www.example.com/books/18/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/18/relationships/publishers",
                  "related": "http://www.example.com/books/18/publishers"
              }
          }
      }
  },
  {
      "id": "25",
      "type": "books",
      "links": {
          "self": "http://www.example.com/books/19"
      },
      "attributes": {
          "urn": "urn:perx:nginterview::123456789:question/19",
          "created_at": "2019-06-05T17:42:59.134Z",
          "updated_at": "2019-06-05T17:42:59.134Z",
          "content": "David Copperfield sdasd",
          "properties": null,
          "display_properties": {
              "type": "Hard cover",
              "image": "http://ecx.images-amazon.com/images/I/51-GTHVUv7L._SL160_.jpg"
          }
      },
      "relationships": {
          "authors": {
              "links": {
                  "self": "http://www.example.com/books/19/relationships/authors",
                  "related": "http://www.example.com/books/19/authors"
              }
          },
          "publishers": {
              "links": {
                  "self": "http://www.example.com/books/19/relationships/publishers",
                  "related": "http://www.example.com/books/19/publishers"
              }
          }
      }
  },
  ];

  ngOnInit() {
    // Initialize data of the JSON file into the table
    this.dataSource = new MatTableDataSource(this.jsonData);
  }

  ngAfterViewInit() {
    // Initialize data of the JSON file into the Sorting table
    this.dataSource = new MatTableDataSource(this.jsonData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'links':
          return item.links['self'];

        case 'relationships_authors_links_self':
          return item.relationships['authors']['links']['self'];
        case 'relationships_authors_links_related':
          return item.relationships['authors']['links']['related'];
        case 'relationships_publisher_links_self':
          return item.relationships['publishers']['links']['self'];
        case 'relationships_publisher_links_related':
          return item.relationships['publishers']['links']['related'];

        case 'attributes_content':
          return item.attributes['content'];
        case 'attributes_urn':
          return item.attributes['urn'];
        case 'attributes_created_at':
          return item.attributes['created_at'];
        case 'attributes_updated_at':
          return item.attributes['updated_at'];
        case 'attributes_properties':
          return item.attributes['properties'];

        case 'attributes_display_properties_type':
          return item.attributes['display_properties']['type'];
        default:
          return item[property];
      }
    };
  }

// Filter data
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    let resultsArray = this.getResult(filterValue, this.dataSource.data);

    if (filterValue == '') {
      this.dataSource = new MatTableDataSource(this.jsonData);
    } else if (resultsArray.length > 0) {
      this.dataSource = new MatTableDataSource(resultsArray);
    }
  }

 // Filter data from nested JSON.
  getResult(filterBy: any, objList: any) {
    if (filterBy !== '') {
      filterBy = filterBy.toLowerCase();
    }

    return objList.filter(function (obj: any) {
      if (
        obj['attributes']['urn'].toLowerCase().includes(filterBy) ||
        obj['attributes']['content'].toLowerCase().includes(filterBy) ||
        obj['attributes']['created_at'].toLowerCase().includes(filterBy) ||
        obj['attributes']['updated_at'].toLowerCase().includes(filterBy) ||
        obj['attributes']['display_properties']['type']
          .toLowerCase()
          .includes(filterBy)
      )
        return obj;
    });
  }

  // // Filter by date
  filterDate() {
    console.log('}}');
    
    let fromdate = new Date(this.myDateValue);
    let todate = new Date(this.toDate);
    if (this.myDateValue && this.toDate) {
      const selectedMembers = this.jsonData.filter((m: any) => {
        if (
          new Date(m.attributes.created_at) >= fromdate &&
          new Date(m.attributes.created_at) <= todate
        ) {
          return m;
        }
      });
      this.dataSource = new MatTableDataSource(selectedMembers);
    } else {
      this.dataSource = new MatTableDataSource();
    }
  }
}

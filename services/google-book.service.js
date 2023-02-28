'use strict'
import { utilService } from './util.service.js'
export const googleBookService = {
  query,
  updateBook,
}
const googleBooks = {
  kind: 'books#volumes',
  totalItems: 756,
  items: [
    {
      kind: 'books#volume',
      id: 'DgbhAAAAMAAJ',
      etag: 'p5wZ3aeCmr8',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/DgbhAAAAMAAJ',
      volumeInfo: {
        title: 'Search INFORM.',
        publishedDate: '1986',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'UOM:39015014503646',
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 362,
        printType: 'BOOK',
        categories: ['ABI/INFORM (Information retrieval system)'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '1.4.2.0.preview.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=DgbhAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=DgbhAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=DgbhAAAAMAAJ&pg=RA1-PP2&dq=search+terms&hl=&cd=1&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=DgbhAAAAMAAJ&dq=search+terms&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Search_INFORM.html?hl=&id=DgbhAAAAMAAJ',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'NO_PAGES',
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=DgbhAAAAMAAJ&hl=&source=gbs_api',
        accessViewStatus: 'NONE',
        quoteSharingAllowed: false,
      },
    },
    {
      kind: 'books#volume',
      id: '77RZAAAAYAAJ',
      etag: 'itRI08ynlmU',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/77RZAAAAYAAJ',
      volumeInfo: {
        title: 'Pennsylvania Law Encyclopedia',
        publishedDate: '2004',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'PSU:000062618915',
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        printType: 'BOOK',
        categories: ['Law'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '1.3.2.0.preview.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=77RZAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=77RZAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=77RZAAAAYAAJ&q=search+terms&dq=search+terms&hl=&cd=2&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=77RZAAAAYAAJ&dq=search+terms&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Pennsylvania_Law_Encyclopedia.html?hl=&id=77RZAAAAYAAJ',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'NO_PAGES',
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=77RZAAAAYAAJ&hl=&source=gbs_api',
        accessViewStatus: 'NONE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '<b>SEARCHING</b> As the lexis.com8&quot; computer-assisted legal research service is a full-text database, it allows you to <b>search</b> for virtually any <b>word</b> or combination of <b>words</b>. (The only exceptions are certain &quot;noise <b>words</b>&quot; such as in, on, was,&nbsp;...',
      },
    },
    {
      kind: 'books#volume',
      id: 'gqDf__ULmR8C',
      etag: 'kw2GFHR7FOA',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/gqDf__ULmR8C',
      volumeInfo: {
        title: 'Flexible Query Answering Systems',
        subtitle:
          '8th International Conference, FQAS 2009, Roskilde, Denmark, October 26-28, 2009, Proceedings',
        authors: [
          'Troels Andreasen',
          'Ronald R. Yager',
          'Henrik Bulskov',
          'Henning Christiansen',
          'Henrik Legind Larsen',
        ],
        publisher: 'Springer Science & Business Media',
        publishedDate: '2009-10-15',
        description:
          'This volume constitutes the Proceedings of the 8th International Conference on Flexible Query Answering Systems, FQAS 2009, held in Roskilde, Denmark, October 26–28, 2009. FQAS 2009 was preceded by the 1994, 1996 and 1998 editions held in Roskilde, Denmark, the FQAS 2000 held in Warsaw, Poland, the 2002 held in Copenhagen, Denmark, and the 2004 and 2006 editions held in Lyon, France, and in Milan, Italy, respectively. FQAS is the premier conference concerned with the very important issue of providing users of information systems with ?exible querying capabilities, and withaneasyandintuitiveaccesstoinformation.Themainobjectiveistoachieve more expressive, informative, cooperative, and productive systems which faci- tate retrieval from information repositories such as databases, libraries, hete- geneous archives and the World-Wide Web. In targeting this objective, the c- ference draws on several research areas, such as information retrieval, database management, information ?ltering, knowledge representation, soft computing, management of multimedia information, and human–computer interaction. The conference provides a unique opportunity for researchers, developers and pr- titioners to explore new ideas and approaches in a multidisciplinary forum. The overalltopic of the FQAS conferences is innovative query systems aimed at providing easy, ?exible and human-friendly access to information. Such s- tems arebecoming increasinglyimportantalsodue to the huge andalwaysgr- ing number of users as well as the growing amount of available information.',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9783642049569',
          },
          {
            type: 'ISBN_10',
            identifier: '3642049567',
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 688,
        printType: 'BOOK',
        categories: ['Computers'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.1.1.0.preview.1',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=gqDf__ULmR8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=gqDf__ULmR8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=gqDf__ULmR8C&pg=PA180&dq=search+terms&hl=&cd=3&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=gqDf__ULmR8C&dq=search+terms&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Flexible_Query_Answering_Systems.html?hl=&id=gqDf__ULmR8C',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com/books/download/Flexible_Query_Answering_Systems-sample-pdf.acsm?id=gqDf__ULmR8C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=gqDf__ULmR8C&hl=&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'To each cluster, we associate a rank based on a balance of two <b>criteria</b>: the novelty of contents of the groups with respect to past results, and their overall similarity with respect to the original <b>query</b>. A disambiguated <b>query</b> is then&nbsp;...',
      },
    },
    {
      kind: 'books#volume',
      id: 'YWq2MQEACAAJ',
      etag: 'YVQ+aHh984o',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/YWq2MQEACAAJ',
      volumeInfo: {
        title: 'Basse Déf. en Français',
        subtitle: '',
        authors: ['Nicolas Thély'],
        publishedDate: '2012',
        description:
          '"What are we to make of all these countless sounds and images passing before our eyes, reaching our ears, arriving on our cell phones, moving across our computers and iPads? What artistic categories are relevant in an era of ever-increasing access to production equipment and DIY art? Indeed, how does art fit into social networks? Between 2009 and 2011, a research team organized by Nicolas Thély...explored the ways in which today\'s art world now conceives and creates."--Cover.',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '2917855304',
          },
          {
            type: 'ISBN_13',
            identifier: '9782917855300',
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 149,
        printType: 'BOOK',
        categories: ['Art, Modern'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: 'preview-1.0.0',
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=YWq2MQEACAAJ&dq=search+terms&hl=&cd=4&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=YWq2MQEACAAJ&dq=search+terms&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Basse_D%C3%A9f_en_Fran%C3%A7ais.html?hl=&id=YWq2MQEACAAJ',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'NO_PAGES',
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=YWq2MQEACAAJ&hl=&source=gbs_api',
        accessViewStatus: 'NONE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Indeed, how does art fit into social networks? Between 2009 and 2011, a research team organized by Nicolas Thély ... explored the ways in which today&#39;s art world now conceives and creates.&quot;--Cover.',
      },
    },
    {
      kind: 'books#volume',
      id: 'OMOwmLgbMfYC',
      etag: 'V2sPzUrB6Uc',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/OMOwmLgbMfYC',
      volumeInfo: {
        title: "Out's Gay & Lesbian Guide to the Web",
        authors: ['J. Harrison Fitch'],
        publisher: 'Ziff Davis Press',
        publishedDate: '1997',
        description:
          'Describes sites on the World Wide Web of special interest to gay men and lesbians',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '0789710595',
          },
          {
            type: 'ISBN_13',
            identifier: '9780789710598',
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 284,
        printType: 'BOOK',
        categories: ['Social Science'],
        maturityRating: 'MATURE',
        allowAnonLogging: false,
        contentVersion: '1.4.3.0.preview.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=OMOwmLgbMfYC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=OMOwmLgbMfYC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=OMOwmLgbMfYC&q=search+terms&dq=search+terms&hl=&cd=5&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=OMOwmLgbMfYC&dq=search+terms&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Out_s_Gay_Lesbian_Guide_to_the_Web.html?hl=&id=OMOwmLgbMfYC',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'NO_PAGES',
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=OMOwmLgbMfYC&hl=&source=gbs_api',
        accessViewStatus: 'NONE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '<b>Search</b> Options features. Iust keep these simple guidelines in mind: 0 AND <b>searches</b> are possible by selecting the match all <b>terms</b> (AND) option and then entering whatever <b>words</b> you want in the <b>search</b> box. In the above example,&nbsp;...',
      },
    },
    {
      kind: 'books#volume',
      id: 'T7nuAAAAMAAJ',
      etag: 'f8h8Fe4p6Dg',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/T7nuAAAAMAAJ',
      volumeInfo: {
        title: 'Hands-on Information Literacy Activities',
        authors: ['Jane Birks', 'Fiona Hunt'],
        publisher: 'Neal Schuman Pub',
        publishedDate: '2003',
        description:
          'Provides activities designed to help students gain information retrieval skills.',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'UOM:39015056686622',
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 135,
        printType: 'BOOK',
        categories: ['Computers'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '1.2.1.0.preview.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=T7nuAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=T7nuAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=T7nuAAAAMAAJ&q=search+terms&dq=search+terms&hl=&cd=6&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=T7nuAAAAMAAJ&dq=search+terms&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Hands_on_Information_Literacy_Activities.html?hl=&id=T7nuAAAAMAAJ',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'NO_PAGES',
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=T7nuAAAAMAAJ&hl=&source=gbs_api',
        accessViewStatus: 'NONE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '(The number should be recorded on the board beside the <b>search term</b>.) c) I am searching for pink AND round. (Write the new search string under the previous one.) d) How many shapes match my <b>search criteria</b>? e) All students with a round&nbsp;...',
      },
    },
    {
      kind: 'books#volume',
      id: 'SNAjMMp3H5UC',
      etag: 'ifO14QqpiUk',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/SNAjMMp3H5UC',
      volumeInfo: {
        title: 'Keyword Intelligence',
        subtitle: 'Keyword Research for Search, Social, and Beyond',
        authors: ['Ron Jones'],
        publisher: 'John Wiley & Sons',
        publishedDate: '2011-10-19',
        description:
          "A unique book on the art and science of keyword research Keyword research can make or break a marketing campaign, an optimization strategy, and pay-per-click ad campaigns. Written by a keyword research expert, this essential resource drills home the importance of targeting the right keywords or phrases in order to get traffic from search engines and social media channels. Author Ron Jones imparts his wisdom and experience for determining which keywords will work based on a searcher's intent and he shows you how to research social, mobile, and video marketing tools that can ultimately become the foundation of a marketing campaign. Boasts detailed how-to information from one of the world's leading keyword research experts Helps you learn how to craft a successful keyword campaign and capture a coveted spot on the first page of a results page Pares down the essential information you need to know to use available tools to get keyword suggestions, forecast web site traffic, perform competitive research, and analyze results Walks you through how to best apply keywords to SEO and PPC campaigns as well as gain visibility with mobile marketing and integrate with traditional marketing efforts Features case studies, examples, tutorials, tips, and previously undocumented techniques No matter your level of experience working with keywords, Keyword Intelligence is the ultimate guide for learning how to best conduct keyword research and craft winning marketing campaigns.",
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781118216910',
          },
          {
            type: 'ISBN_10',
            identifier: '1118216911',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 447,
        printType: 'BOOK',
        categories: ['Business & Economics'],
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '1.7.6.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=SNAjMMp3H5UC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=SNAjMMp3H5UC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=SNAjMMp3H5UC&printsec=frontcover&dq=search+terms&hl=&cd=7&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=SNAjMMp3H5UC&dq=search+terms&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Keyword_Intelligence.html?hl=&id=SNAjMMp3H5UC',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com/books/download/Keyword_Intelligence-sample-epub.acsm?id=SNAjMMp3H5UC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com/books/download/Keyword_Intelligence-sample-pdf.acsm?id=SNAjMMp3H5UC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=SNAjMMp3H5UC&hl=&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'This unique, detailed guide to every aspect of keyword research also features case studies, examples, tutorials, tips, and previously undocumented techniques drawn from renowned keyword research expert Ron Jones&#39;s extensive professional ...',
      },
    },
    {
      kind: 'books#volume',
      id: '0tdFAQAAIAAJ',
      etag: 'loIB3E7ExJY',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/0tdFAQAAIAAJ',
      volumeInfo: {
        title: 'BOTS and Other Internet Beasties',
        authors: ['Joseph Williams'],
        publisher: 'Sams',
        publishedDate: '1996',
        description:
          "Describes how to use intelligent, robot-like programs to retrieve, quantify, and present useful information from the Internet, as well as how to create and customize them. Topics include filtering agents, search engines, BargainFinder, security issues, agent mobility, robots, and manufacturing agents. The languages used to author these agents--Tcl, Telescript, and Java--are also presented. For the casual to accomplished user. The CD-ROM contains a Tcl/Tk compiler from Sun Labs, a Java Developer's Kit, and links to Tcl resources and software agents. Annotation copyrighted by Book News, Inc., Portland, OR",
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'UCSD:31822023709876',
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 554,
        printType: 'BOOK',
        categories: ['Computers'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.5.2.0.preview.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=0tdFAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=0tdFAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=0tdFAQAAIAAJ&q=search+terms&dq=search+terms&hl=&cd=8&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=0tdFAQAAIAAJ&dq=search+terms&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/BOTS_and_Other_Internet_Beasties.html?hl=&id=0tdFAQAAIAAJ',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'NO_PAGES',
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=0tdFAQAAIAAJ&hl=&source=gbs_api',
        accessViewStatus: 'NONE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'We have an information request that we describe briefly in text form, the text of our <b>query</b> is matched to cataloged descriptions of ... A <b>search</b> for automobile will not find documents that use different <b>terms</b> for the same concept: car,&nbsp;...',
      },
    },
    {
      kind: 'books#volume',
      id: 'ZAH1AwAAQBAJ',
      etag: 'vgqiWlheC8Q',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/ZAH1AwAAQBAJ',
      volumeInfo: {
        title: 'Power Query for Power BI and Excel',
        authors: ['Christopher Webb', 'Crossjoin Consulting Limited'],
        publisher: 'Apress',
        publishedDate: '2014-07-05',
        description:
          'Power Query for Power BI and Excel is a book for people who are tired of copying and pasting data into Excel worksheets. Power Query, part of the Microsoft Power BI suite, is a tool that automates the process of getting data into Excel and will save you hours of dull, repetitive, and error-prone work! Power Query makes it easy to extract data from many different data sources, filter that data, aggregate it, clean it and perform calculations on it, finally loading that data into either your worksheet or directly into the new Excel 2013 Data Model used by Power Pivot. This concise, practical book provides a complete guide to Power Query and how to use it to solve all of your Excel data-loading problems. Power Query for Power BI and Excel goes well beyond the surface of what Power Query can do. The book goes deep into the underlying M language, showing you how to do amazing things that aren’t going to be possible from just the GUI interface that is covered in most other books. You’ll have full command of the GUI, and you’ll be able to drop into the M language to go beyond what the GUI provides. The depth in this book makes it a must-have item for anyone who is pushing Power BI and Excel to their limits in the pursuit of business intelligence from data analysis. Teaches the basics of using Power Query to load data into Excel Helps you solve common, data-related problems with Power Query Shows how to write your own solutions in the powerful M language',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781430266921',
          },
          {
            type: 'ISBN_10',
            identifier: '1430266929',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 261,
        printType: 'BOOK',
        categories: ['Computers'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '1.6.5.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=ZAH1AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=ZAH1AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=ZAH1AwAAQBAJ&pg=PA42&dq=search+terms&hl=&cd=9&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=ZAH1AwAAQBAJ&dq=search+terms&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Power_Query_for_Power_BI_and_Excel.html?hl=&id=ZAH1AwAAQBAJ',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com/books/download/Power_Query_for_Power_BI_and_Excel-sample-epub.acsm?id=ZAH1AwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com/books/download/Power_Query_for_Power_BI_and_Excel-sample-pdf.acsm?id=ZAH1AwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=ZAH1AwAAQBAJ&hl=&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'When you perform a <b>search</b> using the Online <b>Search</b> button, a new tab will appear on the Excel ribbon: the <b>Search</b> tab, shown in Figure 2-43. Figure 2-43. The <b>Search</b> tab In the Refine section, the buttons allow you to <b>search</b> for <b>terms</b> in&nbsp;...',
      },
    },
    {
      kind: 'books#volume',
      id: 'g7YNeVDDbVgC',
      etag: 'AdGoyhPZDpE',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/g7YNeVDDbVgC',
      volumeInfo: {
        title: 'Flexible Query Answering Systems',
        subtitle:
          '7th International Conference, FQAS 2006, Milan, Italy, June 7-10, 2006',
        authors: [
          'Henrik Legind Larsen',
          'Gabriella Pasi',
          'Daniel Ortiz-Arroyo',
          'Troels Andreasen',
          'Henning Christiansen',
        ],
        publisher: 'Springer Science & Business Media',
        publishedDate: '2006-05-30',
        description:
          'This book constitutes the refereed proceeding of the 7th International Conference on Flexible Query Answering Systems, FQAS 2006, held in Milan, Italy in June 2006. The 60 revised full papers presented were carefully reviewed and selected from numerous submissions. The papers are organized in topical sections on flexibility in database management and quering, vagueness and uncertainty in XML quering and retrieval, information retrieval and filtering, multimedia information access, user modeling and personalization, knowledge and data extraction, intelligent information extraction from text, and knowledge representation and reasoning.',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9783540346388',
          },
          {
            type: 'ISBN_10',
            identifier: '3540346384',
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 730,
        printType: 'BOOK',
        categories: ['Computers'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.1.2.0.preview.1',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=g7YNeVDDbVgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=g7YNeVDDbVgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=g7YNeVDDbVgC&pg=PA582&dq=search+terms&hl=&cd=10&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=g7YNeVDDbVgC&dq=search+terms&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Flexible_Query_Answering_Systems.html?hl=&id=g7YNeVDDbVgC',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com/books/download/Flexible_Query_Answering_Systems-sample-pdf.acsm?id=g7YNeVDDbVgC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=g7YNeVDDbVgC&hl=&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '&lt;document_retrieval&gt; &lt;swish_query <b>query</b>=&quot;(talde OR aldra OR sail OR saldo OR samalda OR ekipo OR unitate OR lagunarte OR multzo OR abeltalde OR artalde OR jendetza OR nahaspila) AND (nagusi OR ugazaba OR buru OR buruzagi OR agintzaile&nbsp;...',
      },
    },
  ],
}
function query(txt) {
  //   const googleBooks = {
  //     kind: 'books#volumes',
  //     totalItems: 756,
  //     items: [
  //       {
  //         kind: 'books#volume',
  //         id: 'DgbhAAAAMAAJ',
  //         etag: 'p5wZ3aeCmr8',
  //         selfLink: 'https://www.googleapis.com/books/v1/volumes/DgbhAAAAMAAJ',
  //         volumeInfo: {
  //           title: 'Search INFORM.',
  //           publishedDate: '1986',
  //           industryIdentifiers: [
  //             {
  //               type: 'OTHER',
  //               identifier: 'UOM:39015014503646',
  //             },
  //           ],
  //           readingModes: {
  //             text: false,
  //             image: false,
  //           },
  //           pageCount: 362,
  //           printType: 'BOOK',
  //           categories: ['ABI/INFORM (Information retrieval system)'],
  //           maturityRating: 'NOT_MATURE',
  //           allowAnonLogging: false,
  //           contentVersion: '1.4.2.0.preview.0',
  //           panelizationSummary: {
  //             containsEpubBubbles: false,
  //             containsImageBubbles: false,
  //           },
  //           imageLinks: {
  //             smallThumbnail:
  //               'http://books.google.com/books/content?id=DgbhAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
  //             thumbnail:
  //               'http://books.google.com/books/content?id=DgbhAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
  //           },
  //           language: 'en',
  //           previewLink:
  //             'http://books.google.com/books?id=DgbhAAAAMAAJ&pg=RA1-PP2&dq=search+terms&hl=&cd=1&source=gbs_api',
  //           infoLink:
  //             'http://books.google.com/books?id=DgbhAAAAMAAJ&dq=search+terms&hl=&source=gbs_api',
  //           canonicalVolumeLink:
  //             'https://books.google.com/books/about/Search_INFORM.html?hl=&id=DgbhAAAAMAAJ',
  //         },
  //         saleInfo: {
  //           country: 'IL',
  //           saleability: 'NOT_FOR_SALE',
  //           isEbook: false,
  //         },
  //         accessInfo: {
  //           country: 'IL',
  //           viewability: 'NO_PAGES',
  //           embeddable: false,
  //           publicDomain: false,
  //           textToSpeechPermission: 'ALLOWED',
  //           epub: {
  //             isAvailable: false,
  //           },
  //           pdf: {
  //             isAvailable: false,
  //           },
  //           webReaderLink:
  //             'http://play.google.com/books/reader?id=DgbhAAAAMAAJ&hl=&source=gbs_api',
  //           accessViewStatus: 'NONE',
  //           quoteSharingAllowed: false,
  //         },
  //       },
  //       {
  //         kind: 'books#volume',
  //         id: '77RZAAAAYAAJ',
  //         etag: 'itRI08ynlmU',
  //         selfLink: 'https://www.googleapis.com/books/v1/volumes/77RZAAAAYAAJ',
  //         volumeInfo: {
  //           title: 'Pennsylvania Law Encyclopedia',
  //           publishedDate: '2004',
  //           industryIdentifiers: [
  //             {
  //               type: 'OTHER',
  //               identifier: 'PSU:000062618915',
  //             },
  //           ],
  //           readingModes: {
  //             text: false,
  //             image: false,
  //           },
  //           printType: 'BOOK',
  //           categories: ['Law'],
  //           maturityRating: 'NOT_MATURE',
  //           allowAnonLogging: false,
  //           contentVersion: '1.3.2.0.preview.0',
  //           panelizationSummary: {
  //             containsEpubBubbles: false,
  //             containsImageBubbles: false,
  //           },
  //           imageLinks: {
  //             smallThumbnail:
  //               'http://books.google.com/books/content?id=77RZAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
  //             thumbnail:
  //               'http://books.google.com/books/content?id=77RZAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
  //           },
  //           language: 'en',
  //           previewLink:
  //             'http://books.google.com/books?id=77RZAAAAYAAJ&q=search+terms&dq=search+terms&hl=&cd=2&source=gbs_api',
  //           infoLink:
  //             'http://books.google.com/books?id=77RZAAAAYAAJ&dq=search+terms&hl=&source=gbs_api',
  //           canonicalVolumeLink:
  //             'https://books.google.com/books/about/Pennsylvania_Law_Encyclopedia.html?hl=&id=77RZAAAAYAAJ',
  //         },
  //         saleInfo: {
  //           country: 'IL',
  //           saleability: 'NOT_FOR_SALE',
  //           isEbook: false,
  //         },
  //         accessInfo: {
  //           country: 'IL',
  //           viewability: 'NO_PAGES',
  //           embeddable: false,
  //           publicDomain: false,
  //           textToSpeechPermission: 'ALLOWED',
  //           epub: {
  //             isAvailable: false,
  //           },
  //           pdf: {
  //             isAvailable: false,
  //           },
  //           webReaderLink:
  //             'http://play.google.com/books/reader?id=77RZAAAAYAAJ&hl=&source=gbs_api',
  //           accessViewStatus: 'NONE',
  //           quoteSharingAllowed: false,
  //         },
  //         searchInfo: {
  //           textSnippet:
  //             '<b>SEARCHING</b> As the lexis.com8&quot; computer-assisted legal research service is a full-text database, it allows you to <b>search</b> for virtually any <b>word</b> or combination of <b>words</b>. (The only exceptions are certain &quot;noise <b>words</b>&quot; such as in, on, was,&nbsp;...',
  //         },
  //       },
  //       {
  //         kind: 'books#volume',
  //         id: 'gqDf__ULmR8C',
  //         etag: 'kw2GFHR7FOA',
  //         selfLink: 'https://www.googleapis.com/books/v1/volumes/gqDf__ULmR8C',
  //         volumeInfo: {
  //           title: 'Flexible Query Answering Systems',
  //           subtitle:
  //             '8th International Conference, FQAS 2009, Roskilde, Denmark, October 26-28, 2009, Proceedings',
  //           authors: [
  //             'Troels Andreasen',
  //             'Ronald R. Yager',
  //             'Henrik Bulskov',
  //             'Henning Christiansen',
  //             'Henrik Legind Larsen',
  //           ],
  //           publisher: 'Springer Science & Business Media',
  //           publishedDate: '2009-10-15',
  //           description:
  //             'This volume constitutes the Proceedings of the 8th International Conference on Flexible Query Answering Systems, FQAS 2009, held in Roskilde, Denmark, October 26–28, 2009. FQAS 2009 was preceded by the 1994, 1996 and 1998 editions held in Roskilde, Denmark, the FQAS 2000 held in Warsaw, Poland, the 2002 held in Copenhagen, Denmark, and the 2004 and 2006 editions held in Lyon, France, and in Milan, Italy, respectively. FQAS is the premier conference concerned with the very important issue of providing users of information systems with ?exible querying capabilities, and withaneasyandintuitiveaccesstoinformation.Themainobjectiveistoachieve more expressive, informative, cooperative, and productive systems which faci- tate retrieval from information repositories such as databases, libraries, hete- geneous archives and the World-Wide Web. In targeting this objective, the c- ference draws on several research areas, such as information retrieval, database management, information ?ltering, knowledge representation, soft computing, management of multimedia information, and human–computer interaction. The conference provides a unique opportunity for researchers, developers and pr- titioners to explore new ideas and approaches in a multidisciplinary forum. The overalltopic of the FQAS conferences is innovative query systems aimed at providing easy, ?exible and human-friendly access to information. Such s- tems arebecoming increasinglyimportantalsodue to the huge andalwaysgr- ing number of users as well as the growing amount of available information.',
  //           industryIdentifiers: [
  //             {
  //               type: 'ISBN_13',
  //               identifier: '9783642049569',
  //             },
  //             {
  //               type: 'ISBN_10',
  //               identifier: '3642049567',
  //             },
  //           ],
  //           readingModes: {
  //             text: false,
  //             image: true,
  //           },
  //           pageCount: 688,
  //           printType: 'BOOK',
  //           categories: ['Computers'],
  //           maturityRating: 'NOT_MATURE',
  //           allowAnonLogging: false,
  //           contentVersion: '0.1.1.0.preview.1',
  //           panelizationSummary: {
  //             containsEpubBubbles: false,
  //             containsImageBubbles: false,
  //           },
  //           imageLinks: {
  //             smallThumbnail:
  //               'http://books.google.com/books/content?id=gqDf__ULmR8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  //             thumbnail:
  //               'http://books.google.com/books/content?id=gqDf__ULmR8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  //           },
  //           language: 'en',
  //           previewLink:
  //             'http://books.google.com/books?id=gqDf__ULmR8C&pg=PA180&dq=search+terms&hl=&cd=3&source=gbs_api',
  //           infoLink:
  //             'http://books.google.com/books?id=gqDf__ULmR8C&dq=search+terms&hl=&source=gbs_api',
  //           canonicalVolumeLink:
  //             'https://books.google.com/books/about/Flexible_Query_Answering_Systems.html?hl=&id=gqDf__ULmR8C',
  //         },
  //         saleInfo: {
  //           country: 'IL',
  //           saleability: 'NOT_FOR_SALE',
  //           isEbook: false,
  //         },
  //         accessInfo: {
  //           country: 'IL',
  //           viewability: 'PARTIAL',
  //           embeddable: true,
  //           publicDomain: false,
  //           textToSpeechPermission: 'ALLOWED',
  //           epub: {
  //             isAvailable: false,
  //           },
  //           pdf: {
  //             isAvailable: true,
  //             acsTokenLink:
  //               'http://books.google.com/books/download/Flexible_Query_Answering_Systems-sample-pdf.acsm?id=gqDf__ULmR8C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
  //           },
  //           webReaderLink:
  //             'http://play.google.com/books/reader?id=gqDf__ULmR8C&hl=&source=gbs_api',
  //           accessViewStatus: 'SAMPLE',
  //           quoteSharingAllowed: false,
  //         },
  //         searchInfo: {
  //           textSnippet:
  //             'To each cluster, we associate a rank based on a balance of two <b>criteria</b>: the novelty of contents of the groups with respect to past results, and their overall similarity with respect to the original <b>query</b>. A disambiguated <b>query</b> is then&nbsp;...',
  //         },
  //       },
  //       {
  //         kind: 'books#volume',
  //         id: 'YWq2MQEACAAJ',
  //         etag: 'YVQ+aHh984o',
  //         selfLink: 'https://www.googleapis.com/books/v1/volumes/YWq2MQEACAAJ',
  //         volumeInfo: {
  //           title: 'Basse Déf. en Français',
  //           subtitle: '',
  //           authors: ['Nicolas Thély'],
  //           publishedDate: '2012',
  //           description:
  //             '"What are we to make of all these countless sounds and images passing before our eyes, reaching our ears, arriving on our cell phones, moving across our computers and iPads? What artistic categories are relevant in an era of ever-increasing access to production equipment and DIY art? Indeed, how does art fit into social networks? Between 2009 and 2011, a research team organized by Nicolas Thély...explored the ways in which today\'s art world now conceives and creates."--Cover.',
  //           industryIdentifiers: [
  //             {
  //               type: 'ISBN_10',
  //               identifier: '2917855304',
  //             },
  //             {
  //               type: 'ISBN_13',
  //               identifier: '9782917855300',
  //             },
  //           ],
  //           readingModes: {
  //             text: false,
  //             image: false,
  //           },
  //           pageCount: 149,
  //           printType: 'BOOK',
  //           categories: ['Art, Modern'],
  //           maturityRating: 'NOT_MATURE',
  //           allowAnonLogging: false,
  //           contentVersion: 'preview-1.0.0',
  //           language: 'en',
  //           previewLink:
  //             'http://books.google.com/books?id=YWq2MQEACAAJ&dq=search+terms&hl=&cd=4&source=gbs_api',
  //           infoLink:
  //             'http://books.google.com/books?id=YWq2MQEACAAJ&dq=search+terms&hl=&source=gbs_api',
  //           canonicalVolumeLink:
  //             'https://books.google.com/books/about/Basse_D%C3%A9f_en_Fran%C3%A7ais.html?hl=&id=YWq2MQEACAAJ',
  //         },
  //         saleInfo: {
  //           country: 'IL',
  //           saleability: 'NOT_FOR_SALE',
  //           isEbook: false,
  //         },
  //         accessInfo: {
  //           country: 'IL',
  //           viewability: 'NO_PAGES',
  //           embeddable: false,
  //           publicDomain: false,
  //           textToSpeechPermission: 'ALLOWED',
  //           epub: {
  //             isAvailable: false,
  //           },
  //           pdf: {
  //             isAvailable: false,
  //           },
  //           webReaderLink:
  //             'http://play.google.com/books/reader?id=YWq2MQEACAAJ&hl=&source=gbs_api',
  //           accessViewStatus: 'NONE',
  //           quoteSharingAllowed: false,
  //         },
  //         searchInfo: {
  //           textSnippet:
  //             'Indeed, how does art fit into social networks? Between 2009 and 2011, a research team organized by Nicolas Thély ... explored the ways in which today&#39;s art world now conceives and creates.&quot;--Cover.',
  //         },
  //       },
  //       {
  //         kind: 'books#volume',
  //         id: 'OMOwmLgbMfYC',
  //         etag: 'V2sPzUrB6Uc',
  //         selfLink: 'https://www.googleapis.com/books/v1/volumes/OMOwmLgbMfYC',
  //         volumeInfo: {
  //           title: "Out's Gay & Lesbian Guide to the Web",
  //           authors: ['J. Harrison Fitch'],
  //           publisher: 'Ziff Davis Press',
  //           publishedDate: '1997',
  //           description:
  //             'Describes sites on the World Wide Web of special interest to gay men and lesbians',
  //           industryIdentifiers: [
  //             {
  //               type: 'ISBN_10',
  //               identifier: '0789710595',
  //             },
  //             {
  //               type: 'ISBN_13',
  //               identifier: '9780789710598',
  //             },
  //           ],
  //           readingModes: {
  //             text: false,
  //             image: false,
  //           },
  //           pageCount: 284,
  //           printType: 'BOOK',
  //           categories: ['Social Science'],
  //           maturityRating: 'MATURE',
  //           allowAnonLogging: false,
  //           contentVersion: '1.4.3.0.preview.0',
  //           panelizationSummary: {
  //             containsEpubBubbles: false,
  //             containsImageBubbles: false,
  //           },
  //           imageLinks: {
  //             smallThumbnail:
  //               'http://books.google.com/books/content?id=OMOwmLgbMfYC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
  //             thumbnail:
  //               'http://books.google.com/books/content?id=OMOwmLgbMfYC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
  //           },
  //           language: 'en',
  //           previewLink:
  //             'http://books.google.com/books?id=OMOwmLgbMfYC&q=search+terms&dq=search+terms&hl=&cd=5&source=gbs_api',
  //           infoLink:
  //             'http://books.google.com/books?id=OMOwmLgbMfYC&dq=search+terms&hl=&source=gbs_api',
  //           canonicalVolumeLink:
  //             'https://books.google.com/books/about/Out_s_Gay_Lesbian_Guide_to_the_Web.html?hl=&id=OMOwmLgbMfYC',
  //         },
  //         saleInfo: {
  //           country: 'IL',
  //           saleability: 'NOT_FOR_SALE',
  //           isEbook: false,
  //         },
  //         accessInfo: {
  //           country: 'IL',
  //           viewability: 'NO_PAGES',
  //           embeddable: false,
  //           publicDomain: false,
  //           textToSpeechPermission: 'ALLOWED',
  //           epub: {
  //             isAvailable: false,
  //           },
  //           pdf: {
  //             isAvailable: false,
  //           },
  //           webReaderLink:
  //             'http://play.google.com/books/reader?id=OMOwmLgbMfYC&hl=&source=gbs_api',
  //           accessViewStatus: 'NONE',
  //           quoteSharingAllowed: false,
  //         },
  //         searchInfo: {
  //           textSnippet:
  //             '<b>Search</b> Options features. Iust keep these simple guidelines in mind: 0 AND <b>searches</b> are possible by selecting the match all <b>terms</b> (AND) option and then entering whatever <b>words</b> you want in the <b>search</b> box. In the above example,&nbsp;...',
  //         },
  //       },
  //       {
  //         kind: 'books#volume',
  //         id: 'T7nuAAAAMAAJ',
  //         etag: 'f8h8Fe4p6Dg',
  //         selfLink: 'https://www.googleapis.com/books/v1/volumes/T7nuAAAAMAAJ',
  //         volumeInfo: {
  //           title: 'Hands-on Information Literacy Activities',
  //           authors: ['Jane Birks', 'Fiona Hunt'],
  //           publisher: 'Neal Schuman Pub',
  //           publishedDate: '2003',
  //           description:
  //             'Provides activities designed to help students gain information retrieval skills.',
  //           industryIdentifiers: [
  //             {
  //               type: 'OTHER',
  //               identifier: 'UOM:39015056686622',
  //             },
  //           ],
  //           readingModes: {
  //             text: false,
  //             image: false,
  //           },
  //           pageCount: 135,
  //           printType: 'BOOK',
  //           categories: ['Computers'],
  //           maturityRating: 'NOT_MATURE',
  //           allowAnonLogging: false,
  //           contentVersion: '1.2.1.0.preview.0',
  //           panelizationSummary: {
  //             containsEpubBubbles: false,
  //             containsImageBubbles: false,
  //           },
  //           imageLinks: {
  //             smallThumbnail:
  //               'http://books.google.com/books/content?id=T7nuAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
  //             thumbnail:
  //               'http://books.google.com/books/content?id=T7nuAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
  //           },
  //           language: 'en',
  //           previewLink:
  //             'http://books.google.com/books?id=T7nuAAAAMAAJ&q=search+terms&dq=search+terms&hl=&cd=6&source=gbs_api',
  //           infoLink:
  //             'http://books.google.com/books?id=T7nuAAAAMAAJ&dq=search+terms&hl=&source=gbs_api',
  //           canonicalVolumeLink:
  //             'https://books.google.com/books/about/Hands_on_Information_Literacy_Activities.html?hl=&id=T7nuAAAAMAAJ',
  //         },
  //         saleInfo: {
  //           country: 'IL',
  //           saleability: 'NOT_FOR_SALE',
  //           isEbook: false,
  //         },
  //         accessInfo: {
  //           country: 'IL',
  //           viewability: 'NO_PAGES',
  //           embeddable: false,
  //           publicDomain: false,
  //           textToSpeechPermission: 'ALLOWED',
  //           epub: {
  //             isAvailable: false,
  //           },
  //           pdf: {
  //             isAvailable: false,
  //           },
  //           webReaderLink:
  //             'http://play.google.com/books/reader?id=T7nuAAAAMAAJ&hl=&source=gbs_api',
  //           accessViewStatus: 'NONE',
  //           quoteSharingAllowed: false,
  //         },
  //         searchInfo: {
  //           textSnippet:
  //             '(The number should be recorded on the board beside the <b>search term</b>.) c) I am searching for pink AND round. (Write the new search string under the previous one.) d) How many shapes match my <b>search criteria</b>? e) All students with a round&nbsp;...',
  //         },
  //       },
  //       {
  //         kind: 'books#volume',
  //         id: 'SNAjMMp3H5UC',
  //         etag: 'ifO14QqpiUk',
  //         selfLink: 'https://www.googleapis.com/books/v1/volumes/SNAjMMp3H5UC',
  //         volumeInfo: {
  //           title: 'Keyword Intelligence',
  //           subtitle: 'Keyword Research for Search, Social, and Beyond',
  //           authors: ['Ron Jones'],
  //           publisher: 'John Wiley & Sons',
  //           publishedDate: '2011-10-19',
  //           description:
  //             "A unique book on the art and science of keyword research Keyword research can make or break a marketing campaign, an optimization strategy, and pay-per-click ad campaigns. Written by a keyword research expert, this essential resource drills home the importance of targeting the right keywords or phrases in order to get traffic from search engines and social media channels. Author Ron Jones imparts his wisdom and experience for determining which keywords will work based on a searcher's intent and he shows you how to research social, mobile, and video marketing tools that can ultimately become the foundation of a marketing campaign. Boasts detailed how-to information from one of the world's leading keyword research experts Helps you learn how to craft a successful keyword campaign and capture a coveted spot on the first page of a results page Pares down the essential information you need to know to use available tools to get keyword suggestions, forecast web site traffic, perform competitive research, and analyze results Walks you through how to best apply keywords to SEO and PPC campaigns as well as gain visibility with mobile marketing and integrate with traditional marketing efforts Features case studies, examples, tutorials, tips, and previously undocumented techniques No matter your level of experience working with keywords, Keyword Intelligence is the ultimate guide for learning how to best conduct keyword research and craft winning marketing campaigns.",
  //           industryIdentifiers: [
  //             {
  //               type: 'ISBN_13',
  //               identifier: '9781118216910',
  //             },
  //             {
  //               type: 'ISBN_10',
  //               identifier: '1118216911',
  //             },
  //           ],
  //           readingModes: {
  //             text: true,
  //             image: true,
  //           },
  //           pageCount: 447,
  //           printType: 'BOOK',
  //           categories: ['Business & Economics'],
  //           averageRating: 5,
  //           ratingsCount: 1,
  //           maturityRating: 'NOT_MATURE',
  //           allowAnonLogging: false,
  //           contentVersion: '1.7.6.0.preview.3',
  //           panelizationSummary: {
  //             containsEpubBubbles: false,
  //             containsImageBubbles: false,
  //           },
  //           imageLinks: {
  //             smallThumbnail:
  //               'http://books.google.com/books/content?id=SNAjMMp3H5UC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  //             thumbnail:
  //               'http://books.google.com/books/content?id=SNAjMMp3H5UC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  //           },
  //           language: 'en',
  //           previewLink:
  //             'http://books.google.com/books?id=SNAjMMp3H5UC&printsec=frontcover&dq=search+terms&hl=&cd=7&source=gbs_api',
  //           infoLink:
  //             'http://books.google.com/books?id=SNAjMMp3H5UC&dq=search+terms&hl=&source=gbs_api',
  //           canonicalVolumeLink:
  //             'https://books.google.com/books/about/Keyword_Intelligence.html?hl=&id=SNAjMMp3H5UC',
  //         },
  //         saleInfo: {
  //           country: 'IL',
  //           saleability: 'NOT_FOR_SALE',
  //           isEbook: false,
  //         },
  //         accessInfo: {
  //           country: 'IL',
  //           viewability: 'PARTIAL',
  //           embeddable: true,
  //           publicDomain: false,
  //           textToSpeechPermission: 'ALLOWED',
  //           epub: {
  //             isAvailable: true,
  //             acsTokenLink:
  //               'http://books.google.com/books/download/Keyword_Intelligence-sample-epub.acsm?id=SNAjMMp3H5UC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
  //           },
  //           pdf: {
  //             isAvailable: true,
  //             acsTokenLink:
  //               'http://books.google.com/books/download/Keyword_Intelligence-sample-pdf.acsm?id=SNAjMMp3H5UC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
  //           },
  //           webReaderLink:
  //             'http://play.google.com/books/reader?id=SNAjMMp3H5UC&hl=&source=gbs_api',
  //           accessViewStatus: 'SAMPLE',
  //           quoteSharingAllowed: false,
  //         },
  //         searchInfo: {
  //           textSnippet:
  //             'This unique, detailed guide to every aspect of keyword research also features case studies, examples, tutorials, tips, and previously undocumented techniques drawn from renowned keyword research expert Ron Jones&#39;s extensive professional ...',
  //         },
  //       },
  //       {
  //         kind: 'books#volume',
  //         id: '0tdFAQAAIAAJ',
  //         etag: 'loIB3E7ExJY',
  //         selfLink: 'https://www.googleapis.com/books/v1/volumes/0tdFAQAAIAAJ',
  //         volumeInfo: {
  //           title: 'BOTS and Other Internet Beasties',
  //           authors: ['Joseph Williams'],
  //           publisher: 'Sams',
  //           publishedDate: '1996',
  //           description:
  //             "Describes how to use intelligent, robot-like programs to retrieve, quantify, and present useful information from the Internet, as well as how to create and customize them. Topics include filtering agents, search engines, BargainFinder, security issues, agent mobility, robots, and manufacturing agents. The languages used to author these agents--Tcl, Telescript, and Java--are also presented. For the casual to accomplished user. The CD-ROM contains a Tcl/Tk compiler from Sun Labs, a Java Developer's Kit, and links to Tcl resources and software agents. Annotation copyrighted by Book News, Inc., Portland, OR",
  //           industryIdentifiers: [
  //             {
  //               type: 'OTHER',
  //               identifier: 'UCSD:31822023709876',
  //             },
  //           ],
  //           readingModes: {
  //             text: false,
  //             image: false,
  //           },
  //           pageCount: 554,
  //           printType: 'BOOK',
  //           categories: ['Computers'],
  //           maturityRating: 'NOT_MATURE',
  //           allowAnonLogging: false,
  //           contentVersion: '0.5.2.0.preview.0',
  //           panelizationSummary: {
  //             containsEpubBubbles: false,
  //             containsImageBubbles: false,
  //           },
  //           imageLinks: {
  //             smallThumbnail:
  //               'http://books.google.com/books/content?id=0tdFAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
  //             thumbnail:
  //               'http://books.google.com/books/content?id=0tdFAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
  //           },
  //           language: 'en',
  //           previewLink:
  //             'http://books.google.com/books?id=0tdFAQAAIAAJ&q=search+terms&dq=search+terms&hl=&cd=8&source=gbs_api',
  //           infoLink:
  //             'http://books.google.com/books?id=0tdFAQAAIAAJ&dq=search+terms&hl=&source=gbs_api',
  //           canonicalVolumeLink:
  //             'https://books.google.com/books/about/BOTS_and_Other_Internet_Beasties.html?hl=&id=0tdFAQAAIAAJ',
  //         },
  //         saleInfo: {
  //           country: 'IL',
  //           saleability: 'NOT_FOR_SALE',
  //           isEbook: false,
  //         },
  //         accessInfo: {
  //           country: 'IL',
  //           viewability: 'NO_PAGES',
  //           embeddable: false,
  //           publicDomain: false,
  //           textToSpeechPermission: 'ALLOWED',
  //           epub: {
  //             isAvailable: false,
  //           },
  //           pdf: {
  //             isAvailable: false,
  //           },
  //           webReaderLink:
  //             'http://play.google.com/books/reader?id=0tdFAQAAIAAJ&hl=&source=gbs_api',
  //           accessViewStatus: 'NONE',
  //           quoteSharingAllowed: false,
  //         },
  //         searchInfo: {
  //           textSnippet:
  //             'We have an information request that we describe briefly in text form, the text of our <b>query</b> is matched to cataloged descriptions of ... A <b>search</b> for automobile will not find documents that use different <b>terms</b> for the same concept: car,&nbsp;...',
  //         },
  //       },
  //       {
  //         kind: 'books#volume',
  //         id: 'ZAH1AwAAQBAJ',
  //         etag: 'vgqiWlheC8Q',
  //         selfLink: 'https://www.googleapis.com/books/v1/volumes/ZAH1AwAAQBAJ',
  //         volumeInfo: {
  //           title: 'Power Query for Power BI and Excel',
  //           authors: ['Christopher Webb', 'Crossjoin Consulting Limited'],
  //           publisher: 'Apress',
  //           publishedDate: '2014-07-05',
  //           description:
  //             'Power Query for Power BI and Excel is a book for people who are tired of copying and pasting data into Excel worksheets. Power Query, part of the Microsoft Power BI suite, is a tool that automates the process of getting data into Excel and will save you hours of dull, repetitive, and error-prone work! Power Query makes it easy to extract data from many different data sources, filter that data, aggregate it, clean it and perform calculations on it, finally loading that data into either your worksheet or directly into the new Excel 2013 Data Model used by Power Pivot. This concise, practical book provides a complete guide to Power Query and how to use it to solve all of your Excel data-loading problems. Power Query for Power BI and Excel goes well beyond the surface of what Power Query can do. The book goes deep into the underlying M language, showing you how to do amazing things that aren’t going to be possible from just the GUI interface that is covered in most other books. You’ll have full command of the GUI, and you’ll be able to drop into the M language to go beyond what the GUI provides. The depth in this book makes it a must-have item for anyone who is pushing Power BI and Excel to their limits in the pursuit of business intelligence from data analysis. Teaches the basics of using Power Query to load data into Excel Helps you solve common, data-related problems with Power Query Shows how to write your own solutions in the powerful M language',
  //           industryIdentifiers: [
  //             {
  //               type: 'ISBN_13',
  //               identifier: '9781430266921',
  //             },
  //             {
  //               type: 'ISBN_10',
  //               identifier: '1430266929',
  //             },
  //           ],
  //           readingModes: {
  //             text: true,
  //             image: true,
  //           },
  //           pageCount: 261,
  //           printType: 'BOOK',
  //           categories: ['Computers'],
  //           maturityRating: 'NOT_MATURE',
  //           allowAnonLogging: true,
  //           contentVersion: '1.6.5.0.preview.3',
  //           panelizationSummary: {
  //             containsEpubBubbles: false,
  //             containsImageBubbles: false,
  //           },
  //           imageLinks: {
  //             smallThumbnail:
  //               'http://books.google.com/books/content?id=ZAH1AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  //             thumbnail:
  //               'http://books.google.com/books/content?id=ZAH1AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  //           },
  //           language: 'en',
  //           previewLink:
  //             'http://books.google.com/books?id=ZAH1AwAAQBAJ&pg=PA42&dq=search+terms&hl=&cd=9&source=gbs_api',
  //           infoLink:
  //             'http://books.google.com/books?id=ZAH1AwAAQBAJ&dq=search+terms&hl=&source=gbs_api',
  //           canonicalVolumeLink:
  //             'https://books.google.com/books/about/Power_Query_for_Power_BI_and_Excel.html?hl=&id=ZAH1AwAAQBAJ',
  //         },
  //         saleInfo: {
  //           country: 'IL',
  //           saleability: 'NOT_FOR_SALE',
  //           isEbook: false,
  //         },
  //         accessInfo: {
  //           country: 'IL',
  //           viewability: 'PARTIAL',
  //           embeddable: true,
  //           publicDomain: false,
  //           textToSpeechPermission: 'ALLOWED',
  //           epub: {
  //             isAvailable: true,
  //             acsTokenLink:
  //               'http://books.google.com/books/download/Power_Query_for_Power_BI_and_Excel-sample-epub.acsm?id=ZAH1AwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
  //           },
  //           pdf: {
  //             isAvailable: true,
  //             acsTokenLink:
  //               'http://books.google.com/books/download/Power_Query_for_Power_BI_and_Excel-sample-pdf.acsm?id=ZAH1AwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
  //           },
  //           webReaderLink:
  //             'http://play.google.com/books/reader?id=ZAH1AwAAQBAJ&hl=&source=gbs_api',
  //           accessViewStatus: 'SAMPLE',
  //           quoteSharingAllowed: false,
  //         },
  //         searchInfo: {
  //           textSnippet:
  //             'When you perform a <b>search</b> using the Online <b>Search</b> button, a new tab will appear on the Excel ribbon: the <b>Search</b> tab, shown in Figure 2-43. Figure 2-43. The <b>Search</b> tab In the Refine section, the buttons allow you to <b>search</b> for <b>terms</b> in&nbsp;...',
  //         },
  //       },
  //       {
  //         kind: 'books#volume',
  //         id: 'g7YNeVDDbVgC',
  //         etag: 'AdGoyhPZDpE',
  //         selfLink: 'https://www.googleapis.com/books/v1/volumes/g7YNeVDDbVgC',
  //         volumeInfo: {
  //           title: 'Flexible Query Answering Systems',
  //           subtitle:
  //             '7th International Conference, FQAS 2006, Milan, Italy, June 7-10, 2006',
  //           authors: [
  //             'Henrik Legind Larsen',
  //             'Gabriella Pasi',
  //             'Daniel Ortiz-Arroyo',
  //             'Troels Andreasen',
  //             'Henning Christiansen',
  //           ],
  //           publisher: 'Springer Science & Business Media',
  //           publishedDate: '2006-05-30',
  //           description:
  //             'This book constitutes the refereed proceeding of the 7th International Conference on Flexible Query Answering Systems, FQAS 2006, held in Milan, Italy in June 2006. The 60 revised full papers presented were carefully reviewed and selected from numerous submissions. The papers are organized in topical sections on flexibility in database management and quering, vagueness and uncertainty in XML quering and retrieval, information retrieval and filtering, multimedia information access, user modeling and personalization, knowledge and data extraction, intelligent information extraction from text, and knowledge representation and reasoning.',
  //           industryIdentifiers: [
  //             {
  //               type: 'ISBN_13',
  //               identifier: '9783540346388',
  //             },
  //             {
  //               type: 'ISBN_10',
  //               identifier: '3540346384',
  //             },
  //           ],
  //           readingModes: {
  //             text: false,
  //             image: true,
  //           },
  //           pageCount: 730,
  //           printType: 'BOOK',
  //           categories: ['Computers'],
  //           maturityRating: 'NOT_MATURE',
  //           allowAnonLogging: false,
  //           contentVersion: '0.1.2.0.preview.1',
  //           panelizationSummary: {
  //             containsEpubBubbles: false,
  //             containsImageBubbles: false,
  //           },
  //           imageLinks: {
  //             smallThumbnail:
  //               'http://books.google.com/books/content?id=g7YNeVDDbVgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  //             thumbnail:
  //               'http://books.google.com/books/content?id=g7YNeVDDbVgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  //           },
  //           language: 'en',
  //           previewLink:
  //             'http://books.google.com/books?id=g7YNeVDDbVgC&pg=PA582&dq=search+terms&hl=&cd=10&source=gbs_api',
  //           infoLink:
  //             'http://books.google.com/books?id=g7YNeVDDbVgC&dq=search+terms&hl=&source=gbs_api',
  //           canonicalVolumeLink:
  //             'https://books.google.com/books/about/Flexible_Query_Answering_Systems.html?hl=&id=g7YNeVDDbVgC',
  //         },
  //         saleInfo: {
  //           country: 'IL',
  //           saleability: 'NOT_FOR_SALE',
  //           isEbook: false,
  //         },
  //         accessInfo: {
  //           country: 'IL',
  //           viewability: 'PARTIAL',
  //           embeddable: true,
  //           publicDomain: false,
  //           textToSpeechPermission: 'ALLOWED',
  //           epub: {
  //             isAvailable: false,
  //           },
  //           pdf: {
  //             isAvailable: true,
  //             acsTokenLink:
  //               'http://books.google.com/books/download/Flexible_Query_Answering_Systems-sample-pdf.acsm?id=g7YNeVDDbVgC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
  //           },
  //           webReaderLink:
  //             'http://play.google.com/books/reader?id=g7YNeVDDbVgC&hl=&source=gbs_api',
  //           accessViewStatus: 'SAMPLE',
  //           quoteSharingAllowed: false,
  //         },
  //         searchInfo: {
  //           textSnippet:
  //             '&lt;document_retrieval&gt; &lt;swish_query <b>query</b>=&quot;(talde OR aldra OR sail OR saldo OR samalda OR ekipo OR unitate OR lagunarte OR multzo OR abeltalde OR artalde OR jendetza OR nahaspila) AND (nagusi OR ugazaba OR buru OR buruzagi OR agintzaile&nbsp;...',
  //         },
  //       },
  //     ],
  //   }

  return googleBooks.items.filter((book) => {
    let regex = new RegExp(txt, 'i')
    console.log(regex.test(book.volumeInfo.title))
    return regex.test(book.volumeInfo.title)
  })
}

function updateBook(book) {
  const newBook = {
    title: book.volumeInfo.title,
    subtitle: book.volumeInfo.subtitle || '',
    id: book.id,
    authors: book.volumeInfo.authors || ['Barbara Cartland'],
    publishedDate: book.volumeInfo.publishedDate,
    description: book.volumeInfo.description || '',
    pageCount: book.pageCount,
    categories: ['Computers', 'Hack'],
    thumbnail: book.volumeInfo.imageLinks.thumbnail,
    listPrice: {
      amount: utilService.getRandomIntInclusive(50, 250),
      currencyCode: 'EUR',
      isOnSale: false,
    },
  }
  return newBook
}

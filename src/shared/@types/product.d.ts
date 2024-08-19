declare namespace Product {

    export interface ProductHomeDto {
        result: {
            popularList: [{
                id: 0,
                name: string,
                thumbnailUrl: string,
                investCount: 0,
                reqTickets: 0,
                bookmark: true
            }],
            imminentList: [{
                id: 0,
                name: string,
                thumbnailUrl: string,
                investCount: 0,
                reqTickets: 0,
                bookmark: true
            }],
            newList: [{
                id: 0,
                name: string,
                thumbnailUrl: string,
                investCount: 0,
                reqTickets: 0,
                bookmark: true
            }]
        }
    }
    export interface ProductDto {
        result: [{
            id: 0;
            name: string;
            thumbnailUrl: string;
            investCount: 0;
            reqTickets: 0;
        }];
    }
    export interface SearchProductDto {
        result: [{
            id: 0;
            name: string;
            thumbnailUrl: string;
            reqTickets: 0;
            dday: 0;
            bookmark: true;
        }];
    }

    export interface CategoryListDto {
        result: [{
            id: 0;
            name: string;
            thumbnailUrl: string;
            reqTickets: 0;
            dday: 0;
            bookmark: true;
        }];
    }

    export interface BookmarkListDto {
        result: {
            userId: 0;
            products: [{
                productId: 0;
                name: string;
                reqTickets: 0;
                thumbnailUrl: string;
                count: 0;
            }];
        };
    }
    export interface ProductImminentDto {
        img: string;
        dDay: number;
        title: string;
        ticket: string;
        bookmark: "BOOKMARK" | "UNBOOKMARK";
    }

    export interface BasicInfo {
        img: string;
        title: string;
        ticket: string;
        dDay: number;
        bookmark: "BOOKMARK" | "UNBOOKMARK";
        applicationNum: number;
    }

    export interface ProductStore extends BasicInfo {
        setImg: (value: string) => void;
        setTitle: (value: string) => void;
        setTicket: (value: string) => void;
        upDDay: () => void;
        downDDay: () => void;
        setBookmark: (value: BasicInfo[bookmark]) => void;
        upApplicationNum: () => void;
        downApplicationNum: () => void;
    }

    
}
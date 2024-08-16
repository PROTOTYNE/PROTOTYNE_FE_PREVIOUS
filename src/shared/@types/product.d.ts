declare namespace Product {
    export interface ProductPopularDto {
        result: [{
            id: 0;
            name: string;
            thumbnailUrl: string;
            investCount: 0;
            reqTickets: 0;
        }];
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
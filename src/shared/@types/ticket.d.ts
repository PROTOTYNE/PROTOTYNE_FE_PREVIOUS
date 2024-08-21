declare namespace Ticket {
  export interface getAllTicketResDto {
    result: {
      createdAt: string;
      name: string;
      ticketDesc: string;
      ticketChange: number;
    }[];
  }

  export interface getUsedTicketResDto {
    result: {
      createdAt: string;
      name: string;
      ticketDesc: string;
      ticketChange: number;
    }[];
  }

  interface Usage {
    date: string;
    title: string;
    company: string;
    amount: string;
  }
}

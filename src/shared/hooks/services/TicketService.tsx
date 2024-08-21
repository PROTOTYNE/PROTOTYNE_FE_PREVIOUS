import { API } from "@/shared";
import { AxiosResponse } from "axios";

export const TicketService = () => {
  const getTicketNumber = async () => {
    const {
      data: {
        result: { ticketNumber },
      },
    } = (await API.get("/ticket")) as AxiosResponse<User.GetTicketResDto>;

    return ticketNumber;
  };

  const buyTicket = async (ticketCount: number) => {
    await API.post(`ticket/buy?ticketCount=${ticketCount}`);
  };

  const getAllTicket = async (start: string, end: string) => {
    const {
      data: { result },
    } = (await API.get(
      `ticket/all?startDate=${start}&endDate=${end}`
    )) as AxiosResponse<Ticket.getAllTicketResDto>;

    const list = result.map((element) => ({
      date: element.createdAt.split("T")[0],
      title: element.name,
      detail: element.ticketDesc,
      amount: "티켓 " + element.ticketChange + "개",
    }));

    return list;
  };

  const getUsedTicket = async (start: string, end: string) => {
    const {
      data: { result },
    } = (await API.get(
      `ticket/used?startDate=${start}&endDate=${end}`
    )) as AxiosResponse<Ticket.getAllTicketResDto>;

    const list = result.map((element) => ({
      date: element.createdAt.split("T")[0],
      title: element.name,
      company: element.ticketDesc,
      amount: "티켓 " + element.ticketChange + "개",
    }));

    return list;
  };

  return { getTicketNumber, buyTicket, getAllTicket, getUsedTicket };
};

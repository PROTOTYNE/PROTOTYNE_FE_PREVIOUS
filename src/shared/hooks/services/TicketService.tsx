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

  return { getTicketNumber };
};

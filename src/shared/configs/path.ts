export enum PAGE_URL {
  SignIn = "/signin",
  Redirect = "/oauth",

  SignUp = "/signup",
  PersonalInfo = "/signup/personal",
  TermsOfUse = "/signup/term",

  MyInfo = "/myinfo",
  EditMyInfo = "/myinfo/edit",
  EditMyAddionalInfo = "/myinfo/additionaledit",

  Home = "/home",

  Product = "/product/:eventId",
  Address = "/address",
  AddressInfo = "/addressinfo/:id",
  MyTicket = "/myticket",

  My = "/my",

  Search = "/search",
  PopularDetail = "/detail/popular",
  ImminentDetail = "/detail/imminent",
  NewDetail = "/detail/new",
  Bookmark = "/bookmark",

  Alarm = "/alarm",

  Review = "/review/:id",
}

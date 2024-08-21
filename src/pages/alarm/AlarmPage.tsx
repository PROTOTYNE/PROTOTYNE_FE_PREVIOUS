import { useEffect, useState } from "react";

import { Header, Container } from "@/entities";
import { AuthService } from "@/shared";

import * as Styles from "./Styles";

const AlarmPage = () => {
  const { getAlarms } = AuthService();

  const [alarms, setAlarms] = useState<User.Alarms>([]);

  useEffect(() => {
    (async () => {
      const data = await getAlarms();
      setAlarms(data);
    })();
  }, []);

  console.log(alarms);

  return (
    <>
      <Header onBack background>
        알림
      </Header>
      <div style={{ height: "65px" }}></div>
      <Container>
        {alarms.map((alarm) => (
          <Styles.Element
            key={alarm.title}
            img={alarm.thumbnailUrl ?? "/apple-icon-180x180.png"}
            name={alarm.title}
            content={alarm.contents}
            dateAgo={alarm.dateAgo}
          />
        ))}
      </Container>
    </>
  );
};

export default AlarmPage;

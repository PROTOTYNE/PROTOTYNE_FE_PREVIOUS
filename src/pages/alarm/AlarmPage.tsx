import { useEffect, useState } from "react";

import { Header, Container } from "@/entities";
import { AuthService } from "@/shared";

import * as Styles from "./Styles";

const AlarmPage = () => {
  const { getAlarm } = AuthService();

  const [alarms, setAlarms] = useState<User.Alarms>([]);

  useEffect(() => {
    (async () => {
      const data = await getAlarm();
      setAlarms(data);
    })();
  }, []);

  return (
    <>
      <Header onBack>알림</Header>
      <div style={{ height: "65px" }}></div>
      <Container>
        {alarms.map((alarm) => (
          <Styles.Element
            key={alarm.name}
            img={alarm.img}
            name={alarm.name}
            content={alarm.content}
            time={alarm.time}
          />
        ))}
      </Container>
    </>
  );
};

export default AlarmPage;

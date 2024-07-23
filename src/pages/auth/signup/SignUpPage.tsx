import { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import { Button } from "@/entities";

import * as Styles from "./Styles";

const SignUpPage = () => {
  const [progress, setProgress] = useState(1);

  return (
    <>
      <ProgressBar
        completed={progress}
        maxCompleted={3}
        labelColor="#6482EB"
        bgColor="#6482EB"
        baseBgColor="#d9d9d9"
        borderRadius="3px"
      />
      SingUp
      <Button
        onClick={() => {
          setProgress(progress + 1);
        }}
      >
        {progress !== 3 ? "계속하기" : "가입하기"}
      </Button>
    </>
  );
};

export default SignUpPage;

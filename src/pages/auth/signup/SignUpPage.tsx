import * as Styles from "./Styles";

import ProgressBar from "@ramonak/react-progress-bar";

const SignUpPage = () => {
  return (
    <>
      <ProgressBar
        completed={1}
        maxCompleted={3}
        labelColor="#6482EB"
        bgColor="#6482EB"
        baseBgColor="#d9d9d9"
        borderRadius="3px"
      />
      SingUp
    </>
  );
};

export default SignUpPage;

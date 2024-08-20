import { useNavigate } from "react-router";

import {
  Background,
  Header,
  Button,
  SelectInput,
  MultiSelectInput,
} from "@/entities";
import {
  useUserStore,
  additionalInfoOptions,
  AuthService,
  PAGE_URL,
} from "@/shared";

import * as Styles from "./Styles";

const EditMyAddtionalInfoPage = () => {
  const navigate = useNavigate();

  const userStore = useUserStore((state) => state);

  const { updateAdditionalInfo } = AuthService();

  return (
    <>
      <Background src="/background/signup.jpg" />
      <Header onBack>추가 정보 수정</Header>
      <Styles.Container>
        <Styles.Title>
          추가정보를 입력하면 <br />더 많은 시제품을 체험할 수 있어요!
        </Styles.Title>
        <Styles.SubTitle>
          모두 입력하지 않아도 서비스 이용이 가능합니다.
        </Styles.SubTitle>
        <Styles.SubTitle>
          추가 정보 수정은 3개월에 한 번만 가능합니다.
        </Styles.SubTitle>
        <Styles.ScrollArea>
          {additionalInfoOptions.map((additionalInfoOption, index) => {
            if (index < 4)
              return (
                <SelectInput
                  key={additionalInfoOption.name}
                  label={additionalInfoOption.label}
                  option={
                    additionalInfoOption.options as {
                      label: string;
                      value: string | number;
                    }[]
                  }
                  onChange={(newValue) => {
                    if (newValue) {
                      if (additionalInfoOption.name === "occupation")
                        userStore.setOccupation(newValue.value);
                      else if (additionalInfoOption.name === "income")
                        userStore.setIncome(newValue.value);
                      else if (
                        additionalInfoOption.name === "familyComposition"
                      )
                        userStore.setFamilyComposition(newValue.value);
                      else if (additionalInfoOption.name === "healthStatus")
                        userStore.setHealthStatus(newValue.value);
                    }
                  }}
                />
              );
            else
              return (
                <MultiSelectInput
                  key={additionalInfoOption.name}
                  label={additionalInfoOption.label}
                  options={
                    additionalInfoOption.options as {
                      label: string;
                      value: string | number;
                    }[]
                  }
                  onClick={
                    additionalInfoOption.name === "interests"
                      ? (value) => {
                          if (!userStore.interests.includes(value))
                            userStore.addInterest(value);
                          else userStore.deleteInterest(value);
                        }
                      : additionalInfoOption.name === "productTypes"
                      ? (value) => {
                          if (
                            !userStore.productTypes.includes(
                              value as User.ProductType
                            )
                          )
                            userStore.addProductType(value as User.ProductType);
                          else
                            userStore.deleteProductType(
                              value as User.ProductType
                            );
                        }
                      : (value) => {
                          if (!userStore.phones.includes(value as User.Phone))
                            userStore.addPhone(value as User.Phone);
                          else userStore.deletePhone(value as User.Phone);
                        }
                  }
                />
              );
          })}
        </Styles.ScrollArea>
        <div style={{ height: "50px" }}></div>
      </Styles.Container>
      <Button
        onClick={() => {
          updateAdditionalInfo().then(() => {
            navigate(PAGE_URL.MyInfo);
          });
        }}
      >
        저장하기
      </Button>
    </>
  );
};

export default EditMyAddtionalInfoPage;

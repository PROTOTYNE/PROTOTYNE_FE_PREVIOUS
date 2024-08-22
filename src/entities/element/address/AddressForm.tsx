import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";

import AddressSearchModal from "./AddressSearchModal";

import { AuthService } from "@/shared";
import { Header } from "../Header";

const FormContainer = styled.div`
  padding: 10px;
  background-color: #f9f9f9;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 8px;

  margin-top: 50px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  color: #333;
`;

const Input = styled.input`
  width: calc(100% - 22px);
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #007aff;
    outline: none;
  }
`;

const SearchButton = styled.button`
  width: 230px;
  padding: 10px;
  background-color: #0d1b4a;
  color: white;
  text-align: center;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;

const FindAddress = styled.div`
  display: flex;
  gap: 15px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const SubmitButton = styled.button<{ disabled: boolean }>`
  position: fixed;

  bottom: 3%;
  left: 50%;
  transform: translate(-50%, 0%);

  width: 85%;
  height: 25px;
  text-align: center;
  padding: 12px;

  background: ${({ disabled }) =>
    disabled
      ? "#D9D9D9"
      : "linear-gradient(270deg, #0D1B4A 0%, #476090 50%, #7995B2 100%);"};
  color: white;

  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const AddressForm: React.FC = () => {
  const [recipient, setRecipient] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [detailedAddress, setDetailedAddress] = useState("");
  const [saveAsDefault, setSaveAsDefault] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFormValid, setIsFormValid] = useState<boolean | string>(false);

  const navigate = useNavigate();
  const { patchDelivery } = AuthService();

  useEffect(() => {
    if (
      recipient &&
      phone &&
      address &&
      detailedAddress &&
      detailedAddress.length > 4 &&
      phone.length > 4 &&
      address.length > 4
    )
      setIsFormValid(true);
    else setIsFormValid(false);
  }, [recipient, phone, address, detailedAddress]);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleSelectAddress = (selectedAddress: string) => {
    setAddress(selectedAddress);
  };

  const handleSubmit = () => {
    if (!isFormValid) return;

    patchDelivery({
      deliveryName: recipient,
      deliveryPhone: phone,
      baseAddress: address,
      detailAddress: detailedAddress,
    }).then(() => {
      navigate(-1);
    });
  };

  /* const handleCloseCompleteModal = () => {
    setIsCompleteModalVisible(false);
  }; */

  return (
    <>
      <Header onBack>배송지 입력</Header>
      <FormContainer>
        <h3>배송지 정보</h3>
        <FormGroup>
          <Label htmlFor="recipient">받으실 분</Label>
          <Input
            id="recipient"
            type="text"
            placeholder="최대 10글자 작성해주세요"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="phone">휴대폰 번호</Label>
          <Input
            id="phone"
            type="text"
            placeholder="010-XXXX-XXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="address">주소</Label>
          <FindAddress>
            <Input
              id="address"
              type="text"
              placeholder="주소 찾기로 입력해주세요"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              readOnly
            />
            <SearchButton onClick={handleOpenModal}>주소 찾기</SearchButton>
          </FindAddress>
        </FormGroup>

        <FormGroup>
          <Input
            type="text"
            placeholder="상세 주소를 입력해주세요 (5자 이상)"
            value={detailedAddress}
            onChange={(e) => setDetailedAddress(e.target.value)}
          />
        </FormGroup>

        <CheckboxContainer>
          <Checkbox
            id="defaultAddress"
            type="checkbox"
            checked={saveAsDefault}
            onChange={() => setSaveAsDefault(!saveAsDefault)}
          />
          <Label htmlFor="defaultAddress">기본 주소로 저장하기</Label>
        </CheckboxContainer>

        <SubmitButton disabled={!isFormValid} onClick={handleSubmit}>
          체험 신청하기
        </SubmitButton>
      </FormContainer>
      <AddressSearchModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        onSelectAddress={handleSelectAddress}
      />
    </>
  );
};

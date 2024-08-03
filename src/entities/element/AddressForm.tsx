import React, { useState } from 'react';
import styled from '@emotion/styled';
import ApplyComplete from './ApplyComplete';


const TopBar = styled.div`
    display: flex;
    justify-content: center;
    height: 10%;
    text-align: center;
`
//TODO: 상단바 닫기 버튼 추가 

const FormContainer = styled.div`
  padding: 10px;
  background-color: #F9F9F9;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 8px;
`;

const FormTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
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
`;

//TODO: 주소 찾기 버튼 클릭 시 모달 생성 기능 추가 

const FindAddress = styled.div`
    display: flex;
    gap: 15px;
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  position: fixed;
  bottom: 3%;
  width: 85%;
  height: 25px;
  text-align: center;
  padding: 12px;
  background-color: #D9D9D9;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
`;

//TODO: Input 입력 완료시 '체험 신청하기' 버튼 활성화 
//TODO: 체험 신청 완료 모달 AddressForm으로 옮기기

/*
<ApplyComplete visible={isModalVisible} onClose={handleCloseModal} />
체험 신청 완료 모달
*/

const AddressForm: React.FC = () => {
  const [recipient, setRecipient] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [detailedAddress, setDetailedAddress] = useState('');
  const [saveAsDefault, setSaveAsDefault] = useState(false);

  return (
    <div>
        <TopBar>
            <FormTitle>배송지 입력</FormTitle>
        </TopBar>
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
                    />
                    <SearchButton>주소 찾기</SearchButton>
                </FindAddress>
            </FormGroup>

            <FormGroup>
            <Input
                type="text"
                placeholder="상세 주소를 입력해주세요"
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

            <SubmitButton>체험 신청하기</SubmitButton>
        </FormContainer>

            </div>        
  );
};

export default AddressForm;

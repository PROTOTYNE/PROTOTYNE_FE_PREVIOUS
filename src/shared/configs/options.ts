export const additionalInfoOptions: {
  name: keyof User.AdditionalInfo;
  label: string;
  options: {
    value:
      | User.AdditionalInfo[keyof User.AdditionalInfo]
      | User.Interest
      | User.Phone
      | User.ProductType;
    label: string;
  }[];
}[] = [
  {
    name: "occupation",
    label: "직업",
    options: [
      { value: "STUDENT", label: "학생" },
      { value: "OFFICE", label: "사무직" },
      { value: "PROFESSIONAL", label: "전문직" },
      { value: "SELFEMPLOYED", label: "자영업" },
      { value: "OTHER", label: "기타" },
    ],
  },
  {
    name: "income",
    label: "소득 수준 (단위: 만원)",
    options: [
      { value: 2000, label: "2000 이내 " },
      { value: 4000, label: "2000-4000" },
      { value: 6000, label: "4000-6000" },
      { value: 8000, label: "6000-8000" },
      { value: 9999, label: "8000 이상" },
    ],
  },
  {
    name: "familyComposition",
    label: "가족 구성",
    options: [
      { value: 1, label: "1인 가구" },
      { value: "COUPLE", label: "부부" },
      { value: "COUPLE&CHILDREN", label: "부부 + 자녀" },
      { value: "PARENTS&CHILDREN", label: "부모 + 자녀" },
      { value: "EXTENDFAMILY", label: "대가족 (3세대 이상)" },
    ],
  },
  {
    name: "healthStatus",
    label: "건강 상태",
    options: [
      { value: 1, label: "매우 건강 (규칙적인 운동)" },
      { value: 2, label: "건강 (가끔 운동)" },
      { value: 3, label: "보통 (운동 안함, 질병 없음)" },
      { value: 4, label: "건강 약간 문제 (가벼운 질병)" },
      { value: 5, label: "건강 문제 있음 (만성 질병)" },
    ],
  },
  {
    name: "interests",
    label: "관심사",
    options: [
      { value: "FITNESS", label: "운동/피트니스" },
      { value: "TRAVEL", label: "여행" },
      { value: "READING&MOVIES", label: "독서/영화" },
      { value: "COOKING", label: "요리" },
      { value: "GAMES", label: "게임" },
    ],
  },
  {
    name: "productTypes",
    label: "관심 제품 유형",
    options: [
      { value: "ELECTRONIC", label: "전자기기" },
      { value: "FASHION&BEAUTY", label: "패션/뷰티" },
      { value: "FOOD", label: "식음료" },
      { value: "HOUSEHOLD", label: "생활용품" },
      { value: "HEALTH", label: "건강/웰빙" },
    ],
  },
  {
    name: "phones",
    label: "주로 사용하는 스마트 기기 기종",
    options: [
      { value: "SMARTPHONE1", label: "출시 1년 이내 핸드폰" },
      { value: "SMARTPHONE2", label: "출시 1년 이상 2년 이내  핸드폰" },
      { value: "SMARTPHONE9", label: "출시 2년 이상 핸드폰" },
      { value: "TABLET", label: "태블릿" },
      { value: "SMARTWATCH", label: "스마트워치" },
    ],
  },
];

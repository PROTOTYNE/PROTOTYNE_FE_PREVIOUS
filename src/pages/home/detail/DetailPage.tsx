import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Prototypes } from "@/widget"
import styled from "@emotion/styled";
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { ProductDetailService } from "@/shared";

const productDetailService = ProductDetailService();

const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 20px 0px 10px 20px;
    background-color: white;
    height: 30px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
`;
const Container = styled.div`
    background-color: #F9F9F9;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
`;
const Title = styled.h3`
    margin: 20px 10px;
`;

interface PrototypeProp {
    id: 0;
    name: string;
    thumbnailUrl: string;
    investCount: 0;
    reqTickets: 0;
}

const DetailPage = ({type} : {type: string}) => {
    const navigate = useNavigate();
    const [product, setProduct] = useState<PrototypeProp[]>([]);

    const fetchProduct = async () => {
        const productArray = await productDetailService.getProductDetail(type);
        return productArray;
    }
    
    useEffect(() => {
        fetchProduct()
        .then(product => setProduct(product));
    }, [])

    const getTitle = (type: string) => {
        if (type === "popular") {
            return "지금 인기있는 시제품입니다!";
        } else if (type === "imminent") {
            return "체험 신청이 마감 임박한 시제품입니다!";
        } else {
            return "신규 등록된 시제품입니다!";
        }
    }; 

    return (
        <>
            <Header>
                <ArrowBackIosNewRoundedIcon onClick={() => {navigate('/home')}} />
            </Header>
            <Container>
                <Title>
                    {getTitle(type)}
                </Title>
                <Prototypes
                    type={type}
                    prototypes={product}
                />
            </Container>
        </>
    );
};

export default DetailPage;
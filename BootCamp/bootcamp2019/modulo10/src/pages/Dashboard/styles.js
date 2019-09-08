import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    /* deixa o conteudo em baixo do topete do iphone(SafeAreaView)*/
    flex: 1;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    align-self: center;
    margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
    contentContainerStyle: {padding: 30},
    showsVerticalScrollIndicator: false,
})``;